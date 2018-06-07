const moment = require('moment');

var utcDateTime = new Date("2018-06-15T07:00:00.000Z")   // utc time 1529046000000
console.log("UTC datetime: ", utcDateTime.getTime());

var localDateTime = new Date("2018-06-15T07:00:00.000")   // local time
console.log("Local datetime: ", localDateTime.getTime());

// Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
var localTimeZone = new Date().getTimezoneOffset();
console.log("Local time zone", localTimeZone);

// Save to database
var timeticks = 1529046000000;

var date = new Date(timeticks)
console.log("Date for time ticks: ", date);

var momentFromTimeticks = moment(timeticks);
console.log("Moment From Time Ticks: ", momentFromTimeticks);
console.log("utcDate for time ticks: ", momentFromTimeticks.utc());


//To create a moment from a Unix timestamp (seconds since the Unix Epoch), use moment.unix(Number).
var day = moment.unix(1318781876);

// The getTime() method returns a number representing the milliseconds elapsed between 1970-1-1 00:00:00 UTC and the given date.
// getTime() always uses UTC for time representation. 
// For example, a client browser in one timezone, getTime() will be the same as a client browser in any other timezone.
var dateISOStrFromDB = "2017-12-31T08:00:00.000Z";
dateISOStrFromDB = dateISOStrFromDB.substring(0, dateISOStrFromDB.length - 2);
var timeElapsed = new Date(dateISOStrFromDB).getTime()
console.log('time elapsed: ', timeElapsed);
var date = new Date(timeElapsed)
console.log(date);

const getMomentObject = (date, inUserLocale = false) => {
    if (inUserLocale)
        return moment(date);
    else
        return moment.utc(date)
}

console.log(getMomentObject("2017-12-31T08:00:00.000", true));
console.log(getMomentObject("2017-12-31T08:00:00.000", false));
console.log("Local time from timeticks: ", getMomentObject(1529046000000, true));  
console.log("UTC time from timeticks: ", getMomentObject(1529046000000, false));


const dateString = "2017-12-31T00:00:00.000Z";
date = new Date(date).getTime();