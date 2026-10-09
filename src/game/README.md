# Engine (Person C)

`createEngine(game, options, evaluator)` in `game.ts` implements Person C's API
from the evaluation plan. Shared interfaces live in `contracts.ts`; exported AST
types live in `../ast/ast.ts` and match the original root-level `ast.ts`.

## Connecting Person A and Person B

Person A supplies `CompiledGame`: resolved, parent-first field initializers,
resolved methods, and interactions in source order. Person B supplies `Evaluator`.
The engine has no parser or builder dependency and never interprets AST bodies
itself. The frontend can connect the implementations like this once A/B are ready:

```ts
import { buildGame } from './builder/builder';
import { createEvaluator } from './interpreter/interpreter';
import { createEngine } from './game';

const engine = createEngine(buildGame(program), { width: 80, height: 60 }, createEvaluator());
engine.place('Stone', 20, 5);
const nextFrame = engine.step();
```

Those builder/interpreter exports are integration points, not implemented as part
of Person C. `tests/game.test.ts` provides handwritten compiled definitions and an
evaluator double for testing the engine independently. The double implements
literal defaults and delegates ticks/interactions to test callbacks; it does not
claim to execute the language.

## Behavior

- Integer coordinates, one instance per cell, with `y` increasing downward.
  A falling method should add 1 to `position-y` (the PDF example subtracts 1).
- `place` rejects unknown/template types, occupied cells, and invalid positions.
  `erase` ignores empty/out-of-bounds cells; noninteger coordinates are errors.
- Position and type are engine-owned. Defaults cannot overwrite them; ordinary
  coordinate writes request movement. Blocked moves leave the element in place.
- Declared fields start at null, then defaults execute in the supplied order.
  Conversion resets all fields to target defaults and preserves ID/position.
  Null color renders as `#000000`; non-null color must be `#RRGGBB`.
- All five built-ins are implemented, including spreading to empty orthogonal
  neighbors. Globals require a null receiver; mutations require a live receiver.
- `step` ticks an ascending snapshot of IDs. New instances first tick next step.
  After ticks it freezes adjacent pairs, runs rules in source order per pair, and
  rechecks live IDs, adjacency and exact current types before every rule. New pairs
  formed during interactions wait until the next step. Interaction bindings work
  in either spatial order; same-type pairs execute once per rule.
- `snapshot` returns detached render data without advancing time. Runtime field
  values are copied on read/write so callers cannot mutate private state by alias.
- Each `place`/`step` starts a fresh budget of 100,000 instructions. The engine
  accounts for creation, defaults, ticks, rule checks and built-ins; B must also
  call `ctx.host.consumeInstruction()` for each evaluated/executed AST node.
- Exceptions propagate as ordinary errors. Failed placement removes its incomplete
  instance; failed conversion restores the original instance. Failed steps do not
  increment time, but earlier successful mutations remain. The frontend should
  stop its timer and display the error. Initializers cannot convert/disappear their
  own incomplete instance. Initializer side effects on other instances are not
  rolled back.

The engine leaves method inheritance/overriding, missing-method behavior, expression
semantics, function arguments, normal loops, and unsupported AST node errors to A/B,
as specified by the evaluation plan. No timed-task scheduler is needed.

## Verification

```sh
npm test
npm run build
npm run lint
```

The test command uses Node's native TypeScript support (Node 22.18+ or 24+).
No test packages or A/B implementations are needed. Tests cover defaults, world
callbacks, falling, melting, error recovery, snapshots, and simulation ordering.
