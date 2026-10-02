# HD artwork production prompts

Generated on 2026-10-02 with the built-in ChatGPT image generator. The tool did not expose an exact model version. No external paid image service or CLI image API was used.

All source references were inspected before generation. PNG files were copied without image processing; atlas crops are manifest metadata. Original resources and exports were not edited.

## Town map — initial production specification

Reference: `../assets/pics/0011.png` (320×200). Generate a detailed painted HD version with the same complete 8:5 town composition, building locations, paths, clock and empty central dialog rectangle. Preserve the 1990s architecture, original palette hues, English place names and framing; add brickwork, roof, window and foliage detail. No new UI, people, objects or labels. The initial result mistakenly used UNIVERSITY; the targeted correction below changes it to HI-TECH U. Only the corrected result is distributed.

Selected file: `pics/town-11-corrected.png`.

## Character selection — initial production specification

Reference: `../assets/views/0500/00_00.png` (183×112). Repaint the four original full-body characters at higher detail, keeping order, poses, clothes, figure locations, panel dividers and image framing. Keep the header band blank so original runtime lettering remains in charge. Preserve the white T-shirt/jeans man, pink-shirt/shorts woman, lavender-shirt/dark-trousers man and floral-top/yellow-shorts woman. No new controls or extra people. Manifest replacement regions exclude the original heading, borders and small bottom tokens.

Selected file: `cels/character-selection-500.png`.

## Exact subsequent tool prompts

### Selection clipping correction after browser review

The first integrated screenshot revealed clipped hair under the original 14-pixel header mask. The following built-in edit produced the selected corrected file without changing the original controls or hit regions. The prior generated image remains in the generator archive.

```text
Use case: precise-object-edit. Production bug fix to attached four-character game selection artwork. Preserve the exact existing image canvas1606x979, four vertical panels, background colors, faces, hair, identities, outfits, body poses, shoes, small colored tokens, brushwork and all details. Change ONLY the vertical arrangement to prevent hair clipping under the real game header. The top blank blue header band must occupy y0 through y125 on the1606x979 image (14/112 of full image height). Move the existing horizontal black divider down from about y98 to y125. Fit all four COMPLETE figures inside the area below that divider with a small clear gap above every head: no hair or head pixel above y137. Keep every foot/shoe within y944. Achieve this by a subtle ~3percent vertical compression/downshift of the current body panels while holding their bottom positions essentially unchanged; retain exact x coordinates, vertical separators, poses, widths and scale relationship. The man's hair in panel3 must be fully visible below the new y125 line. Do not redraw or change the faces, clothing, expressions, anatomy or colors. Do not add text, captions, controls or labels. Do not crop. Do not add padding outside existing canvas. Single corrected asset with taller blank header and all four intact heads.
```

Each portrait uses a single 3×2 atlas. Five original references are passed in the order 0, 1, 2, 3, 5 because the built-in tool accepts at most five image paths. Frame 4 is an explicitly requested intermediate mouth expression; it is not claimed to reconstruct original pixels. All six original frames were inspected for the bank; the remaining sets were inspected in their five supplied reference states. Crop coordinates in `manifest.json` are authoritative, including fractional divisions where generated dimensions are not divisible by three or two.

### Bank

References:

- `assets/views/0354/00_00.png`
- `assets/views/0354/00_01.png`
- `assets/views/0354/00_02.png`
- `assets/views/0354/00_03.png`
- `assets/views/0354/00_05.png`

Transparency requested: `false` (selected originals are fully opaque).

