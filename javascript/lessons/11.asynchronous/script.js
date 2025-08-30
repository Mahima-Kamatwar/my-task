//Asynchronous programming, JS can start a task and continue running other tasks while waiting for the first one to finish.
//This avoids blocking (freezing) the program.

//difference between synchronous and asynchronous

// Synchronous: Tasks run one by one, each must finish before the next starts (blocking).
//Asynchronous: Tasks can run in the background, allowing other code to execute meanwhile (non-blocking).

//built in functions in asynchronous

//setInterval(callback,interval) → Runs a function repeatedly at given intervals.
let async1 = setInterval(() => {
    console.log("hii !")
}, [1000])

//example
let count = 1

let Id = setInterval(() => {
    console.log("Message number:", count)
    count++

    if (count > 5) {
        clearInterval(Id); // stop after 5 times
        console.log("Interval stopped")
    }
}, 1000)


//setTimeout(callback,interval) → Runs a function once after a delay.
//clearinterval → stop interval
console.log(1)
 setTimeout(() => {
    console.log("this is setTimeout !")
    clearInterval(async1)
}, [5000])

//example
console.log("Start")

setTimeout(() => {
    console.log("This runs after 3 seconds")
}, 3000)

console.log("End")



// Promise in JavaScript is an object that represents the result of an asynchronous operation.
// It can be in one of three states:
// Pending → operation not completed yet.
// Fulfilled → operation completed successfully (resolve).
// Rejected → operation failed (reject)