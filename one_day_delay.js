const dateString = "2017-12-31T00:00:00.000Z";

const timeTicks = new Date(dateString).getTime();
console.log("Time ticks: ", timeTicks);  //1514678400000
const date = new Date(timeTicks);

console.log("The date:", date); // Display Sat Dec 30 2017 16:00:00 GMT-0800 (PST) in Chrome