```text
Use case: style-transfer. Production HD talking-portrait sprite atlas for original Jones in the Fast Lane bank clerk. The FIVE attached tiny original images are edit targets representing frames0,1,2,3,5 of the SAME person in that order; create frame4 as partlyopen transition between the supplied3 and5. Output ONE atlas laid out exactly3 equal-width columns by2 equal-height rows, frame0 upperleft,1 uppermiddle,2 upperright,3 lowerleft,4 lowermiddle,5 lowerright. Aim1632x928 pixels, eachcell544x464 (same68:58 originalaspect). No gaps, no labels, no outsideborder; eachcell is exactly aligned and fully fills its rectangle. Eachcell repeats the exact same portrait geometry, head angle, hair silhouette, shoulders and outfit, differing ONLY original subtle eye/mouth expression. Render new fine painted detail in the original 1990s adventure-game portrait style, not pixel enlargement, not photography. Preserve reference identity: short chestnut brown curly hair, thin wire glasses, light skin, taupe jacket and high white shirt collar, bust cropped at bottom, head centered. Match the original narrow black cellborder and flat deep royal-blue background, fully opaque. Match relative portrait bounding box: hair starts near x17/68,y6/58, head ends near x53/68,y46/58, shoulders fill width along bottom. Eyes, nose and glasses at fixed coordinates everyframe. Expression0 asreference neutral mouth slightly parted,1 nearclosed,2 subtlyparted,3 open rounded mouth,4 partlyopen,5 small closedmouth smile. Closely inspect corresponding reference eachframe; no inventedpose, no exaggeratedgrin, no headmovement. Preserve blue field surrounding portrait, don't add scenery, shadows, gradients, writing, captions or watermarks. Output only finished uniform2row3column atlas.
```

### Market

References:

- `assets/views/0353/00_00.png`
- `assets/views/0353/00_01.png`
- `assets/views/0353/00_02.png`
- `assets/views/0353/00_03.png`
- `assets/views/0353/00_05.png`

Transparency requested: `false` (selected originals are fully opaque).

```text
Use case: style-transfer. Production HD six-frame talking portrait atlas for Jones in the Fast Lane market clerk. Attached FIVE reference images are frames0,1,2,3,5 of the SAME original character. Repaint at high detail, preserving facial identity, hair, expression, head angle, portrait scale and clothing exactly. Sixthframe4 is a partly-open mouth intermediate between3 and5. OutputONE uniform3columns by2rows atlas, rowmajorframes0,1,2 then3,4,5. Eachcell originalaspect68:55; target1632x880 or sameaspect. Eachcell has identical fixed head, eyes, nose, shoulders and crop, only mouth changes. No margins,gaps,labels,outsideborder. Match narroworiginal blackcellborder and flat deep royal-blue background, fullyopaque. Subject: light-skinned young adult male market clerk, short light brown/blond hair, originalstraight-on head, dark blue checked shirt over lightundershirt, shoulders cropped at cellbottom. Fine hand-painted 1990s adventuregame portrait, detailed eyes, skin, fabric and hairbrushwork, crisp antialiased edges, not pixel enlargement, not photography. Reference original bounds: hairtop~3/55, cheekscenter~28/55, shouldersfillbottom. Expression0 neutral/slightlyparted,1 mouthclosed,2 parted,3 moreopen,4 partlyopen,5 tinyclosedmouthsmile asreference. Keep cellbackground and pose consistent, no redraw ofnewperson, no hat, no text, no captions, no watermark. Image MUST be complete3x2 animationatlas.
```

### University

References:

- `assets/views/0357/00_00.png`
- `assets/views/0357/00_01.png`
- `assets/views/0357/00_02.png`
- `assets/views/0357/00_03.png`
- `assets/views/0357/00_05.png`

Transparency requested: `false` (selected originals are fully opaque).

```text
Use case: style-transfer. Production HD six-frame talking portrait atlas for original Jones in the Fast Lane university professor. Attached FIVE referenceimages are frames0,1,2,3,5 of SAME character. Repaint with new high detail, preserve originalidentity, headangle, shape/scale, outfit and normalizedgeometry. Sixthframe4 is partly-openmouth intermediate3to5. OutputONE uniform3columns by2rows atlas, rowmajorframes0,1,2 then3,4,5. Eachcell originalaspect68:55; target1632x880 or sameaspect. Identical fixed hair, eyes,nose,head and shoulders throughout sixframes; only mouth/very subtle expression change. No gaps,margins,labels,outsideborder. Narrowblackoriginalcellborder and flat emerald-green background, fullyopaque. Subject: original mature dark-skinned male professor with round spectacles, salt-and-pepper beard and mustache, black mortarboard with tassel, dark blue academicgown and whitecollar. Mortarboard stretches horizontally near celltop; shoulder and beard matchreferenceposition. Render fine painted1990s adventuregame illustration, crisp high detail hairbeardandcloth, restrainedshading, not photo and not pixels. Frame0 neutral/slightlyparted,1closed,2parted,3open,4partlyopen,5 originalsmallsmile. No newpose, characterredesign, oversizedhead, missinghat, additionalaccessories,text,captions,watermark. Complete3x2spriteatlas only.
```

