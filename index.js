/**
 * Define the decade of the month by the day number
 * @param   {number} day
 * @returns {string}
 */
function findMonthDecade(day) {

  if (day / 10 <= 1) {
    return 'first decade';
  } else if (day / 10 <= 2) {
    return 'second decade';
  }
  return 'third decade';

}

/**
 * Define the season of the year by the month number
 * @param   {number} month
 * @returns {string}
 */
function findSeasonOfTheYear(month) {

  const roundYears = Math.floor(month / 12);
  const m = month - roundYears * 12;

  if (m < 3 || m === 12) {
    return 'зима';
  } else if (m < 6) {
    return 'весна';
  } else if (m < 9) {
    return 'лето';
  }
  return 'осень';

}

/**
 * Check if first letter of a string is 'a'
 * @param   {string}str
 * @returns {string}
 */
function isFirstA(str) {

  if (str[0] === 'a')
    return 'да';

  return 'нет';
}

/**
 * Check if first letter of a string is '1' or '2' or '3'
 * @param   {string}str
 * @returns {string}
 */
function isFirst1or2or3(str) {

  if (str[0] === '1' || str[0] === '2' || str[0] === '3')
    return 'да';

  return 'нет';
}

/**
 * Find sum of first three digits from the start_index
 * @param   {string}num
 * @param   {number}start_index - starting point for adding digits
 * @returns {number}
 */
function sumThreeDigitNumber(num, start_index = 0) {
  return Number(num[start_index]) + Number(num[start_index + 1]) +
      Number(num[start_index + 2]);
}


let a = prompt();
alert(ifThreeFirstEqualsLastThree(a,sumThreeDigitNumber));

/**
 * Find if sum of first three digits equals the sum of last
 * three digits using functions for summing (sumThreeDigitNumber in this case)
 * @param   {string}num
 * @param   {function}sumThree
 * @returns {string}
 */
function ifThreeFirstEqualsLastThree(num, sumThree) {

  if (sumThree(num, 0) === sumThree(num, 3))
    return 'да';

  return 'нет';

}

