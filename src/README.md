# Source map

This directory contains the TypeScript and browser assets that make up the Ancient Beast client, game rules, UI, bot logic, and supported runtimes.

## Start here

- `game.ts` coordinates match state, turns, signals, logs, multiplayer messages, and high-level game flow.
- `creature.ts`, `ability.ts`, `damage.ts`, `effect.ts`, and `player.ts` contain the core combat/domain model.
- `script.ts` bootstraps the browser application.
- `animations.ts` contains shared combat animation sequencing.
- `__tests__/` contains Jest coverage, including simulation and Devvit-specific suites.

## Main extension areas

- [`abilities/`](abilities/README.md) — per-creature ability implementations.
- [`bots/`](bots/README.md) — per-creature bot strategy overrides used by `bot.ts`.
- [`data/`](data/README.md) — unit metadata and shared data types.
- [`devvit/`](devvit/README.md) — Devvit entry points, lobby/server routes, and the headless authoritative runtime.
- [`ui/`](ui/README.md) — browser UI controllers and components.
- [`utility/`](utility/README.md) — shared geometry, grid, pathfinding, logging, and small pure helpers.
- [`style/`](style/README.md) — Less styles for combat, cards, layouts, and responsive UI.
- [`templates/`](templates/README.md) — HTML fragments consumed by the browser UI/build.

## Change guide

Keep game rules in the domain/ability layer and presentation behavior in `ui/`, `style/`, or `templates/`. Unit facts belong in `data/`; unit-specific executable behavior belongs in `abilities/` or `bots/`. Shared helpers should only move into `utility/` when they are useful across more than one feature.

When adding or changing gameplay behavior, add focused Jest coverage under `__tests__/` when practical. Useful repository commands are `npm run lint`, `npm run build`, `npm run test:jest`, and `npm test` for the full lint/build/Jest gate.
