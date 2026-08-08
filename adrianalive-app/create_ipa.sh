#!/bin/bash
# Run on macOS with Xcode
cd ~/adrianalive-android/AdrianaliveApp
cordova build ios --release --device
# The IPA will be at:
# platforms/ios/build/device/AdrianaliveApp.ipa
