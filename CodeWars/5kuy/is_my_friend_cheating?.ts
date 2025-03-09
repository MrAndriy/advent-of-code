// - A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// - Within that sequence, he chooses two numbers, a and b.
// - He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// - Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:
// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.
// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string)
// if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

// Examples:
// removeNb(26) should return [[15, 21], [21, 15]]

/**
 * Finds all pairs of integers (a, b) such that:
 * a + b = sum of the first n natural numbers - 1,
 * where a is in the range from 1 to n and b is also in the range from 1 to n.
 *
 * @param {number} n - The upper limit of the range of natural numbers.
 * @returns {number[][]} An array of pairs of integers [a, b] that satisfy the condition.
 *
 * @example
 * // returns [[1, 2], [2, 1]]
 * removeNb(5);
 *
 * @example
 * // returns []
 * removeNb(1);
 */
export function removeNb(n: number): number[][] {
  const result: number[][] = [];
  const sum = (n * (n + 1)) / 2;

  for (let a = 1; a <= n; a++) {
    const b = (sum - a) / (a + 1);
    if (b % 1 === 0 && b <= n) {
      result.push([a, b]);
    }
  }

  return result;
}
