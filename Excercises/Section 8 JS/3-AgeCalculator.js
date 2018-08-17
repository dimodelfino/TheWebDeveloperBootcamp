var age = prompt("Enter your age: ");
var leapDays = Math.floor(age/4);
var ds = age*365;
var days = (age * 365) + leapDays;
console.log("You've been alive for roughly" + days + " days. Counting " + leapDays + " leap days.");
