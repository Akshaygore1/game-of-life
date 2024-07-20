import { useState, useRef, useCallback } from "react";
import {
  generateEmptyGrid,
  generateRandomGrid,
  numCols,
  numRows,
  operations,
} from "../utils";

const GameOfLife = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return g.map((row, i) =>
        row.map((cell, j) => {
          let neighbors = 0;
          operations.forEach(([x, y]) => {
            const newI = i + x;
            const newJ = j + y;
            if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
              neighbors += g[newI][newJ];
            }
          });

          if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
            return 0;
          } else if (cell === 0 && neighbors === 3) {
            return 1;
          } else {
            return cell;
          }
        })
      );
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="mb-4">
        <button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => setGrid(generateRandomGrid())}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Random
        </button>
        <button
          onClick={() => setGrid(generateEmptyGrid())}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-30 gap-0.5">
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = [...grid];
                newGrid[i][k] = grid[i][k] ? 0 : 1;
                setGrid(newGrid);
              }}
              className={`w-5 h-5 ${
                grid[i][k] ? "bg-black" : "bg-white"
              } border border-gray-400`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameOfLife;
