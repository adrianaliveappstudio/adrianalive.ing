/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
let initDcLocalStoragePromise;function isGoogleQuery(e){if(!e)return!1;try{const t=new URL(e);if(t.host.startsWith("www.google.")||t.host.startsWith("www.bing."))return!0}catch(e){return!1}return!1}function isSupportedBrowserVersion(){const e=navigator.userAgent.match(/Chrome\/([0-9]+)/);return!(e&&e.length>=2)||+e[1]>=SETTINGS.SUPPORTED_VERSION}function checkForThirdPartyCookiesStatus(e){const t=document.createElement("iframe");t.id="third-party-cookies-checker",t.style.display="none",t.src=chrome.runtime.getURL("browser/js/check-cookies.html");const i=(o,n,r)=>{"thirdPartyCookiesChecked"===o.content_op&&(t.remove(),chrome.runtime.onMessage.removeListener(i),e&&e(o.status))};chrome.runtime.onMessage.addListener(i),document.documentElement.appendChild(t)}const renderGenAIWebpageTPs=()=>new Promise((e=>{$(document).ready((()=>{chrome.runtime.sendMessage({type:"isPopupWindow"},(t=>{t.isPopup||async function(){const t=new ActionableCoachmark,i=await t.shouldShow(),o=await GenAIWebpageEligibilityService.shouldShowTouchpoints();if(i)t.render();else{const e=new FABManager;o?e.renderFAB():e.removeFAB()}e(o)}()}))}))})),initDcLocalStorageHelper=async()=>{const e=chrome.runtime.getURL("./common/local-storage.js"),{dcLocalStorage:t}=await import(e);return await t.init(),t},initDcLocalStorage=async()=>(initDcLocalStoragePromise||(initDcLocalStoragePromise=initDcLocalStorageHelper()),window.dcLocalStorage||(window.dcLocalStorage=await initDcLocalStoragePromise),window.dcLocalStorage);initDcLocalStorage(),chrome.runtime.onMessage.addListener(((e,t,i)=>{if("removeActionableCoachmark"===e.type){(new ActionableCoachmark).remove()}return(async()=>{switch(e.main_op){case"getHtmlContent":i({htmlContent:document.documentElement.outerHTML,url:document.URL,initialQuestion:initialQuestion,disqualified:!await GenAIWebpageEligibilityService.isCurrentWebPageReadable(),textContent:document.documentElement.innerText});break;case"highlightText":(new AttributionManager).highlightText(e);break;case"removeHighlights":(new AttributionManager).removeHighlights();break;case"shouldDisableGenAIForWebPagesTPs":i(await GenAIWebpageEligibilityService.shouldDisableTouchpoints());break;case"shouldShowGenAIForWebPagesTPs":i(await GenAIWebpageEligibilityService.shouldShowTouchpoints());break;case"rerunGenAiWebpage":GenAIWebpageEligibilityService.reset();const t=await renderGenAIWebpageTPs();i(t)}})(),!0}));