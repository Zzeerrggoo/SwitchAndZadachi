/**
 * Is a more than zero and less than five
 * @param   {number} a
 * @returns {string}
 */
function isMoreThanZeroAndLessThanFive(a) {
  if (a > 0 && a < 5) {
    return 'Верно';
  }
  return 'Неверно';
}

/**
 * Make arithmetic operations depends on if a
 * equals zero or two
 *
 * @param a
 * @returns {number|*}
 */
function equalsZeroOrTwo(a) {
  if (a === 0 || a === 2) {
    return a + 7;
  }
  return a / 10;
}

/**
 * If a
 * equals or less than one and b equals or more than three
 * make addition
 * else
 * make subtraction
 *
 * @param   {number} a
 * @param   {number} b
 * @returns {number|*}
 */
function conditionalArithmetics(a, b) {
  if (a <= 1 && b >= 3) {
    return a + b;
  }
  return a - b;
}


/**
 *
 * @param   {number} a
 * @param   {number} b
 * @returns {string}
 */
function isConditionalStatement(a, b) {
  if (a > 2 && a < 11 || b >= 6 && b <= 14) {
    return 'Верно';
  }
  return 'Неверно';
}
