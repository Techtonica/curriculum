/**
 * Finds the maximum number of non-overlapping intervals.
 * 
 * @param {Array<Array<number>>} intervals - Array of [start, end] pairs.
 * @returns {Array<Array<number>>} - The set of non-overlapping intervals.
 */
function maxNonOverlappingIntervals(intervals) {
  if (intervals.length === 0) return [];

  // 1. Sort intervals by their end times (Greedy Choice)
  const sortedIntervals = [...intervals].sort((a, b) => a[1] - b[1]);

  const result = [];
  let lastEndTime = -Infinity;

  for (const interval of sortedIntervals) {
    const [start, end] = interval;

    // 2. If the start of the current interval is >= end of the last selected interval, pick it
    if (start >= lastEndTime) {
      result.push(interval);
      lastEndTime = end;
    }
  }

  return result;
}

// --- Test Cases ---
const testCases = [
  {
    input: [[1, 4], [2, 3], [3, 6], [5, 8], [7, 9]],
    expectedLength: 3, // [2, 3], [3, 6], [7, 9]
  },
  {
    input: [[1, 2], [2, 3], [3, 4]],
    expectedLength: 3,
  },
  {
    input: [[1, 10], [2, 3], [4, 5], [6, 7]],
    expectedLength: 3, // [2, 3], [4, 5], [6, 7]
  },
  {
    input: [],
    expectedLength: 0,
  }
];

testCases.forEach(({ input, expectedLength }, index) => {
  const result = maxNonOverlappingIntervals(input);
  console.log(`Test ${index + 1}: ${result.length === expectedLength ? 'PASSED' : 'FAILED'} (Got ${result.length}, Expected ${expectedLength})`);
});
