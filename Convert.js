const kelvin = 293; // Kelvin
const celsius = kelvin - 273; //Celius and Kelvin

let fahrenheit = celsius * (9 / 5) + 32; // Fahrenheit
fahrenheit = Math.floor(fahrenheit); // Math

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);