// In JavaScript, a multidimensional array means an array that contains other arrays as its elements.
// It’s often used to represent tables, matrices, or grids.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[0][0]); // 1 
console.log(matrix[1][2]); // 6 
console.log(matrix[2][1]); // 8 

// loop
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}
// example
let students = [
    ["Mahi", 85, 90, 78],
    ["Isha", 92, 88, 95],
    ["Adi", 70, 75, 80]
]

console.log(students[0][0]); // "Mahi"
console.log(students[1][2]); // 88

// loop
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j])
    }
}

let fsd_530 = ["student1", "student2", "student3", "student4"]
let fsd_730 = ["student5", "student6", "student7", "student8"]
let fsd_1030 = ["student9", "student10", "student11"]

let java_530 = ["student12", "student13", "student14", "student15"]
let java_730 = ["student16", "student17", "student18", "student19"]
let java_1030 = ["student20", "student21", "student22"]


let itech_sharda_sq = [fsd_530, fsd_730, fsd_1030]

let itech_triranga_sq = [java_530, java_730, java_1030]

let itech_nagpur = [
    itech_sharda_sq,
    itech_triranga_sq
]

console.log(itech_nagpur[0][0][1]) //student2

console.log(itech_nagpur[1][2][2]) //student22

// for
for (let i = 0; i < itech_nagpur.length; i++) {
    for (let j = 0; j < itech_nagpur[i].length; j++) {
        console.log(itech_nagpur[i][j])
    }
}

// for of
for (let array of itech_nagpur) {
    for (let element of array) {
        console.log(element)
    }
}

//  while
let i = 0;
while (i < itech_nagpur.length) {
    let j = 0;
    while (j < itech_nagpur[i].length) {
        console.log(itech_nagpur[i][j]);
        j++;
    }
    i++;
}

//  template literal
let campusNames = ["Sharda Square", "Triranga Square"]
let time = ["5:30", "7:30", "10:30"]

for (let i = 0; i < itech_nagpur.length; i++) {
    console.log(`Campus: ${campusNames[i]}`)
    for (let j = 0; j < itech_nagpur[i].length; j++) {
        console.log(` Batch at ${time[j]}`)
        for (let student of itech_nagpur[i][j]) {
            console.log("   " + student)
        }
    }
}

// slice
let arr = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],

];
console.log(arr.slice(0, 2))
// [[1,2,3], [4,5,6]]

// splice
arr.splice(1, 1, 9, "hello")
console.log(arr)

// op:  [1, 2, 3],
//   9,
//   "hello",
//   [7, 8, 9],
//   [4, 5, 6]

// push,pop,shift,unshift
let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

arr1.push([10, 11, 12])
console.log("after push", arr1)

arr1.unshift([13, 14, 15])
console.log("after unshift", arr1)


// arr1.pop();
// console.log("after pop", arr1)

// arr1.shift()
// console.log("after shift", arr1)



