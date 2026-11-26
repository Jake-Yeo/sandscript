# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Kids (roughly 10–15) who are curious about programming, plus the parents, teachers, and hobbyists who sit beside them. They open Sandscript in a laptop browser to make a sandbox world behave the way they imagine: sand that piles, water that flows, fire that melts ice. Secondary audience: reviewers watching a short screen-recorded demo, who need to grasp the idea in seconds.

## Product Purpose
Sandscript is a small programming language plus a live falling-sand playground. You describe elements and how they behave in near-plain English (`element Sand is like Solid`, `let speed be 10`, `interaction Ice i with Fire f`), press Run, and paint those elements onto a pixel grid that comes alive. Success is a learner going from a preset to their own idea, editing one line and seeing the world change.

## Positioning
Most kid coding tools hide code behind blocks, or hand kids a general-purpose language with no immediate payoff. Sandscript is real typed text with classes, inheritance, functions, loops, and conditionals, but every line has a visible physical consequence on a sand grid within a second.

## Operating Context
- Single-page web app (React + Vite). Editor on one side, simulation canvas on the other.
- Programs compile in a web worker (ANTLR lexer/parser → AST → validator → builder); the simulation runs in a second worker at 30 ticks/second on a 128×128 grid drawn to an OffscreenCanvas.
- Left mouse paints the selected element, right mouse erases; brush size 1–4.
- Built as a UBC CPSC 410 group project (Group 4), later polished by Jake Yeo.

## Capabilities and Constraints
- Language: elements, template elements, single inheritance (`is like`), fields (`has x with y`), methods (`has function … needs …`), `give` returns, `if / else if / else`, `for_every`, `go_through … to … with …`, interactions between two element types, tabs-only indentation, snake_case identifiers, PascalCase element names.
- Built-ins: `get_all_elements`, `get_element_at`, `convert_to`, `spread_element`, `disappear`; added in the polish pass: `random`, `chance`, `place_element`, `grid_width`, `grid_height`.
- Saved scripts live in the browser (localStorage). Example presets ship with the app.
- Compile and runtime errors must be shown in the UI in words a kid can act on.

## Brand Commitments
Name: Sandscript. Tone: friendly, encouraging, plain words; never condescending.

## Evidence on Hand
Real example programs in the repo (sandbox.dsl, fabric-grid-simulation.dsl, three-dimensional-game.dsl). No user testimonials, metrics, or classroom deployments exist; do not invent any.

## Product Principles
- Every line should be visible on the grid.
- The language reads like a sentence before it reads like code.
- Start from a working example, never a blank page.
- Errors teach: say what went wrong and what to try.

## Accessibility & Inclusion
Readable code at a glance (generous mono size, strong syntax contrast), keyboard-operable controls, and colour never the only carrier of state.
