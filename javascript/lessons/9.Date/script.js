let date = new Date()

// // // date.properties
// // // date.methods()

// // // new Date().properties
// // // new Date().methods()

// // // setter

date.setTime(0)
date.setDate(20)

// // // getter 

console.log(date.getTime())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())
console.log(date.getFullYear())

console.log(`current date is ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)

console.log(date.toDateString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleDateString())

console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())

console.log(date.getUTCDay())
console.log(date.getUTCHours())

let customDate = new Date("2025-08-27"); // YYYY-MM-DD format
console.log(customDate.toLocaleDateString());




// // // 5:30 GMT

// // // setter 

// // // 18:37

// // // y2k1756213875059

// // // 1000 ms - 1sec

// // // 5000ms - 5s

// // // 100ms - 1sec

// // // ms - 1 jan 1970

// example
let person1 = {
    name: "mahima kamatwar",
    b_date: 11,
    b_year: 2002,
    b_month: 4, // May (months are 1–12 for us, but JS uses 0–11)
};

let person2 = {
    name: "siya chawan",
    b_date: 27,
    b_year: 2005,
    b_month: 7, // August
};
let date1 = new Date()
let date2 = new Date()

date1.setDate(person1.b_date)
date1.setMonth(person1.b_month)
date1.setFullYear(person1.b_year)

console.log(date1.toLocaleDateString())
console.log(date1.getTime())

date2.setDate(person2.b_date)
date2.setMonth(person2.b_month)
date2.setFullYear(person2.b_year)

console.log(date2.toLocaleDateString())
console.log(date2.getTime())

if (date1.getTime() < date2.getTime()) {
    console.log(`person ${person1.name} is older !`)
} else {
    console.log(`person ${person2.name} is older !`)
}

// Create Date objects directly from values
date1 = new Date(person1.b_year, person1.b_month, person1.b_date);
date2 = new Date(person2.b_year, person2.b_month, person2.b_date);

// Difference in days
Day = Math.floor(
    Math.abs(date1 - date2) / (1000 * 60 * 60 * 24) //The Math.abs() static method returns the absolute value of a number.
    // // convert to days
    // 1000 → milliseconds in 1 second

    // 60 → seconds in 1 minute

    // 60 → minutes in 1 hour

    // 24 → hours in 1 day

);

if (date1 < date2) {
    console.log(`${person1.name} is older by ${Day} days.`);
} else {
    console.log(`${person2.name} is older by ${Day} days.`);
}



