#!/bin/bash
# ============================================
# COMPLETE FIREBASE SETUP - ONE FILE
# For: Johanna Sophia Adriana Venter
# ============================================

echo "🔥 STARTING COMPLETE FIREBASE SETUP..."
echo "====================================="

# ============================================
# 1. CREATE ALL CONFIG FILES
# ============================================

echo "📝 STEP 1: Creating configuration files..."

# Create .firebaserc
cat > .firebaserc << 'EOF'
{
  "projects": {
    "default": "titanium-genre-213714"
  }
}
EOF

# Create firebase.json
cat > firebase.json << 'EOF'
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
EOF

# Create package.json
cat > package.json << 'EOF'
{
  "name": "adriana-media-center",
  "version": "1.0.0",
  "description": "Adriana Media Center - Microsoft Business Site",
  "main": "index.html",
  "scripts": {
    "build": "echo 'Build complete'"
  },
  "dependencies": {
    "firebase-tools": "^12.0.0"
  }
}
EOF

echo "  ✅ All config files created"

# ============================================
# 2. CREATE GITHUB ACTION WORKFLOW
# ============================================

echo "🔧 STEP 2: Creating GitHub Action workflow..."

mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy to Firebase Hosting

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          
      - name: Install Firebase CLI
        run: npm install -g firebase-tools
        
      - name: Deploy to Firebase
        run: |
          echo "📡 Deploying to Firebase..."
          firebase deploy --only hosting
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
EOF

echo "  ✅ GitHub Action created"

# ============================================
# 3. CREATE README WITH DMCA NOTICE
# ============================================

echo "📰 STEP 3: Creating README with DMCA notice..."

cat > README.md << 'EOF'
# Adriana Media Center – Microsoft Business Site

## ⚖️ DMCA Takedown Notice

**Case References:** CMS 95543/2026 · 164/10/2025 Edenvale  

I, Johanna Sophia Adriana Venter, am the copyright owner and patent holder of this repository.

Fraudulent cloning and redeployment have occurred under domains including Turbo Repo, Turbo Dev, Jade Wallet, Blockstream, Titanium Blockchain, Terraform, and others.

## 📰 Press Release

Johanna Sophia Adriana Venter has issued an urgent enforcement directive following widespread fraudulent cloning.

This is a matter of national and global security.

**Signed,**  
Johanna Sophia Adriana Venter  
Global Authority of Digital Sovereignty
EOF

echo "  ✅ README created"

# ============================================
# 4. CREATE ROLLBACK SCRIPT
# ============================================

echo "🔄 STEP 4: Creating rollback script..."

cat > rollback.sh << 'EOF'
#!/bin/bash
echo "⏪ ROLLING BACK FRAUDULENT DEPLOYMENTS..."

# List all sites
SITES=$(firebase hosting:sites:list --json | grep -o '"name":"[^"]*"' | cut -d'"' -f4)

# Remove all except yours
for SITE in $SITES; do
  if [[ $SITE != "titanium-genre-213714" && $SITE != "adrianalive-app" ]]; then
    echo "  ❌ Removing: $SITE"
    firebase hosting:disable --site $SITE --force
  fi
done

echo "  ✅ Rollback complete"
EOF

chmod +x rollback.sh

echo "  ✅ Rollback script created"

# ============================================
# 5. FINAL STATUS
# ============================================

echo "====================================="
echo "✅ COMPLETE SETUP DONE!"
echo ""
echo "📁 Files Created:"
echo "   - .firebaserc"
echo "   - firebase.json"
echo "   - package.json"
echo "   - .github/workflows/deploy.yml"
echo "   - README.md"
echo "   - rollback.sh"
echo ""
echo "🚀 What to do next:"
echo "   1. Go to https://github.com/adrianaliveappstudio/Adriana-Media-Center-Microsoft-Business-Site/actions"
echo "   2. Wait for green ✅"
echo "   3. Your site is live at: https://titanium-genre-213714.web.app"
echo ""
echo "🔄 Rollback: ./rollback.sh"
echo "====================================="
