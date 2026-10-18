#!/bin/bash
# Grid Banner Export – copies the script into Photoshop's Scripts folder (asks for your Mac password).
DIR="$(cd "$(dirname "$0")" && pwd)"; OK=0
for PS in /Applications/Adobe\ Photoshop*/Presets/Scripts; do
  [ -d "$PS" ] || continue
  sudo cp "$DIR/Grid-Banner-Export.jsx" "$PS/" && echo "Installed: $PS/Grid-Banner-Export.jsx" && OK=1
done
[ $OK = 1 ] && echo "Now quit Photoshop (⌘Q) and start it again → File → Scripts → Grid Banner Export" || echo "Photoshop not found in /Applications."
