export const numRows = 30;
export const numCols = 30;

export const generateEmptyGrid = () =>
  Array.from({ length: numRows }, () => Array(numCols).fill(0));

export const generateRandomGrid = () =>
  Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => (Math.random() > 0.7 ? 1 : 0))
  );

export const operations = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];
