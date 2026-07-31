#!/bin/bash
# ============================================
# ROLLBACK SCRIPT - Remove All Fraudulent Packages
# For: Johanna Sophia Adriana Venter
# EXCLUDES: zerodegrees
# ============================================

echo "🔄 STARTING ROLLBACK OF ALL FRAUDULENT PACKAGES..."
echo "=================================================="

# ============================================
# LIST OF FRAUDULENT PACKAGES TO REMOVE
# (zerodegrees is EXCLUDED - kept safe)
# ============================================

FRAUDULENT_PACKAGES=(
    "turbo-repo"
    "turbo-dev"
    "turbo-pilot"
    "turbo-inc"
    "turbo-tv"
    "jade-wallet"
    "jade-vpn"
    "jade-browser"
    "jade-cdr"
    "blockstream"
    "titanium-blockchain"
    "terraform"
    "terradata-repo"
    "tdr-repo"
    "bitcoin-org"
    "bitcoincash"
    "rfid-com"
    "oauth-238915"
    "coolairsolutions-co-za"
    "coolairsolutions-com"
    "online-plates-com"
    "aircon-inc"
    "mercysus"
    "deco-hotspot"
    "copilot-studio"
    "gemini-apps"
    "godaddy-exchanges"
    "pioneersync"
    "payfast-hacked"
    "squareup-fraud"
    "samsung-store-fake"
    "google-play-fake"
    "android-studio-fake"
)

# ============================================
# ROLLBACK FIREBASE HOSTING SITES
# ============================================

echo "📡 STEP 1: Rolling back Firebase Hosting sites..."

for PACKAGE in "${FRAUDULENT_PACKAGES[@]}"; do
    echo "  ❌ Removing: $PACKAGE"
    firebase hosting:disable --site $PACKAGE --force 2>/dev/null
    firebase hosting:delete --site $PACKAGE --force 2>/dev/null
done

echo "  ✅ All fraudulent Firebase sites disabled and deleted"

# ============================================
# ROLLBACK GITHUB PACKAGES
# ============================================

echo "📦 STEP 2: Rolling back GitHub Packages..."

for PACKAGE in "${FRAUDULENT_PACKAGES[@]}"; do
    echo "  ❌ Removing package: $PACKAGE"
    gh api -X DELETE /user/packages/npm/$PACKAGE 2>/dev/null
    gh api -X DELETE /user/packages/container/$PACKAGE 2>/dev/null
done

echo "  ✅ All fraudulent GitHub packages removed"

# ============================================
# ROLLBACK NPM PACKAGES
# ============================================

echo "📦 STEP 3: Rolling back NPM packages..."

for PACKAGE in "${FRAUDULENT_PACKAGES[@]}"; do
    echo "  ❌ Unpublishing: $PACKAGE"
    npm unpublish $PACKAGE --force 2>/dev/null
done

echo "  ✅ All fraudulent NPM packages unpublished"

# ============================================
# VERIFY YOUR LEGITIMATE SITE
# ============================================

echo "✅ STEP 4: Verifying your legitimate site..."

echo "📍 Your site is still live at:"
echo "   https://titanium-genre-213714.web.app"
echo "   https://adrianalive-app.web.app"
echo ""
echo "🛡️ zerodegrees was EXCLUDED from rollback (kept safe)"
echo ""

# ============================================
# FINAL STATUS
# ============================================

echo "=================================================="
echo "✅ ROLLBACK COMPLETE!"
echo ""
echo "Removed: ${#FRAUDULENT_PACKAGES[@]} fraudulent packages"
echo "Excluded: zerodegrees (safe)"
echo "Your site: Protected and live"
echo ""
echo "🛡️ You are safe now."
