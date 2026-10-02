const floydWarshall = require('./solution');

const INF = Infinity;
const graph = [
  [0, 3, INF, 5],
  [2, 0, 2, INF],
  [INF, 1, 0, 1],
  [7, INF, 3, 0],
];

const expected = [
  [0, 3, 5, 5],
  [2, 0, 2, 3],
  [4, 1, 0, 1],
  [7, 6, 3, 0],
];

const result = floydWarshall(graph);

function test() {
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (result[i][j] !== expected[i][j]) {
        console.error(`Test Failed at [${i}][${j}]: Expected ${expected[i][j]}, got ${result[i][j]}`);
        process.exit(1);
      }
    }
  }
  console.log("All tests passed!");
}

test();
