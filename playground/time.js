// Jan 1st 1970 00:00:00 am
const moment = require('moment');

var date = moment();

//date.add(1, 'year').subtract(5, 'months');
//console.log(date.format('MMM Do YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

console.log(date.format('h:mm a'));
