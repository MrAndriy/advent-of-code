// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2

// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.

/**
 * Determines if a mileage number is interesting.
 * An interesting number is defined as:
 * - A number greater than 99 that meets one or more criteria:
 *   - Any digit followed by all zeros (e.g., 100, 90000)
 *   - Every digit is the same (e.g., 1111)
 *   - The digits are sequential and incrementing (e.g., 1234)
 *   - The digits are sequential and decrementing (e.g., 4321)
 *   - The digits form a palindrome (e.g., 1221, 73837)
 *   - The digits match one of the values in the awesomePhrases array
 *
 * @param {number} n - The mileage number to check.
 * @param {number[]} awesomePhrases - An array of "awesome" numbers that are considered interesting.
 * @returns {number}
 * - Returns 2 if the number is interesting.
 * - Returns 1 if an interesting number occurs within the next two miles.
 * - Returns 0 if the number is not interesting.
 *
 * @example
 * isInteresting(3, [1337, 256]);    // returns 0
 * isInteresting(3236, [1337, 256]); // returns 0
 * isInteresting(11209, []);         // returns 1
 * isInteresting(11211, []);         // returns 2
 * isInteresting(1335, [1337, 256]); // returns 1
 * isInteresting(1337, [1337, 256]); // returns 2
 */
export function isInteresting(n: number, awesomePhrases: number[]): number {
  // Check if a number is interesting
  const isInterestingNumber = (num: number): boolean => {
    // Number must be at least 3 digits
    if (num < 100) return false;

    const strNum = num.toString();

    // Any digit followed by all zeros
    if (/^[1-9]0+$/.test(strNum)) return true;

    // Every digit is the same
    if (/^(\d)\1*$/.test(strNum)) return true;

    // Sequential incrementing
    const incrementing = '1234567890';
    if (incrementing.includes(strNum)) return true;

    // Sequential decrementing
    const decrementing = '9876543210';
    if (decrementing.includes(strNum)) return true;

    // Palindrome
    if (strNum === strNum.split('').reverse().join('')) return true;

    // Matches awesome phrase
    if (awesomePhrases.includes(num)) return true;

    return false;
  };

  // Check if current number is interesting
  if (isInterestingNumber(n)) {
    return 2;
  }

  // Check if n+1 or n+2 is interesting
  if (n >= 98) {
    // Allow checking for n+1 and n+2 even if n is less than 100
    if (isInterestingNumber(n + 1) || isInterestingNumber(n + 2)) {
      return 1;
    }
  }

  return 0;
}
