# Design archive

Reference material for how the site was designed. **Nothing in this folder is built or deployed.** Astro only publishes `src/pages/` and `public/`, and `tsconfig.json` excludes this folder, so visitors can never reach these files.

## 2026-09 — direction mockups

`2026-09-direction-mockups/` holds the source of the first design exploration. It contains three directions, each with a desktop page and a phone view:

| Board | Direction | Status |
| --- | --- | --- |
| `Main.dc.html` + `EditorialMobile.dc.html` | **A · Editorial**: warm paper, Fraunces serif, terracotta accent | ✅ Built, at `/` |
| `Terminal.dc.html` + `TerminalMobile.dc.html` | **B · Engineer's Console**: dark, Space Grotesk + JetBrains Mono, amber accent | ✅ Built, at `/console` |
| `Swiss.dc.html` + `SwissMobile.dc.html` | **C · Swiss Grid**: huge Archivo type, blue accent, strict 12-column grid | Not built |

- The live, zoomable canvas is at https://claude.ai/artifact/6fjt3A9F9RqnXzM23qQmCS (private to the owner).
- The `.dc.html` files are Design Component pages for that canvas editor. They load a `support.js` runtime that isn't in this repo, so opening them directly in a browser won't render them faithfully. Treat them as readable HTML/CSS specs: the colours, type scale and spacing are all inline.
- `canvas.json` records how the boards were laid out on the canvas.

## Adding more

Put each new exploration in its own dated folder (`design/YYYY-MM-<topic>/`) and add a row or section here.
