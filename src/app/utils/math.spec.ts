import { isEven, isEvenTruncateDecimal } from './math';

describe('the math module', () => {
  it('can tell you if a number is even', () => {
    expect(isEven(6)).toBeTrue();
    expect(isEven(7)).toBeFalse();
    expect(isEven(6.9999)).toBeFalse();
  });

  it('can truncate a floating point number and tell you if it is even', () => {
    expect(isEvenTruncateDecimal(6.9997)).toBeTrue();
    expect(isEvenTruncateDecimal(7.132)).toBeFalse();
  });
});
