# Grid-Banner Export (Photoshop)

Macht aus einem breiten Bild 3 Instagram-Posts, die im Profil wie ein nahtloser Banner wirken.
*Idee & Workflow: @shutterview.aviation · gebaut mit Claude*

**So funktioniert es:** Posts werden im Format 4:5 hochgeladen (1080×1350), das Profilraster zeigt aber nur die mittleren 3:4.
Das Skript schneidet drei sich überlappende 4:5-Posts aus einem Bereich von 3105×1350 Pixeln. So schließen die sichtbaren Teile
nahtlos aneinander, und jeder einzelne Post wirkt beim Öffnen trotzdem vollständig (siehe Grid-Banner-Preview.jpg).

## Installation (Menüeintrag)
**Variante A – Installer:** Terminal in diesem Ordner → `bash install.sh` (fragt nach dem Mac-Passwort).

**Variante B – von Hand:** `Grid-Banner-Export.jsx` direkt (nicht in einen Unterordner) kopieren nach
```
/Applications/Adobe Photoshop 2026/Presets/Scripts/
```
(im Finder: Programme → Adobe Photoshop 2026 → Presets → Scripts; im Terminal:
`sudo cp Grid-Banner-Export.jsx "/Applications/Adobe Photoshop 2026/Presets/Scripts/"`)

Danach **Photoshop komplett beenden (⌘Q) und neu starten** – neue Skripte erscheinen erst nach einem Neustart.
Menü: **Datei → Skripten → Grid-Banner Export**.

Ohne Installation: **Datei → Skripten → Durchsuchen …** und die Datei auswählen.

## Benutzung
1. Bild öffnen. Optional mit dem Freistellungswerkzeug den Ausschnitt wählen, Verhältnis **3105 × 1350** (≈ 2,3 : 1); sonst wird die Mitte verwendet.
2. Datei → Skripten → Grid-Banner Export, Zielordner wählen.
3. In dieser Reihenfolge posten: **post-1_rechts → post-2_mitte → post-3_links** (der neueste Post steht oben links).
4. Die drei Posts anpinnen, dann bleibt der Banner oben.

## Menüeintrag fehlt?
- Photoshop mit ⌘Q beendet (nicht nur das Fenster geschlossen)?
- Liegt die Datei am richtigen Ort? `ls "/Applications/Adobe Photoshop 2026/Presets/Scripts/"`
- Andere Photoshop-Version? „2026“ im Pfad durch deine Version ersetzen.

Kostenlos für die private, nicht-kommerzielle Nutzung (CC BY-NC 4.0, siehe LICENSE.txt – shutterview, github.com/shutterview), ohne Gewähr. Basierend auf dem aktuellen 3:4-Profilraster von Instagram.
