// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
// Find max(abs(length(x) − length(y)))
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

/**
 * Finds the maximum difference in length between any two strings in two arrays.
 *
 * @param {string[]} a1 - The first array of strings.
 * @param {string[]} a2 - The second array of strings.
 * @returns {number} The maximum difference in length between any two strings in the arrays.
 *
 */
export const mxdiflg = (a1: string[], a2: string[]): number => {
  // Check if either array is empty
  if (a1.length === 0 || a2.length === 0) {
    return -1; // Return -1 if either array is empty
  }

  // Function to find max and min lengths in an array
  const getMaxMinLengths = (arr: string[]): [number, number] => {
    return arr.reduce(
      ([max, min], str) => [Math.max(max, str.length), Math.min(min, str.length)],
      [0, Infinity] // Initial values for max and min
    );
  };

  // Get max and min lengths for both arrays
  const [max1, min1] = getMaxMinLengths(a1);
  const [max2, min2] = getMaxMinLengths(a2);

  // Calculate the maximum difference in lengths
  return Math.max(max1 - min2, max2 - min1);
};
