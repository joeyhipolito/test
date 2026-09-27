# K24 owner-type jeepney, parts viewer

A concept study: a Philippine owner-type jeepney with a Honda K24, built on the safety cell of a cheap, unloved first-world car, presented on a website that takes the vehicle apart as you scroll and lets you orbit it from any angle.

Contents of this folder

| File | What it is |
| --- | --- |
| `HIGGSFIELD_PROMPT.md` | The full prompt package for generating the reference video in Higgsfield: reusable blocks, a master prompt, a seven-shot list, still-frame prompts, negative prompt and settings. |
| `viewer/index.html` | A working proof of concept of the website mechanic: scroll to explode the jeepney into its parts, drag to orbit the full sphere, labels per stage, steel-grade legend. Placeholder geometry built from primitives, so the real model can replace it later. |

Open `viewer/index.html` in a browser. It loads three.js from a CDN and needs no build step.

## The vehicle

Owner-type jeepneys are private, short-wheelbase, jeep-style bodies in stainless steel over a truck or surplus frame. They have no crumple zones, no cell, no belts worth the name. The concept keeps the look and replaces everything underneath with a modern unibody safety cell from a donor, then hangs the stainless skin on that cell the way a Sarao body hangs on a frame.

### Donor pick: Volvo XC90, first generation (P2 platform, 2003 to 2014)

It matches the brief on all three points.

- Cheap because it is unloved. Heavy, thirsty, dated, and the early T6 automatic had a bad reputation, so used prices are near the floor. It was sold in the Philippines, so donors and parts exist locally.
- The materials are the point. Volvo's P2 body is zoned by steel grade: mild steel where it should crumple, high-strength and extra-high-strength steel in the rails and bows, and hot-formed boron steel (ultra-high-strength, around 1,400 MPa) in the A-pillars, B-pillars, roof rails, sills and bumper beams. That is the combination of materials in the places that matter.
- Layout suits the swap. The engine bay is transverse and roomy, so the K24 goes in the way Honda designed it, with the Volvo front subframe, struts and steering kept. No longitudinal conversion needed.

What stays from the donor: the full body-in-white from the front bumper beam to the rear beam (pillars, roof rails, floor pan, sills, rails, crash boxes), both subframes and all suspension, brakes, ABS module, steering column and airbag, seatbelt anchors, fuel tank location. The XC90 roof panel and outer skin come off; the jeepney roof and stainless panels bolt to the cell.

The compromise to be honest about: an owner-type has no doors, so the donor's door intrusion beams are gone. The build relies on the boron sills, B-pillars and roof rails, and the sensible option is stainless half-doors with the donor beams welded inside. The viewer shows the open-sided version.

### Alternatives considered

| Donor | Why it fits the brief | Why it lost |
| --- | --- | --- |
| Saab 9-5 (1997 to 2010) | Dead brand, very cheap, topped Folksam real-world safety ratings for years, high-strength steel cage, transverse bay. | Shorter cabin, lower roof, almost no presence in the Philippines. Strong second choice. |
| Jaguar XJ X350 (2003 to 2009) | Riveted and bonded aluminium monocoque built with aerospace methods, cheap because it looks like the old XJ, rear-wheel drive and longitudinal so a K24 can go in on a RWD adapter plate. | Aluminium repair needs rivet and bond tooling, and stainless on aluminium corrodes without isolation. Beautiful idea, hard build. |
| Ford Crown Victoria (1998 to 2011) | Body-on-frame, hydroformed boxed rails, rear-wheel drive live axle, closest to a traditional jeepney layout, cheap. | Mild steel throughout. Tough, but not the zoned high-strength structure the brief asks for. |
| Honda Element (2003 to 2011) | Already has a K24, boxy, unloved, cheap, jeepney-like proportions. | Not a swap, and its body is ordinary for its era. Worth knowing about if the priority shifts to simplicity. |

### K24 notes

- Engine: K24A2 (TSX, 200 hp) or K24Z (later Accord and CR-V) for cost. Transverse, six-speed manual from a TSX or Civic Si, or a K-series automatic.
- Mounts and axles are custom; the Volvo subframe and knuckles stay. Steering and brakes stay Volvo.
- Weight drops a lot versus the XC90 (no glass area, no doors, no tailgate, no third row), so the stock XC90 brakes and springs are more than enough. Re-valve the dampers for the lighter body.

