# Styles

This directory contains the Less styles that define Ancient Beast's browser presentation, including combat UI, dashboard/card layouts, the creature raster, controls, responsive behavior, and component-specific visuals.

## Boundaries

- Structural markup belongs in [`../templates/`](../templates/README.md).
- Dynamic class/state changes belong in [`../ui/`](../ui/README.md).
- Asset files belong under the repository-level `assets/` tree.
- Game rules should never depend on a visual class or media query.

Prefer extending the existing component/selectors rather than adding page-wide overrides. When changing responsive behavior, check both landscape mobile breakpoints and the normal desktop layout; many game controls are absolutely positioned or scaled and can interact with z-index, transforms, and pointer events.

Use repository asset aliases already established by the Less/Webpack pipeline (for example `~assets/...`) instead of hard-coded deployment paths. `npm run build` is the minimum integration check for style changes; use browser/device verification for layout changes that cannot be asserted meaningfully in Jest.
