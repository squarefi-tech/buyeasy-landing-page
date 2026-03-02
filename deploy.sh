#!/bin/bash

echo "🚀 Starting deployment process..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Configure git remote
echo -e "${BLUE}Step 1: Configuring Git remote...${NC}"
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/pbrik-tech/buyeasy-landing.git
echo -e "${GREEN}✓ Git remote configured${NC}"
echo ""

# Step 2: Push to GitHub
echo -e "${BLUE}Step 2: Pushing to GitHub...${NC}"
echo "Please enter your GitHub credentials when prompted:"
echo "  Username: pbrik-tech"
echo "  Password: [Your Personal Access Token]"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
    echo ""
    echo -e "${BLUE}Step 3: Vercel will automatically deploy your changes${NC}"
    echo ""
    echo "📍 Your site will be available at:"
    echo "   https://buyeasy-landing.vercel.app"
    echo ""
    echo "🔗 Check deployment status at:"
    echo "   https://vercel.com/pbrik-tech/buyeasy-landing"
    echo ""
    echo -e "${GREEN}✅ Deployment process complete!${NC}"
else
    echo ""
    echo -e "${RED}❌ Failed to push to GitHub${NC}"
    echo "Please check your credentials and try again."
    exit 1
fi
