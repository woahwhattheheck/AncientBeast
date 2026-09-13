# Utility modules

This directory contains shared helpers used by multiple engine and UI modules.

Major areas include grid/hex geometry (`hex.ts`, `hexgrid.ts`, `matrices.ts`, `position.ts`), pathfinding (`pathfinding.ts`), collections/math/string helpers, version/time helpers, and game-log support.

## Guidelines

- Prefer small, deterministic functions with narrow inputs and outputs.
- Keep game-specific state mutation in the engine layer unless the utility is explicitly a stateful abstraction such as the hex grid.
- Reuse the established geometry conventions; direction, matrix, coordinate, and path semantics are shared by movement, targeting, abilities, bots, and rendering.
- Do not introduce DOM dependencies into generally reusable helpers.
- Add focused unit coverage under `../__tests__/utility/` (or the nearest existing suite) for pure/helper changes.

`hexgrid.ts` is a substantial game/UI boundary rather than a generic helper: changes there can affect targeting, movement, hover/query behavior, and bots simultaneously. Treat edits to it as cross-cutting and test the affected interaction path.
