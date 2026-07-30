/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
*/
chrome.runtime.onMessage.addListener((message) => {
    if (message.name == 'capturePerfData') {
        setTimeout(function () { getPerfData(); }, 0);
    }
});
window.addEventListener("mousedown", (event) => {
    if (!shouldCaptureEvent()) {
        return;
    }
    flushLastKeyboardAction();
    var dims = tryComputeFrameOffset(window, { x: event.clientX, y: event.clientY });
    if (!dims) {
        return;
    }
    var isTouch = event.sourceCapabilities ? event.sourceCapabilities.firesTouchEvents : false;
    logAction({
        eventType: "click",
        eventData: {
            x: dims.x,
            y: dims.y,
            text: getClickEventText(event, isTouch ? "Touch" : "Click")
        }
    });
}, true);
function tryComputeFrameOffset(win, dims) {
    try {
        dims.x = dims.x;
        dims.y = dims.y;
        dims = computeFrameOffset(window, { x: dims.x, y: dims.y });
    }
    catch (err) {
        // this is cors scenario. ignore logging the action in this case
        return null;
    }
    return dims;
}
function isFrame(win) {
    if (win === top) {
        return false;
    }
    return true;
}
function computeFrameOffset(win, dims) {
    dims = (typeof dims === 'undefined') ? { x: 0, y: 0 } : dims;
    if (isFrame(win)) {
        var rect = win.frameElement.getBoundingClientRect();
        dims.x += rect.left;
        dims.y += rect.top;
        dims = computeFrameOffset(win.parent, dims); // recursion
    }
    return dims;
}
;
window.addEventListener("keyup", (event) => {
    if (!shouldCaptureEvent()) {
        return;
    }
    lastTime = event.timeStamp;
    var dims;
    if (event.keyCode === ENTER_KEYCODE) {
        flushLastKeyboardAction();
        if (event.target.tagName.toLowerCase() === "body" && !isFrame(window)) {
            return;
        }
        dims = tryComputeFrameOffset(window, { x: event.target.getBoundingClientRect().left, y: event.target.getBoundingClientRect().top });
        if (!dims) {
            return;
        }
        var enterEvent = {
            x: dims.x,
            y: dims.y,
            text: "Press &lt;ENTER&gt;"
        };
        logAction({
            eventType: "keyboard",
            eventData: enterEvent
        });
    }
    else if (event.keyCode === TAB_KEYCODE) {
        flushLastKeyboardAction();
        if (event.target.tagName.toLowerCase() === "body" && !isFrame(window)) {
            return;
        }
        dims = tryComputeFrameOffset(window, { x: document.activeElement.getBoundingClientRect().left, y: document.activeElement.getBoundingClientRect().top });
        if (!dims) {
            return;
        }
        var tabEvent = {
            x: dims.x,
            y: dims.y,
            text: "Press &lt;TAB&gt;"
        };
        setTimeout(() => {
            logAction({
                eventType: "keyboard",
                eventData: tabEvent
            });
        }, 500);
    }
    else {
        if (event.target.tagName.toLowerCase() === "body" && !isFrame(window)) {
            return;
        }
        var text;
        var originalText;
        var trimmedText;
        if (event.target.type === "password") {
            text = "Enter password";
        }
        else if (event.target.textContent) {
            originalText = htmlEncode(event.target.textContent);
        }
        else {
            originalText = htmlEncode(event.target.value);
        }
        if (!text) {
            trimmedText = originalText;
            if (originalText && originalText.length > 100) {
                trimmedText = originalText.substring(0, 100) + "...";
            }
            text = "Update input field with value <i title='" + originalText + "'>" + trimmedText + " </i>";
        }
        dims = tryComputeFrameOffset(window, { x: event.target.getBoundingClientRect().left, y: event.target.getBoundingClientRect().top });
        if (!dims) {
            return;
        }
        lastEventData = {
            x: dims.x,
            y: dims.y,
            text: text
        };
        var eventTime = event.timeStamp;
        setTimeout(() => {
            if (lastEventData && lastTime && lastTime === eventTime) {
                flushLastKeyboardAction();
            }
        }, 500);
    }
}, true);
function htmlEncode(html) {
    if (html) {
        var node = document.createElement('a').appendChild(document.createTextNode(html)).parentNode;
        return node.innerHTML.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
    return "";
}
function flushLastKeyboardAction() {
    if (lastEventData) {
        logAction({
            eventType: "keyboard",
            eventData: lastEventData
        });
    }
    lastEventData = null;
    lastTime = null;
}
function logAction(data) {
    data.eventData.devicePixelRatio = window.devicePixelRatio || 1;
    if (!isInitialized) {
        chrome.storage.local.get("ActionLog", (items) => {
            isInitialized = true;
            isActionLogEnabled = items.ActionLog;
        });
    }
    chrome.runtime.sendMessage({
        notificationType: "1",
        data: data
    }, () => { });
}
function shouldCaptureEvent() {
    return !isInitialized || isActionLogEnabled;
}
function getClickEventText(event, actionName) {
    var targetName = getMouseTargetName(event);
    var tagetType = getMouseTargetType(event);
    return actionName + " on " + tagetType + " " + targetName;
}
function getMouseTargetName(event) {
    var targetName = "";
    if (event.target && event.target.innerText) {
        targetName = event.target.innerText;
        if (targetName && targetName.length > 150) {
            targetName = targetName.substring(0, 120) + "...";
        }
        if (targetName) {
            targetName = "<i>'" + targetName + "'</i>.";
        }
        else {
            targetName = ".";
        }
    }
    return targetName;
}
function getMouseTargetType(event) {
    var targetType = "";
    if (event.target && event.target.tagName) {
        var friendlyName = tagFriendlyNameLookup[event.target.tagName];
        if (friendlyName) {
            targetType = friendlyName;
        }
    }
    return targetType;
}
function getPerfData() {
    var rawData = window.performance.getEntries();
    var pageTimings = window.performance.timing;
    var data = new Array();
    for (var resource in rawData) {
        var dataElement = {};
        var removeNullFun = (key, value) => { if (value) {
            return value;
        } }; // to remove any null/undefined valued keys.
        // doing this to avoid the issue where chrome was crashing with "Aw, Snap". Feedback Ticket ID: 1660733
        var intermediateElement = JSON.parse(JSON.stringify(rawData[resource], removeNullFun));
        for (var attribute in intermediateElement) {
            if (typeof intermediateElement[attribute] == "string" || typeof intermediateElement[attribute] == "number") {
                dataElement[attribute] = intermediateElement[attribute];
            }
        }
        data.push(dataElement);
    }
    logPerfData({
        eventType: "perf collection",
        eventData: data,
        timing: pageTimings,
        requestURL: location.href
    });
}
// 64 - type of actual perf data
function logPerfData(data) {
    chrome.runtime.sendMessage({
        notificationType: "64",
        data: data
    }, () => { });
}
var ENTER_KEYCODE = 13;
var TAB_KEYCODE = 9;
var isInitialized = false;
var isActionLogEnabled = false;
var lastEventData;
var lastTime;
var tagFriendlyNameLookup = {};
var perfData;
(() => {
    tagFriendlyNameLookup["A"] = "link";
    tagFriendlyNameLookup["BUTTON"] = "button";
    tagFriendlyNameLookup["INPUT"] = "text box";
})();

//# sourceMappingURL=CaptureBrowserEvent.js.map
