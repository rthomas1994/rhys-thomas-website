#!/usr/bin/env bash
set -euo pipefail

# Deploy script for rhys-thomas-website
#
# Usage (on the droplet):
#   cd /var/www/html-rhys
#   ./deploy.sh
#
# This will:
#   - Pull the latest changes from git
#   - Use the current git commit hash as an asset version
#   - Generate index.html from index.template.html, replacing %ASSET_VERSION%

# Change to the project directory on the droplet
cd /var/www/html-rhys

# Pull latest code
git pull

# Use short git commit hash as a version identifier
VERSION=$(git rev-parse --short HEAD)
echo "Using asset version: $VERSION"

# Generate index.html from the template, replacing %ASSET_VERSION%
if [[ ! -f "index.template.html" ]]; then
 echo "Error: index.template.html not found in $(pwd)" >&2
 exit 1
fi

sed "s/%ASSET_VERSION%/${VERSION}/g" index.template.html > index.html

echo "Deployment complete. index.html updated with version $VERSION."