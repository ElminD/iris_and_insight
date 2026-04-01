#!/bin/bash
set -e
npm run build
rsync -avz --delete dist/ user@DROPLET_IP:/var/www/irisandinsight.com/dist/
ssh user@DROPLET_IP "sudo systemctl reload nginx"
echo "Deployed successfully"
