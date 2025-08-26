// key:value pair

let student1 = {
    name: "isha kawase",
    phone: 9766696550,
    address: "Nagpur",
    subjects: ["Math", "Java"]
}


let student2 = {
    name: "jiya sharma",
    phone: 885704120,
    address: "bombay",
    subjects: ["Science", "Java"],
}

let students = [
    student1, student2,
    { name: "mahima kamatwar", phone: 907582864, address: "mumbai", subjects: ["English", "C++"] }
]
// Array of Object

for (let student of students) {
    console.log(student.name)
}

for (let key in student2) {
    console.log(key + " : " + student2[key])
}

// // destructuring of array and objects

let array = [1, 2, 3, 4, 5, 6]
let object = { key1: "value1", key2: "value2" }
let [a, b, c, d, e, f] = array

console.log(a)
console.log(f)

console.log(array)
console.log(...array)

let numbers = [5, 6, 7, ...array]

console.log(numbers)

let { key2 } = object

console.log(key2) //value2

// result 
let result = {
    title: "title",
    status: true,
    output: [`mahi`, `jiya`, `siya`]
}


function Task(result) {
    let { status, output } = result

    if (status) {
        console.log("your output is")

        let [op1, op2, op3] = output

        if (op1 == `mahi` && op2 == `jiya` && op3 == `siya`) {
            console.log("you have completed the task successfully !")
            return true
        } else {
            console.log("you have completed the task unsuccessfully !")
            return false
        }
    }
}

console.log(Task(result))

// for in
let fruits = ["apple", "banana", "cherry", "lichi"]

for (let i in fruits) {
    console.log(i, ":", fruits[i])
}

