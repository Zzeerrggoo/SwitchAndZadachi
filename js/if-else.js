/**
 * Check if num equals zero
 * @param   {number} a
 * @returns {string}
 */
function isNull(a) {
  if (Number(a) === 0) {
    return 'Верно';
  }
  return 'Неверно';
}

/**
 * Check if a more than zero
 * @param   {number} a
 * @returns {string}
 */
function isMoreThanZero(a) {
  if (Number(a) > 0) {
    return 'Верно';
  }
  return 'Неверно';
}

/**
 * Check if a less than zero
 * @param   {number} a
 * @returns {string}
 */
function isLessThanZero(a) {
  if (Number(a) < 0) {
    return 'Верно';
  }
  return 'Неверно';
}

/**
 * Check if a more or equals zero
 * @param   {number} a
 * @returns {string}
 */
function isMoreOrEqualsZero(a) {
  if (Number(a) >= 0) {
    return 'Верно';
  }
  return 'Неверно';
}

/**
 * Check if a less or equals zero
 * @param   {number} a
 * @returns {string}
 */
function isLessOrEqualsZero(a) {
  if (Number(a) <= 0) {
    return 'Верно';
  }
  return 'Неверно';
}

/**
 * Check if a not equals zero
 * @param   {number} a
 * @returns {string}
 */
function isNotZero(a) {
  if (Number(a) === 0) {
    return 'Неверно';
  }
  return 'Верно';
}

/**
 * Check if a equals string 'test'
 * @param   {string} a
 * @returns {string}
 */
function isTest(a) {
  if (a === 'test') {
    return 'Верно';

  }
  return 'Неверно';
}

/**
 * Check if a equals string '1'
 * @param   {string} a
 * @returns {string}
 */
function isNumOneString(a) {
  if (a === '1') {
    return 'Верно';
  }
  return 'Неверно';
}