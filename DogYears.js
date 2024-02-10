/* MY FIRST ATTEMPT! THIS IS INCORRECT 
const year1 = 10.5; 
const year2 = 10.5;
const twoYears = 10.5*2;  
// multiply yearsafter by age - 2 
const yearsAfter = 4; 
let myAge = 8;
let yearsLeft = myAge - 2; 


let ageInDogYears = myAge - yearsLeft * 4; 
console.log(ageInDogYears); 
 ==========================================*/

// my age as a variable 
const myAge = 8; 
// first two years of life 
let earlyYears = 2; 
earlyYears =earlyYears * 10.5; 
// age after first two years of life 
let laterYears = myAge - 2; 
laterYears = laterYears * 4; 
console.log(earlyYears); 
console.log(laterYears);
// early and later years added 
let myAgeInDogYears = earlyYears + laterYears; 
// will return name lowercase 
let myName = 'Rockelle'.toLowerCase(); 
console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} in dog years.`)