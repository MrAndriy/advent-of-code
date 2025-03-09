// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3

// 1 2 3
// 2 4 6
// 3 6 9

// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]

/**
 * Creates a multiplication table of size N.
 *
 * @param {number} size - The size of the multiplication table.
 * @returns {number[][]} A 2D array representing the multiplication table.
 *
 * @example
 * multiplicationTable(3) // => [[1,2,3],[2,4,6],[3,6,9]]
 */
export function multiplicationTable(size: number): number[][] {
  const numbers = Array.from({ length: size }, (_, i) => i + 1);
  return numbers.map((i) => numbers.map((j) => i * j));
}
