//const variable myAge equal to my age
const myAge = 35
console.log(myAge);
//let variable for early dog years
let earlyYears = 2
console.log(earlyYears);
earlyYears *= 10.5;
//deduct 2 from myAge to var laterYears 
let laterYears = myAge - 2;
//multiply laterYears by 4
laterYears *=4
console.log(earlyYears, laterYears);
//my age in dog years
var myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears);
//use string and built in method to lowercase to add name in lower case
let myName ='Jamie Shields'.toLowerCase();
console.log(myName)
//string interpolate results to string below. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`); 
