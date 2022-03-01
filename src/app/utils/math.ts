/**
 * Determines if a number is even.
 * @param n this is the number you want to check if it is even. We are assuming this is an integer.
 * @param truncate set this to true if you want to trim the number to an integer, defaults to false.
 * @returns true if it is even, false if it is odd
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}

export function isEvenTruncateDecimal(n: number): boolean {
  const val = Math.floor(n);
  return isEven(val);
}

export const PI = 3.1415927;

export class Monkey {}

export interface MexicanFood {}
