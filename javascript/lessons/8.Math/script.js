// Math is a built in class in js which has math properties and methods

// properties : value you access directly
console.log(Math.PI.toFixed(0))
console.log(Math.SQRT2.toFixed(0))
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LOG2E)
console.log(Math.LN10)
console.log(Math.LOG10E)


// Method : A method is a function you call with ()

// data.toFixed(n) // require numbers
// Math.sqrt(n)
// Math.cbrt(n)
// Math.pow(n,power)
// Math.round(n) // will round of conditionally
// Math.floor(n)
// Math.ceil(n)
//Math.trunc(n)

console.log(Math.sqrt(16)) //square root of 16 is 4
console.log(Math.cbrt(125)) //cuberoot of 125 is 5
console.log(Math.pow(4, 3))//define the number 4 and its power 3
console.log(Math.max(25, 30)) //maximum value 30
console.log(Math.min(40, 23)) //minimum value 23

// rounding off

console.log(Math.round(12.55))//greater than .5 so 13
console.log(Math.round(78.49))//less tha .5 so 78

//floor ceil trunc : require numbers in decimal

console.log(Math.floor(1.999999999)) //1 reduce number to 1
console.log(Math.ceil(2.000000001)) //3 increase number to 2
console.log(Math.trunc(7.8)) //7 remove decimal point

// random number
console.log(Math.floor((Math.random() * 5) + 1))

// Random integer between min and max
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  //ensures the range includes max & shifts it into the correct range.
}
console.log(getRandom(1, 10)); // 10
console.log(getRandom(1, 3)); // 1 2 3


// max,min
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

// trignometry
console.log(Math.tan(45).toFixed(0))
console.log(Math.cos(30).toFixed(0))
console.log(Math.sign(90).toFixed(0))
console.log(Math.cos(180).toFixed(0))

// area of circle
let radius = 12

let area = Math.PI * Math.pow(radius, 2)

console.log("Area of circle with radius", radius, "is", area.toFixed(2))

//circumference of circle
function circle(radius) {
    let circumference = 2 * Math.PI * radius;        // 2πr

    console.log("Circumference:", circumference.toFixed(2));
}
circle(80);
