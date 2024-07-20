# Conway's Game of Life

## Overview

Conway's Game of Life is a cellular automaton devised by mathematician John Conway. It's a zero-player game where cells in a grid live, die, or evolve based on a set of rules. The game simulates how complex patterns can emerge from simple rules.

## Rules

- **Birth**: A dead cell will become alive if exactly 3 of its neighbors are alive.
- **Survival**: A living cell will remain alive if it has 2 or 3 living neighbors.
- **Death**:
  - A living cell will die due to under-population if it has fewer than 2 living neighbors.
  - A living cell will die due to over-population if it has 4 or more living neighbors.
