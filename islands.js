var grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function findIslands(map) {
  let counter = 0;

  const mark = (grid, r, c) => {
    grid[r][c] = 0;
    const arr = [
      [r, c - 1],
      [r, c + 1],
      [r - 1, c],
      [r + 1, c],
    ];
    for (let i = 0; i < arr.length; i++) {
      const dir = arr[i];
      if (grid[dir[0]]?.[dir[1]] === 1) {
        grid[dir[0]][dir[1]] = 0;
        arr.push(
          [dir[0] - 1, dir[1]],
          [dir[0] + 1, dir[1]],
          [dir[0], dir[1] - 1],
          [dir[0], dir[1] + 1]
        );
      }
    }
  };

  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[0].length; col++) {
      if (map[row][col] === 1) {
        counter++;
        mark(map, row, col);
      }
    }
  }
  return counter;
}

console.log(findIslands(grid));
