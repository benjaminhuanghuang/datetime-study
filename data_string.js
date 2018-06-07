const moment = require('moment');

var event = new Date('05 October 2011 14:48');
console.log("Local time is: ", event.toString());
// expected output: Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)
// (note: your timezone may vary)

// The toISOString() method returns a string in simplified extended ISO format (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ). 
// The timezone is always zero UTC offset, as denoted by the suffix "Z".
console.log(event.toISOString());
// expected output: 2011-10-05T14:48:00.000Z

var event = new Date('05 October 2011 14:48 UTC');
console.log("Local time is: ", event.toString());
console.log(event.toISOString());

const dateString = "2017-12-31T00:00:00.000Z";
const timeTicks = new Date(dateString).getTime();   //1514678400000;

date = new Date(timeTicks);  // local time
console.log("The date is: ", date);

console.log("The ISO string of date is: ", date.toISOString());
console.log("The string of date is: ", date.toString());

date2 = moment(timeTicks).format('YYYY-MM-DD');
console.log(date2);