### Burger

References:

- `assets/views/0360/00_00.png`
- `assets/views/0360/00_01.png`
- `assets/views/0360/00_02.png`
- `assets/views/0360/00_03.png`
- `assets/views/0360/00_05.png`

Transparency requested: `false` (selected originals are fully opaque).

```text
Use case: style-transfer. Production HD talking-portrait spriteatlas for original Jones in the Fast Lane burgerrestaurant employee. Fiveattached originalframes0,1,2,3,5 are exactidentity,layoutandexpression references. Make sixthframe4 originalpartly-openmouthtransition. OutputONE3columns x2rows uniformatlas, frames0,1,2 upperrow,3,4,5 lowerrow. Eachcell68:55aspect; ideal1632x880px. No gutter,margins,labelsoroutsideborder. Allsixportraits identicalheadposition,scale,eyes,hair,shouldersandcropping; onlymouthchanges. Subject originalyoung male burgerclerk, light-medium warm skin, dark eyebrows, little darkhairvisible below whitepaperworkerhat with small blueandred emblem, white shirtwith redcollar accents asreference. Preserveexpression and broad restrained smile. Whitehatstartsnearcelltop2/55 andportraitshouldersfillbottom. Background flat muted blue-grey matchingreference, narrowblackcellborder, fullyopaque. Fresh detailed handpainted1990sadventuregameart, crisp paintedhair,fabricandfaces, not blurredpixels, not photograph. Frame0 neutral/slightlyparted,1closedmouthsmile,2parted,3open,4partlyopen,5gentlesmile. No newaccessories, no labels, no extra writing onhat, no watermark, no caption. Strictuniformsixframegameatlas.
```

### Rent

References:

- `assets/views/0351/00_00.png`
- `assets/views/0351/00_01.png`
- `assets/views/0351/00_02.png`
- `assets/views/0351/00_03.png`
- `assets/views/0351/00_05.png`

Transparency requested: `false` (selected originals are fully opaque).

```text
Use case: style-transfer. Production HD talking portrait atlas for original Jones in the Fast Lane rent-office clerk. FIVE attached original images show frames 0,1,2,3,5 in that order. Preserve exact character identity and pose while repainting with new detail. Create frame4 as partly open mouth transition. Output ONE uniform 3-column by 2-row atlas, frame0/1/2 above, 3/4/5 below. Each cell original aspect68:55, target1632x880. Fixed head, eyes, nose, glasses, hair, shoulders and cropping across all frames; change only mouth expression. Subject is original young adult woman with medium/light warm skin, shoulder-length wavy dark brown hair, round thin metal glasses, white blouse visible at bottom, facing directly forward. Match original scale: head starts near celltop, hair spreads to sides, shoulders cut off along bottom. Flat deep blue background, narrow black cell border, fully opaque. Detailed hand-painted 1990s adventure-game portrait with fine hair strands, eyes, skin and clothing brushwork; no pixelation, no photo. Frame0 neutral slightly parted,1 closed,2 parted,3 open rounded,4 partlyopen,5 slight smile, follow reference. No gaps or margins between cells. No change of character, no jewelry additions, no new accessories, no writing, labels, text or watermark. Complete six-frame sprite atlas only.
```

### Appliance

References:

- `assets/views/0358/00_00.png`
- `assets/views/0358/00_01.png`
- `assets/views/0358/00_02.png`
- `assets/views/0358/00_03.png`
- `assets/views/0358/00_05.png`

Transparency requested: `false` (selected originals are fully opaque).

```text
Use case: style-transfer. Production HD six-frame talking portrait atlas for original Jones in the Fast Lane appliance-store clerk. FIVE attached original frames represent0,1,2,3,5. Repaint exact original identity, shape, clothing, fixed pose and relative size with new fine painted detail. Create frame4 as mouth transition3to5. ONE3-column by2-row uniform atlas, ordered0,1,2 then3,4,5. Eachcell68:55 aspect,target1632x880. No gutters or outer margins or labels. Same fixed eyes,nose,glasses,hair,shoulder crop everyframe; only mouth expression changes. Subject original dark-skinned male clerk with very short black hair, thin wire glasses, white collared shirt and dark patterned tie, original friendly face and jaw shape. Fully opaque deep royal-blue background and narrow black border each cell. Headtop near y2/55, shoulders fill bottom. Detailed hand-painted 1990s game portrait, clear strands, skin and fabric details, restrained brushwork, no pixel enlargement or photographic restyle. Expressions in sequence neutral slightparting,closed,parted,open,partlyopen,smallsmile, following corresponding original reference. Keep character unchanged, no added accessories or hats, no lettering/captions/watermark. Finished6frameatlas.
```

