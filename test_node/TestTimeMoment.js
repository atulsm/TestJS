const moment = require('moment');

const today = moment().utc().startOf('day').toDate();
console.log(today);
console.log(today.getTime());

const thirtydaysback = moment().utc().startOf('day').subtract(30,'day').toDate();
console.log(thirtydaysback);
console.log(thirtydaysback.getTime());
