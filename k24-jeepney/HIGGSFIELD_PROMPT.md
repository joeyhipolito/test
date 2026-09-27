# Higgsfield prompt package: K24 owner-type jeepney, exploded view

Goal of the video: a photoreal studio turntable of a Philippine owner-type jeepney that comes apart into a floating exploded view while the camera orbits it, then reassembles. The video is a storyboard and reference for the website, not the final asset. The website will be real-time 3D so the viewer can orbit the full sphere themselves.

The vehicle concept behind the prompt is in `README.md`. Short version: stainless owner-type jeepney skin over a Volvo XC90 (P2) safety cell, Honda K24 mounted transversely, six-speed manual.

## How to run it in Higgsfield

Generate stills first, then animate. Text-to-video from scratch will drift on a subject this specific. Image-to-video with a locked start frame keeps the jeepney consistent across shots.

1. Generate the three still frames in section 4 with the image model (Soul, or whichever image model is on your plan). Pick one hero still and keep its seed.
2. Use the hero still as the start frame for every exterior shot. Use the exploded still as the end frame for the explode shot, and as the start frame for the exploded orbit shot, if the video model you pick supports start plus end frames (Kling 2.x does). This is the single biggest quality lever.
3. Use the camera presets where they exist (360 Orbit, Arc, Dolly In, Low Angle) and paste the shot prompt as the motion description. If a preset fights the prompt, drop the preset and keep the prompt.
4. Keep every clip 5 to 10 seconds. One camera move and one subject action per clip. Generate 3 or 4 variants per shot and pick.
5. Assemble the shots in order in the editor. Add a 0.5 second crossfade between clips that share a still.

Recommended settings

| Setting | Value |
| --- | --- |
| Aspect | 16:9 for the site hero; run a 9:16 pass later for phone |
| Duration | 5 s for orbit shots, 10 s for explode and reassemble |
| Frame rate | 24 fps |
| Resolution | highest your plan allows, upscale after |
| Seed | lock it after the first good hero still |
| Motion strength | medium; high causes part melting |
| Negative prompt | see section 5, paste into every generation |

## 1. Reusable blocks

Paste these in the order STYLE, SUBJECT, HIDDEN STRUCTURE (when needed), ENVIRONMENT, CAMERA, MOTION. Each shot below only changes CAMERA and MOTION.

### STYLE

```
Photorealistic CGI automotive product visualization, physically based rendering, clean studio look, razor sharp focus, subtle film grain, neutral colour grade, no text, no logos, no people.
```

### SUBJECT (exterior)

```
A custom Philippine owner-type jeepney, short wheelbase, two rows of seats, open sides with no doors. Body hand-formed from mirror-polished stainless steel with brushed stainless trim. Long flat hood, wide chrome slotted jeep-style grille, twin round headlights in chrome bezels, chrome front bumper with two vertical chrome overriders, three small chrome galloping horse ornaments in a row on the hood, flared stainless front and rear fenders, flat upright split windshield, long chrome sun-visor eyebrow over the windshield, tall chrome mirror stalks, a cluster of three chrome air horns on the roof, a deep crimson painted roof with matching crimson pinstripes along the body, tubular stainless sill rails along the open sides, forward-facing bench seats in black and crimson vinyl, wood-rim steering wheel, rear step bumper, spare wheel on a rear swing-out carrier, polished aluminium wheels with chunky all-terrain tyres.
```

### HIDDEN STRUCTURE (for explode, x-ray and engine shots)

```
Under the stainless skin is a modern unibody safety cell from a Swedish SUV, colour-coded by steel grade: dark grey mild steel floor pan, yellow high-strength steel front and rear rails, orange extra-high-strength roof bows and crash boxes, glossy red ultra-high-strength boron steel A-pillars, B-pillars, roof rails, sills and bumper beams. Aluminium front subframe with MacPherson struts and aluminium lower arms, multi-link independent rear suspension on its own subframe, vented disc brakes with red calipers at all four wheels. In the engine bay a Honda K24 2.4 litre DOHC inline-four sits transversely: black ribbed valve cover, silver cast aluminium block, tubular intake plenum with four runners, four-into-two-into-one stainless exhaust header, six-speed manual gearbox bolted to the left end of the engine, aluminium radiator, cone air filter, wiring harness and a small standalone ECU on the firewall. Fuel tank under the rear bench ahead of the rear axle.
```

### ENVIRONMENT

```
Infinite dark charcoal studio floor with a faint satin reflection, seamless dark backdrop, large soft overhead softbox as key light, cool blue rim light from the left, warm amber rim light from the right tracing the stainless edges, faint volumetric haze in the background, soft contact shadows under the tyres, slight vignette.
```

### NEGATIVE (paste into every generation)

```
text, letters, numbers, logos, watermark, signature, people, driver, passengers, extra wheels, extra headlights, duplicate vehicles, melting parts, warping panels, parts merging, flickering, jitter, motion blur, lens flare, rain, road, city, buildings, trees, sky, cartoon, anime, illustration, low detail, blurry, overexposed, colour shift.
```