### Clothing

References:

- `assets/views/0359/00_00.png`
- `assets/views/0359/00_01.png`
- `assets/views/0359/00_02.png`
- `assets/views/0359/00_03.png`
- `assets/views/0359/00_05.png`

Transparency requested: `false` (selected originals are fully opaque).

```text
Use case: style-transfer. Production HD six-frame talking portrait atlas for original Jones in the Fast Lane clothing-store clerk. FIVE attached original frames represent0,1,2,3,5 in that order. Repaint exact character identity, fixedpose, relativegeometry and clothing with new high detail. Create frame4 as transition between3and5. ONE uniform3columns by2rows sprite atlas, frame0/1/2 top and3/4/5 bottom. Eachcell68:55 aspect, target1632x880 pixels. No gaps,labels,margins or outer frame. Same head,eyes,nose,hair,shoulders and crop in allsixcells; only mouth changes. Original subject: medium-brown skinned man with short dark hair, thin round spectacles, a mustard-yellow jacket over blue patterned shirt and dark tie, facing forward with same original expression. Head near top, shoulders across bottom. Flat deep royal-blue background, narrow black cell borders, fullyopaque. Hand-painted fine 1990s adventuregame portrait, crisp hair and skin and fabric details, not pixels, not photograph. Mouth sequence neutral/slightlyparted,closed,parted,open,partlyopen,smile; follow originalmouthshape. Do not add hats or jewelry or text, do not change outfit, no scene or watermark. Complete3x2atlas only.
```

### Discount

References:

- `assets/views/0361/00_00.png`
- `assets/views/0361/00_01.png`
- `assets/views/0361/00_02.png`
- `assets/views/0361/00_03.png`
- `assets/views/0361/00_05.png`

Transparency requested: `false` (selected originals are fully opaque).

```text
Use case: style-transfer. Production HD talking portrait sprite atlas for original Jones in the Fast Lane discount-store clerk. FIVE attached original images are originalframes0,1,2,3,5. Preserve exact characteridentity, headpose, normalizedgeometry and outfit, repaint with new fine detail. Create frame4 as partly-open mouth between3and5. ONE uniform3column by2row atlas, rowmajorframes0,1,2 above3,4,5. Eachcell68:55aspect, target1632x880. No margins or gaps or labels. Allcells repeat fixed eyes,nose,hair,head,shouldersandcrop, change only mouth. Original subject: young light-skinned male with medium brown wavy feathered hair, longishface, light blue collared shirt with small multicolor red/green patterned details visible at lowerleft, mustardyellow outer garment at shoulders asreference. Flat deep royal-blue background, narrow black border, fullyopaque. Original headtopnearcelltop3/55 and shouldersfillbottom. Hand-painted detailed1990s adventuregame portrait, finehair, skinandcloth brushwork, not enlargedpixels or photography. Expressionsequence0neutral/slightlyparted,1closed,2parted,3roundedopen,4partlyopen,5subtlesmile, matching references. No characterredesign, addedaccessories, newlogos, writing,captions,watermark. Complete3x2gameatlas only.
```

### TownCorrection

References:

- `hd/pics/town-11.png`

Transparency requested: `false` (selected originals are fully opaque).

```text
Use case: precise-object-edit. Edit the attached finished town map. Change ONLY the gold text inside the existing dark brown university sign at lower center-right from 'UNIVERSITY' to exactly 'HI-TECH U' (H I hyphen T E C H space U). Same sign background, same gold embossed lettering style, centered in same rectangle, fit eight letters and hyphen and space. Preserve ALL other pixels, entire image layout, buildings, colors, English signs, clock, blank ivory central panel, trees, borders and resolution. No other changes. Finished production game background, not a mockup.
```
