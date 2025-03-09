// The goal of this exercise is to convert a string to a new string where each character in the new string is "("
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Notes
// Assertion messages may be unclear about what they display in some languages.
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

/**
 * Encodes a string by replacing each character with parentheses.
 * If the character appears only once in the string, it is replaced with '('.
 * If the character appears more than once, it is replaced with ')'.
 *
 * @param {string} word - The input string to be encoded.
 * @returns {string} The encoded string with characters replaced by parentheses.
 *
 * @example
 * // returns "())())"
 * duplicateEncode("Success");
 *
 * @example
 * // returns "(())()"
 * duplicateEncode("recede");
 */
export function duplicateEncode(word: string) {
  return word
    .toLowerCase()
    .split('')
    .map((char) => {
      return word.toLowerCase().indexOf(char) === word.toLowerCase().lastIndexOf(char) ? '(' : ')';
    })
    .join('');
}
