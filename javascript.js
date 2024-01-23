import BigNumber from "bignumber.js";

function sum(addend1, addend2) {
  const result = new BigNumber(addend1).plus(new BigNumber(addend2));
  return result.toString().length > 9
    ? result.toExponential(3).toString()
    : result.toString();
}

function subtract(minuend, subtrahend) {
  // difference;
  const result = new BigNumber(minuend).minus(new BigNumber(subtrahend));
  return result.toString().length > 9
    ? result.toExponential(3).toString()
    : result.toString();
}

function multiply(multiplier, multiplicand) {
  // Product
  const result = new BigNumber(multiplier).multipliedBy(
    new BigNumber(multiplicand)
  );
  return result.toString().length > 9
    ? result.toExponential(3).toString()
    : result.toString();
}

function divide(dividend, divisor) {
  // Quotient
  const result = new BigNumber(dividend).dividedBy(new BigNumber(divisor));
  return result.toString().length > 9
    ? result.toExponential(3).toString()
    : result.toString();
}

function percentage(num) {
  const result = new BigNumber(num).dividedBy(100);
  return result.toString().length > 9
    ? result.toExponential(3).toString()
    : result.toString();
}

percentage(0.12);
