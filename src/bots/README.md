# Bot strategies

This directory contains creature-specific strategy overrides for the shared bot controller in [`../bot.ts`](../bot.ts).

A strategy should answer decision questions—target desirability, movement/retreat preferences, ability-specific scoring, or retaliation risk—without changing game rules. The authoritative behavior of an ability remains in [`../abilities/`](../abilities/README.md); bot code should evaluate legal actions that the normal game engine exposes.

## Conventions

- Keep strategies deterministic for the same game state unless the shared bot controller explicitly owns randomness.
- Reuse the shared scoring and query APIs from `bot.ts` instead of bypassing legality checks.
- Keep unit-specific constants close to the strategy that uses them and document unusual score weights.
- Do not mutate creatures, the grid, or resources while merely scoring a candidate action.

When adding a strategy, register it through `bot.ts` and add focused bot/simulation coverage under `../__tests__/` when possible. Use `npm run simulate` for headless simulation changes and `npm test` for the full gate.