## 2. Master prompt (single hero clip, 10 s)

Use this when you want one clip that shows the whole idea. Paste as one paragraph.

```
Photorealistic CGI automotive product visualization, physically based rendering, clean studio look, razor sharp focus, no text, no logos, no people. A custom Philippine owner-type jeepney, short wheelbase, open sides with no doors, body hand-formed from mirror-polished stainless steel: long flat hood, wide chrome slotted grille, twin round headlights, chrome bumper with two vertical overriders, three chrome horse ornaments on the hood, flared stainless fenders, upright split windshield with a long chrome sun-visor eyebrow, three chrome air horns on a deep crimson painted roof, crimson pinstripes, black and crimson vinyl bench seats, rear step bumper and swing-out spare wheel, polished aluminium wheels. It stands on an infinite dark charcoal studio floor with a satin reflection, lit by a soft overhead key light with a cool blue rim from the left and a warm amber rim from the right. The camera makes one slow, smooth 360 degree orbit at chest height on a 35mm lens. Halfway through the orbit the jeepney silently disassembles into an exploded view: the crimson roof lifts straight up, the hood and fenders slide forward and up, the bumper and grille float ahead of the nose, the wheels move outward along their axles, the seats rise out of the cabin, and the transverse Honda K24 engine with its black valve cover, intake plenum and six-speed gearbox rises out of the engine bay. Every part separates along its assembly direction with an even gap and keeps its orientation, so the silhouette of the jeepney is still readable. At the centre the exposed safety cell remains, colour-coded by steel grade with glossy red boron steel pillars and roof rails, orange cross members and yellow rails. The exploded assembly hovers and slowly turns with the camera. Subtle film grain, neutral colour grade.
```

## 3. Shot list

Each shot is one clip. STYLE, SUBJECT and ENVIRONMENT blocks are implied; the text below is what changes.

### Shot 1. Hero orbit, assembled (5 s)

Start frame: hero still. Preset: 360 Orbit.

```
CAMERA: 35mm lens at chest height, one slow smooth 360 degree orbit clockwise around the parked jeepney, constant distance, the whole vehicle always in frame with air above the roof and below the tyres.
MOTION: the jeepney is perfectly still. Light slides across the polished stainless as the camera moves. Nothing else moves.
```

### Shot 2. Explode (10 s)

Start frame: hero still. End frame: exploded still (same camera angle). Preset: none, or a very slow Arc.

```
CAMERA: three-quarter front view from slightly above, camera drifts a few degrees to the right during the shot and slowly pulls back to keep every floating part in frame.
MOTION: the jeepney disassembles into an exploded view in one continuous, even motion. Order: the crimson roof, sun visor and air horns rise first; then the hood, fenders, grille, headlights and chrome bumper slide forward and outward; then the stainless side panels and sill rails move sideways; the seats and dashboard rise out of the cabin; the transverse Honda K24 engine, intake, header, gearbox and radiator lift up out of the engine bay; the wheels, brake discs, struts and subframes drop down and outward. Every part moves along its own assembly axis, keeps its orientation, and stops with an even gap from its neighbours. The colour-coded steel safety cell stays fixed at the centre as the anchor. No part changes shape.
```

### Shot 3. Exploded orbit (5 s)

Start frame: exploded still. Preset: 360 Orbit, high angle.

```
CAMERA: 35mm lens from a high three-quarter angle looking slightly down, one slow 360 degree orbit around the floating exploded assembly, wide enough that no part leaves the frame.
MOTION: all parts hover in place with a very slight, slow drift as if weightless. The red boron steel cell is at the centre. Reflections travel across the stainless panels as the camera moves.
```

### Shot 4. Cell reveal, x-ray (5 s)

Start frame: cage still. Preset: Dolly In.

```
CAMERA: slow dolly in from a three-quarter front view toward the cabin, ending framed on the B-pillar and roof rail.
MOTION: the mirror-polished stainless skin fades to a 20 percent transparent ghost, revealing the safety cell inside: glossy red boron steel A-pillars, B-pillars, roof rails and sills, orange roof bows and crash boxes, yellow front rails, dark grey floor pan. The red members brighten slightly as if lit from within. The ghosted skin stays in place.
```

### Shot 5. Powertrain close-up (5 s)

Start frame: exploded still, cropped to the engine, or the engine cutaway still. Preset: Arc.

```
CAMERA: macro-feel 50mm lens, slow arc from the front-left to the front-right of the floating Honda K24 engine, shallow depth of field with the background softly blurred.
MOTION: the engine, black ribbed valve cover, silver cast block, intake plenum with four runners, four-into-two-into-one stainless header and six-speed gearbox float in a loose exploded cluster with even gaps, rotating very slowly together. The radiator and cone air filter hover in front. Nothing changes shape.
```

### Shot 6. Underside sweep (5 s)

Start frame: exploded still. Preset: Low Angle or Crane Down.

