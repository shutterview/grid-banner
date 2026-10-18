# Grid Banner Export (Photoshop)

Turns one wide image into 3 Instagram posts that look like one seamless banner in your profile grid.
*Idea & workflow: @shutterview.aviation · built with Claude*

**How it works:** posts are uploaded as 4:5 (1080×1350), but the profile grid only shows the centre 3:4.
The script cuts three overlapping 4:5 posts from a 3105×1350 area, so the visible parts join seamlessly
and every post still looks complete when opened (see Grid-Banner-Preview.jpg).

## Install (menu entry)
**Option A – installer:** Terminal in this folder → `bash install.sh` (asks for your Mac password).

**Option B – manually:** copy `Grid-Banner-Export.jsx` directly (not into a subfolder) to
```
/Applications/Adobe Photoshop 2026/Presets/Scripts/
```
(in Terminal: `sudo cp Grid-Banner-Export.jsx "/Applications/Adobe Photoshop 2026/Presets/Scripts/"`)

Then **quit Photoshop completely (⌘Q) and start it again** – new scripts only appear after a restart.
Menu: **File → Scripts → Grid Banner Export**.

Without installing: **File → Scripts → Browse…** and pick the file.

## Use
1. Open your image. Optional: choose the framing with the Crop tool, ratio **3105 × 1350** (≈ 2.3 : 1); otherwise the centre is used.
2. File → Scripts → Grid Banner Export, pick an output folder.
3. Post in this order: **post-1_right → post-2_middle → post-3_left** (the newest post appears top left).
4. Pin the three posts so the banner stays at the top.

## Menu entry missing?
- Restarted Photoshop with ⌘Q (not just closed the window)?
- Check the file is there: `ls "/Applications/Adobe Photoshop 2026/Presets/Scripts/"`
- Using another Photoshop version? Replace “2026” in the path with your version.

Free for personal, non-commercial use (CC BY-NC 4.0, see LICENSE.txt – shutterview, github.com/shutterview), shared as-is. Based on Instagram’s current 3:4 profile grid.
