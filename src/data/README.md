# Data

This directory holds declarative game data and TypeScript types used by the engine and UI.

Unit facts such as names, stats, ability descriptions, costs, ranges, effects, and upgrade text belong in the unit data rather than in UI code. Executable ability behavior belongs in [`../abilities/`](../abilities/README.md), while shared runtime/domain types should stay here only when they describe data consumed across multiple modules.

## Guidelines

- Keep identifiers and slot ordering compatible with the engine code that indexes units and abilities.
- Prefer explicit types over loosely shaped objects when extending the schema.
- Avoid putting side effects, DOM access, or game-state mutation in data modules.
- When changing values that alter gameplay, pair the data edit with focused tests or simulation coverage under `../__tests__/` when practical.

If a data-shape change requires migration logic, keep the migration/compatibility behavior in the consuming runtime rather than embedding it into static data.
