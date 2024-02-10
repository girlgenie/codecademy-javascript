// create variable kelvin that will remain unchanged (i.e. constant)
const kelvin = 0; 
console.log(kelvin); 
console.log(typeof kelvin);
// convert kelvin to celsius and create a variable 
const celsius = kelvin - 273; 
console.log(celsius); 
// formula for fahrenheit
let fahrenheit =celsius * (9/5) + 32; 
// round down the fahrenheit temperature 
fahrenheit = (Math.floor(fahrenheit));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// convert celsius to newton and calcuate rounding down 
let newton = celsius * (33/100); 
newton = (Math.floor(newton)); 
console.log(`The temperature is ${newton} degrees Newton.`)
