#target photoshop
/*
<javascriptresource>
<name>Grid-Banner Export</name>
<category>shutterview</category>
<about>Grid banner for Instagram v1.1 - shutterview</about>
</javascriptresource>
*/
// Grid-Banner Export \u2013 Idee von @shutterview.aviation, gebaut mit Claude
// Splits the active image into 3 Instagram posts (4:5, 1080x1350) that look seamless in the
// profile grid. The grid only shows the centre 3:4 of each post, so neighbouring posts overlap
// by 67.5 px in the source image \u2013 the hidden edges continue the picture when a post is opened.
(function () {
    if (app.documents.length === 0) { alert('Bitte \xf6ffne zuerst dein Banner-Bild.'); return; }
    var T = 1080, H = 1350, V = H * 3 / 4;                // V = visible width of one post in the grid (1012.5)
    var TOTAL = Math.round(3 * V + (T - V));               // 3105 x 1350 source area
    var oldUnits = app.preferences.rulerUnits; app.preferences.rulerUnits = Units.PIXELS;
    var out = Folder.selectDialog('Ordner f\xfcr die 3 Banner-Posts w\xe4hlen');
    if (!out) { app.preferences.rulerUnits = oldUnits; return; }
    var src = app.activeDocument, d = src.duplicate('grid-banner', true);
    app.activeDocument = d;
    try { d.flatten(); } catch (e) {}
    if (d.mode !== DocumentMode.RGB) d.changeMode(ChangeMode.RGB);
    try { d.convertProfile('sRGB IEC61966-2.1', Intent.RELATIVECOLORIMETRIC, true, true); } catch (e) {}
    if (d.bitsPerChannel !== BitsPerChannelType.EIGHT) d.bitsPerChannel = BitsPerChannelType.EIGHT;
    var w = d.width.as('px'), h = d.height.as('px'), s = Math.max(TOTAL / w, H / h);   // fill, centred
    d.resizeImage(UnitValue(Math.round(w * s), 'px'), UnitValue(Math.round(h * s), 'px'), 72, ResampleMethod.BICUBIC);
    w = d.width.as('px'); h = d.height.as('px');
    var ox = Math.round((w - TOTAL) / 2), oy = Math.round((h - H) / 2);
    d.crop([ox, oy, ox + TOTAL, oy + H]);
    var names = ['post-3_links.jpg', 'post-2_mitte.jpg', 'post-1_rechts.jpg'];
    for (var i = 0; i < 3; i++) {
        var x0 = Math.round(i * V), t = d.duplicate('tile', true);
        app.activeDocument = t;
        t.crop([x0, 0, x0 + T, H]);
        var o = new JPEGSaveOptions(); o.quality = 12; o.embedColorProfile = true;
        o.formatOptions = FormatOptions.STANDARDBASELINE; o.matte = MatteType.NONE;
        t.saveAs(new File(out.fsName + '/' + names[i]), o, true, Extension.LOWERCASE);
        t.close(SaveOptions.DONOTSAVECHANGES);
    }
    d.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument = src;
    app.preferences.rulerUnits = oldUnits;
    alert('Fertig!\n\nIn dieser Reihenfolge posten:\n1. post-1_rechts\n2. post-2_mitte\n3. post-3_links\n\nTipp: Alle drei Posts anpinnen, dann bleibt der Banner oben.');
})();
