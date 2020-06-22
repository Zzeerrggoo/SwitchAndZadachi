/**
 * Defines the season of the year by users input
 * @param   {number}num
 * @returns {string}
 */
function seasonsOfYear(num) {
  let res;

  switch (Number(num)) {

    case 1:
      res = 'зима';
      break;
    case 2:
      res = 'весна';
      break;
    case 3:
      res = 'лето';
      break;
    case 4:
      res = 'осень';
      break;
    default:
      res = 'и так далее';
  }

  return res;

}