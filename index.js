const moment = require('moment');

function date(date) {
  return function engine(expression, data) {
    return moment(date).format(expression);
  }
}

module.exports = date;
