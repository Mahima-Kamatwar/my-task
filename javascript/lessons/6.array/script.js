
// access

// (string)
let fname = ["mahi", "vinu", "siya", "disha"]
console.log(fname[1])
console.log(fname[3])
console.log(fname[2])
console.log(fname[0])

// (numbers)
let number = [1, 2, 3, 4, 5]
console.log(number[0])
console.log(number[1])
console.log(number[2])
console.log(number[3])
console.log(number[number.length - 1])

// traverse

// (for)
for (let index = 0; index < number.length; index++) {
    console.log(`for : ${number[index]}`)
}

// (while)
let i = 0
let numbers = [11, 12, 13, 14]
while (i < numbers.length) {
    console.log(`while : ${numbers[i]}`)

    i++
}

//  for of
let nums = [6, 7, 8]
for (let num of nums) {
    console.log("for of", num)
}

// foreach
numbers = [10, 20, 30];
let sum = 0;

numbers.forEach(num => sum += num);

console.log("Sum =", sum);

//map
number = [5, 6, 7, 8]
function square(number) {
    return number * number
}
let data = number.map(square)

console.log(`map square of number`, data)

// updating
// add element(push,unshift)

// push
nums = [1, 2, 3]
nums.push(4)
// [1, 2, 3, 4]

nums.push(5, 6, 7)
// [1, 2, 3, 4, 5, 6,7]

//unshift
nums.unshift(0)
// [0, 1, 2, 3]

nums.unshift(-3, -2, -1)

console.log(`push,unshift`, nums)
//output [-3,-2, -1, 0, 1, 2, 3]


// remove element(pop,shift)
// pop
console.log(nums.pop())
console.log(nums.pop())

//   shift
console.log(nums.shift())
console.log(nums.shift())

console.log(`pop,shift`, nums)
//output -1,0,1,2,3,4,5

// index wise
// splice
nums.splice(2, 0, 10, "hello")
console.log(nums)
// output -1,0,19,`hello`,1,2,3,4,5

// slice
// example 1
nums = [50, 60, 70, 80, 90]

console.log(nums.slice(1, 4))  // [60, 70, 80]
console.log(nums.slice(2))     // [70, 80, 90]
console.log(nums.slice(-2))    // [80, 90] (negative = from end)

// example 2
let str = "JavaScript"

console.log(str.slice(0, 4))   // "Java"
console.log(str.slice(-6))     // "Script"

// index of
nums = [10, 20, 30, 40, 50]

console.log(nums.indexOf(20))     // 1
console.log(nums.indexOf(20, 2))  // -1 (20 not found after index 2 in this array)
console.log(nums.indexOf(50))     // 4 (50 is at index 4)

// lastIndexOf with string
let text = "javascript"

console.log(text.lastIndexOf("a"))    // 3 (last 'a')
console.log(text.lastIndexOf("a", 2)) // 1 (search backwards from index 2)
console.log(text.lastIndexOf("z"))    // -1 (not found)

// lastIndexOf with array
console.log(nums.lastIndexOf(20))     // 1 (only one 20 in array)
console.log(nums.lastIndexOf(20, 2))  // 1 (search backwards from index 2)
console.log(nums.lastIndexOf(50))     // 4 (50 at index 4)

// search

// include
// ex 1
text = "javascript"

console.log(text.includes("java")) // true
console.log(text.includes("script")) // true
console.log(text.includes("php")) // false

// ex 2
nums = [10, 20, 30, 40];

console.log(nums.includes(20))   // true
console.log(nums.includes(30, 3)) // false (search starts from index 3)

// filter
// ex 1
nums = [10, 15, 20, 25, 30]

let evens = nums.filter(num => num % 2 === 0)

console.log(evens); // [10, 20, 30]

// ex 2
function sm() {
    return fname.filter(fname => fname.length <= 4)
}

console.log(sm())
// output mahi vinu siya

// sort
// numbers sort
numbers = [3, 1, 2, 8, 4]

numbers.sort((a, b) => { return b - a })

console.log(numbers)

// names.sort()
let names = ["c", "d", "a", "b", "A", "f", "G"]
names.sort((a, b) => {
    if (a > b) {
        return 1
    } else {
        return -1
    }
})

console.log(names)

