/**
 * If test equals true
 * @param   {boolean} test
 * @returns {string}
 */
function isTrue(test) {
  if (test === true) {
    return 'Верно';
  }
  return 'Неверно';
}

/**
 * If test equals true in short form
 * @param   {boolean} test
 * @returns {string}
 */
function isTrueShort(test) {
  return test === true ? 'Верно' : 'Неверно';
}

/**
 * If test not equals true
 * @param   {boolean} test
 * @returns {string}
 */
function isNotTrue(test) {
  if (test !== true) {
    return 'Верно';
  }
  return 'Неверно';
}

/**
 * If test not equals true in short form
 * @param   {boolean} test
 * @returns {string}
 */
function isNotTrueShort(test) {
  return test !== true ? 'Верно' : 'Неверно';
}

