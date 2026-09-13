# Devvit runtime

This directory contains the Reddit Devvit integration and the headless/authoritative game path used by that runtime.

## Entry points and boundaries

- `post.ts`, `server.ts`, `splash.ts`, and the `routes/` directory expose the Devvit app/server surface.
- `lobby.ts` and `queue.ts` coordinate match/lobby state.
- `game-entry.ts` / `game-entry.html` launch the playable client surface.
- `authoritativeEngine.ts`, `authoritativeRuntime.ts`, and `authoritativeTypes.ts` define the authoritative execution contract.
- `headlessGame.ts` adapts the normal game engine to run without the browser presentation layer.

Keep transport and Devvit API concerns at this boundary. Gameplay rules should remain in the shared engine (`../game.ts`, `../creature.ts`, `../abilities/`) so browser and headless execution do not diverge.

## Testing

Devvit-specific regression tests live under `../__tests__/devvit/`, and headless simulation coverage lives under `../__tests__/simulation/`. When changing authoritative execution, run the relevant Jest tests and `npm run simulate`; use `npm test` before merging broad changes.

Avoid adding browser-only assumptions to the headless path. New shared engine code should tolerate the adapters used here or be explicitly isolated behind a runtime boundary.
