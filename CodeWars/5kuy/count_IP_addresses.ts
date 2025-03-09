// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

/**
 * Calculates the number of IP addresses between two given IPv4 addresses.
 *
 * @param {string} start - The starting IPv4 address.
 * @param {string} end - The ending IPv4 address.
 * @returns {number} The number of IP addresses between the two given addresses.
 *
 * @example
 * ipsBetween("10.0.0.0", "10.0.0.50") // => 50
 * ipsBetween("10.0.0.0", "10.0.1.0") // => 256
 * ipsBetween("20.0.0.10", "20.0.1.0") // => 246
 */
export function ipsBetween(start: string, end: string): number {
  const startParts = start.split('.').map(Number);
  const endParts = end.split('.').map(Number);

  let total = 0;

  for (let i = 0; i < 4; i++) {
    total += (endParts[i] - startParts[i]) * Math.pow(256, 3 - i);
  }

  return total;
}
