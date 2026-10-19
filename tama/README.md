# Go Tama! canvas Tama

`index.html` is a self-contained Canvas 2D renderer for one Tama. Open it in a browser (no build, no assets).

- The creature is built from a `genome` object (palette, body edge, and one variant per slot: eyes, mouth, ears, horn, back, tail).
- The body exposes anchors (`horn` top-front, `headSide` / `headSideFar`, `topRear`, `rear`, `face`, legs, spot). Every part variant is a function `drawSlot.variant(ctx, anchors, palette, t)` with metadata (`seat` for the shade it casts on the body, `behind` for z-order, `animated` if it uses `t`), so any variant drops into any body without per-part placement work.
- Everything is drawn with code each frame: pressure-ribbon outlines, seeded jitter, clipped shading, texture strokes. Geometry is memoised; a frame costs about 2 ms.
- Tap or click the Tama (or press Sneeze) for the "tama, tama, tama... gochi!" sneeze. `prefers-reduced-motion` turns off breathing, follow-through and body deformation.
- `window.Tama` exposes `set(genome)`, `randomise()`, `sneeze()` and `freezeAt(tau)` (holds a sneeze frame, used for review screenshots).