```
CAMERA: the camera sinks below floor level, looks up at the floating assembly from beneath, and slowly rises back to eye level while circling a quarter turn.
MOTION: from below, the aluminium front subframe, multi-link rear subframe, exhaust, fuel tank and the four wheels hover under the cell. The floor is a dark reflective plane that the camera passes through cleanly, no clipping artefacts.
```

### Shot 7. Reassemble and beauty (10 s)

Start frame: exploded still. End frame: hero still. Preset: Dolly In.

```
CAMERA: three-quarter front view from slightly above, slow push in during the last third of the shot, ending on a tight hero frame of the grille, headlights and hood ornaments.
MOTION: every floating part travels straight back along its assembly axis and settles into place in reverse order: running gear rises and docks, the engine and gearbox drop into the bay, seats settle, side panels close, fenders, hood, grille and bumper slide back, and the crimson roof comes down last. The parts stop with a tiny settle, no bounce. The finished jeepney gleams. Nothing else moves.
```

## 4. Still-image prompts (start and end frames)

Generate these with the image model at the video's aspect ratio. Keep the same seed across all three.

### Hero still

```
Photorealistic 3D product render, three-quarter front view from slightly above, 35mm lens. A custom Philippine owner-type jeepney with a mirror-polished stainless steel body: long flat hood, wide chrome slotted grille, twin round headlights in chrome bezels, chrome bumper with two vertical overriders, three small chrome horse ornaments on the hood, flared stainless fenders, upright split windshield with a long chrome sun-visor eyebrow, three chrome air horns on a deep crimson painted roof, crimson pinstripes, open sides with no doors showing black and crimson vinyl bench seats and a wood-rim steering wheel, polished aluminium wheels with all-terrain tyres, rear step bumper and swing-out spare wheel. Infinite dark charcoal studio floor with satin reflection, soft overhead key light, cool blue rim light left, warm amber rim light right, faint haze, soft contact shadows. No text, no logos, no people.
```

### Exploded still (same angle)

```
Photorealistic 3D exploded-view product render, same three-quarter front view from slightly above, 35mm lens, wider framing. The same stainless steel Philippine owner-type jeepney taken apart in mid-air: crimson roof, sun visor and air horns floating above; hood, fenders, chrome grille, headlights and bumper floating ahead of the nose; stainless side panels and sill rails pushed outward; bench seats and dashboard floating above the cabin; a transverse Honda K24 inline-four engine with black ribbed valve cover, intake plenum, stainless header, six-speed gearbox and aluminium radiator floating above the engine bay; four wheels, brake discs, struts, aluminium front subframe and multi-link rear subframe hanging below. At the centre the fixed safety cell, colour-coded by steel grade: glossy red boron steel pillars, roof rails, sills and bumper beams, orange roof bows and crash boxes, yellow front and rear rails, dark grey floor pan. Every part keeps its orientation with even gaps, silhouette of the jeepney still readable. Dark charcoal studio, soft key light, blue and amber rim lights. No text, no logos, no people.
```

### Cage still (x-ray)

```
Photorealistic 3D render, three-quarter front view. A stainless steel Philippine owner-type jeepney rendered as a 20 percent transparent ghost, revealing the unibody safety cell inside: glossy red boron steel A-pillars, B-pillars, roof rails, sills and bumper beams, orange roof bows and crash boxes, yellow high-strength front and rear rails, dark grey mild steel floor pan, aluminium front subframe, and a transverse Honda K24 engine in the bay. Colour-coded members glow faintly. Dark charcoal studio, soft key light, cool and warm rim lights. No text, no logos, no people.
```

### Engine cutaway still (optional, for shot 5)

```
Photorealistic 3D exploded-view render of a Honda K24 2.4 litre DOHC inline-four engine floating in a dark studio: black ribbed valve cover lifted above the cylinder head, silver cast aluminium block, intake plenum with four runners floating in front, four-into-two-into-one stainless exhaust header floating behind, six-speed manual gearbox separated to the left, aluminium radiator and cone air filter in front. Even gaps between parts, all parts keep their orientation. 50mm lens, shallow depth of field, soft key light, cool and warm rim lights. No text, no logos.
```

## 5. What tends to go wrong, and the fix

- Parts melt or merge during the explode. Lower motion strength, shorten to 5 s, and use start plus end frames from the two stills.
- The jeepney turns into a Willys jeep or a van. Keep "owner-type jeepney" plus "long flat hood", "open sides with no doors", "sun-visor eyebrow" and "air horns" in every prompt; those four details anchor the silhouette.
- Extra wheels or headlights appear during the orbit. Add "exactly four wheels, exactly two headlights" to the positive prompt for that shot.
- The horse ornaments come out as blobs. Drop them from the video prompts and keep them only in the hero still, or replace with "three small chrome ornaments".
- The steel cell colours wash out. Say "glossy red", "orange", "yellow" explicitly and keep the studio dark so the colours read.
- The camera passes through the floor with artefacts in shot 6. Regenerate with "the floor is a thin dark reflective plane" or accept a cut to a low angle instead of a pass-through.
- Text or a logo appears on the sun visor. It is in the negative prompt already; if it persists, add "blank sun visor" to the positive prompt.
