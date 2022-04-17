#!/bin/bash

VERSION=$(cat src/components/app.svelte | grep \$title_bar | sed 's/.*title_bar = "\(.*\)";/\1/')
SJ=$(cat www/service-worker.js)
echo "const VERSION = '$VERSION';"  > www/service-worker.js
echo $SJ >> www/service-worker.js
echo "Updated service worker version to ${VERSION}"