## The website

### What it has to do

- Show every part of the vehicle, one group at a time, as the reader scrolls (skin, cabin, powertrain, running gear, safety cell).
- Let the reader rotate the whole assembly on the full sphere at any time: any azimuth, from straight above to straight below.
- Work on a phone with touch.

### Decision: real-time 3D, not a scrubbed video

The Apple-style trick (scrubbing a frame sequence on scroll) reproduces the video exactly but only along the one camera path that was rendered. Full-sphere orbit needs a live 3D model. So the Higgsfield video is the storyboard and mood reference, and the site renders the vehicle itself.

Stack for the production build

| Layer | Choice | Why |
| --- | --- | --- |
| Renderer | three.js | Mature, huge ecosystem, runs everywhere. React Three Fiber plus drei if the site is React; plain three.js is fine for a single page and is what the proof of concept uses. |
| Model | glTF (.glb) with one named node per part, Draco or Meshopt compressed, KTX2 textures | One file, streams fast, and part names drive the explode table and the labels. |
| Scroll | GSAP ScrollTrigger (or the hand-rolled scroll progress in the proof of concept) | Scrub a timeline of per-part offsets against scroll position with staggered easing. |
| Orbit | OrbitControls with polar angle 0 to 180 degrees and no azimuth limits, or the small custom orbit in the proof of concept | Full sphere. The ground is a shadow-only plane so looking up from below is clean. |
| Labels | CSS2DRenderer or drei `<Html>` anchored to part nodes | Real text, crisp on any screen, easy to style. |
| Lighting | PMREM environment map plus one shadow-casting key light | Stainless and chrome need an environment map to read as metal. |
| Build and host | Vite, static export, Vercel, Netlify or GitHub Pages | No server needed. |

Alternatives if the budget or timeline changes

- Spline: no-code 3D with scroll and orbit events. Fastest to a demo, weakest control over materials and performance.
- Sketchfab embed: orbit and annotations for free, but no scroll-driven explode.
- `<model-viewer>`: orbit and AR in one tag, explode would be custom.
- Frame-sequence scrub: for a hero section only, with the live 3D below it.

### Pipeline from video to site

1. Higgsfield: generate the stills and the seven shots in `HIGGSFIELD_PROMPT.md`. This settles the look, the colour coding and the explode choreography.
2. Base mesh: run the hero still and the exploded still through an image-to-3D tool (Tripo, Meshy, Hunyuan3D or Rodin) to get a rough body, or model the skin from scratch in Blender from the still as reference. Kitbash the K24 and the XC90 body-in-white from purchased or free assets; both exist on Sketchfab and CGTrader.
3. Blender: split into 40 to 80 named parts, set each part's origin at its installed position, assign the steel-grade colours to the cell, bake textures, export a single .glb. Run `gltf-transform optimize` for Draco and KTX2.
4. Web: load the .glb, build the part table (name, group, explode vector, stagger) from node names, drive it with scroll, attach labels, ship.
5. Performance: cap device pixel ratio at 2, compressed textures, lazy-load the model, respect reduced motion.

### Proof of concept, `viewer/index.html`

Built to check the mechanic before any modelling is done. It has the scroll-driven explode in five stages, per-stage labels, full-sphere orbit with mouse and touch, pinch zoom, auto-rotate, a steel-grade legend, light and dark themes, and a phone layout. The jeepney is made of about 90 primitive meshes placed at real-world dimensions (2.6 m wheelbase, 1.9 m roof), so when the real model arrives only the part table and the mesh source change.

Touch behaviour: a horizontal one-finger drag orbits, a vertical one scrolls the page. The Orbit button switches to full one-finger orbit for looking under and over the vehicle on a phone.

### Next steps

1. Generate the video in Higgsfield with the prompt package and decide the final look.
2. Source or model the .glb.
3. Swap the primitive parts in the viewer for the model's nodes.
4. Add the copy for each stage and a materials page.
