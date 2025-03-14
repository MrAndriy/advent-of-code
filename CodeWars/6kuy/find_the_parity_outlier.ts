// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

/**
 * Finds the outlier in an array of integers.
 *
 * @param {number[]} integers - An array of integers.
 * @returns {number} The outlier integer.
 *
 * @example
 * // returns 11
 * findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
 *
 * @example
 * // returns 160
 * findOutlier([160, 3, 1719, 19, 11, 13, -21]);
 */
export function findOutlier(integers: number[]): number {
  const even = integers.filter((num) => num % 2 === 0);
  const odd = integers.filter((num) => num % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
