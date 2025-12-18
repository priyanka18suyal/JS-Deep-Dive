// Day 6: Working with Dates in JavaScript

//date in js
let mydate = new Date();
// console.log(mydate); //current date and time

// console.log(mydate.toString()); //date and time in string format better than earlier one

// console.log(mydate.toISOString());
//output in Iso format = 2025-12-18T14:10:26.114Z

// console.log(mydate.toDateString());
//output in date string format = Thu Dec 18 2025

// console.log(mydate.toTimeString());
//output in time string format = 14:10:26 GMT+0000 (Coordinated Universal Time)

// console.log(mydate.toJSON());
//output=>2025-12-18T14:13:50.239Z

// console.log(mydate.toUTCString());
//output=>Thu, 18 Dec 2025 14:14:59 GMT
//getting individual date time components

// console.log(mydate.toLocaleString());
//output=>12/18/2025, 2:16:30 PM is the date and time in locale format

// console.log(mydate.toLocaleDateString());
//output=>12/18/2025

// console.log(mydate.toLocaleTimeString());
//output=>2:16:30 PM is the time in locale format

// console.log(typeof mydate); //object

//let myCreateDate = new Date(2025,11,18)
//0 to 11 month
//console.log(myCreateDate.toDateString());
//Sat Jan 18 2025

let myCreateDate = new Date(2025,11,18,4,5,3);
// console.log(myCreateDate.toString());
//output=>Thu Dec 18 2025 04:05:03 GMT+0000 (Coordinated Universal Time)

// console.log(myCreateDate.toLocaleString());
//12/18/2025, 4:05:03 AM

let myTimestamp = Date.now();
//gives timestamp in milliseconds from 1 Jan 1970 to current date
// console.log(myTimestamp); //1734362793032

// console.log(myCreateDate.getTime());  //1734368703000

//timestamp in seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate); //current date and time
//2025-12-18T14:33:55.117Z


console.log(newDate.getTime()); //1734363235117
console.log(newDate.getDay());
// console.log(mydate.getFullYear()); //2025
// console.log(mydate.getMonth()); //11 (month starts from 0 to 11)
// console.log(mydate.getDate()); //18 (day of the month)

newDate.toLocaleString(); //we can give parameters also for locale format

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));
//Thursday
console.log(newDate.toLocaleString('default',{
    month:"long",
}));
//December

console.log(newDate.toLocaleString('default',{
    month:"short",
}));
//it gives short form of month
//Dec

console.log(newDate.toLocaleString('default',{
    month:"2-digit",
}));
//12
//it gives month in 2 digit format

console.log(newDate.toLocaleString('default',{
    year:"numeric",
}));
//2025

console.log(newDate.toLocaleString('default',{
    year:"2-digit",
}));
//25
//it gives year in 2 digit format

console.log(newDate.toLocaleString('default',{
    day:"2-digit",
}));
//18
//it gives day in 2 digit format

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"2-digit",
}));
//Thursday, December 18, 2025

//ends here