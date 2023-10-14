exports.ordenamientoDescendente = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}

exports.ordenamientoAscendente = (a, b) => {
  if (b > a) {
    return 1;
  }
  if (b < a) {
    return -1;
  }
  return 0;
}

exports.format = (inputDate) => {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

    date = date
        .toString()
        .padStart(2, '0');

    month = month
        .toString()
        .padStart(2, '0');

  return `${date}/${month}/${year}`;
}

exports.formatTime = (inputDate) => {
  return inputDate.getUTCFullYear() +"/"+ (inputDate.getUTCMonth()+1) +"/"+ inputDate.getUTCDate() + " " + inputDate.getUTCHours() + ":" + inputDate.getUTCMinutes() + ":" + inputDate.getUTCSeconds();;
}