#!/bin/bash
# Grid-Banner Export – kopiert das Skript in den Skript-Ordner von Photoshop (fragt nach dem Mac-Passwort).
DIR="$(cd "$(dirname "$0")" && pwd)"; OK=0
for PS in /Applications/Adobe\ Photoshop*/Presets/Scripts; do
  [ -d "$PS" ] || continue
  sudo cp "$DIR/Grid-Banner-Export.jsx" "$PS/" && echo "Installiert: $PS/Grid-Banner-Export.jsx" && OK=1
done
[ $OK = 1 ] && echo "Jetzt Photoshop beenden (⌘Q) und neu starten → Datei → Skripten → Grid-Banner Export" || echo "Photoshop wurde in /Programme nicht gefunden."
