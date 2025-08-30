//In JavaScript, exception handling is a way to catch and handle runtime errors so that the program doesn’t crash abruptly. It mainly uses the keywords try, catch, finally, and throw.

//syntax:
// try {
//     // Code that may throw an error
// } catch (error) {
//     // Code to handle the error
// } finally {
//     // Code that will always run (optional)
// }


// difference between error and exception

// Error happens due to system/environment failure,
//  while Exception happens due to code or logic failure.

// Errors usually crash the program, 
// while Exceptions can be managed with try-catch.

// Errors are not expected in normal flow,
//  while Exceptions are expected possibilities.

// Error = unrecoverable,
//  Exception = recoverable.

// Errors are beyond developer control,
//  while Exceptions are within developer control.

// example
let data = 123
try {
    console.log(data123)
} catch (e) {
    // console.log("an error occured " + e)
    // console.info("an error occured " + e)
    console.error("an error occured " + e)
    // console.warn("an error occured " + e)
}

// example
let name = "mahi"

try {
    if (name != "mahi12") {
        throw ("name does not match !")
    }
    console.log(1)
    console.log(2)
    console.log(3)

} catch (err) {
    console.error("an exception occured " + err)
}

// example
let division = (n1, n2) => n1 / n2
//          or
// let division = (n1, n2) => {
//     return n1 / n2
// }

try {
    let result = division(1, 0)

    if (result == Infinity) {
        throw ("division by 0 was the problem !")
    }

    console.log(result)

} catch (e) {
    console.error("An exception occured : " + e)
} finally {
    console.log("program completed !")
}

// example
function registerUser(username) {
    try {
        if (!username) {
            throw ("Username is required")
        }
        if (username.length < 3) {
            throw ("Username must be at least 3 characters long")
        } else {
            console.log("User registered:", username)
        }
    } catch (e) {
        console.log("Registration Error:" + e)
    }
}

registerUser("mahima")   // correct
registerUser("")         // Registration Error: Username is required
registerUser("ma")       // Registration Error: Username must be at least 3 characters long

// example
function withdraw(balance, amount) {
    try {
        if (amount <= 0) {
            throw ("Invalid withdrawal amount")
        }
        if (amount > balance) {
            throw ("Insufficient funds")
        }

    } catch (e) {
        console.log(" Transaction error:"+ e)
    } finally {
        console.log(" Transaction completed")
    }
}

withdraw(500, 0)      //  Invalid withdrawal
withdraw(500, 600)    //  Insufficient funds
withdraw(500, 200)    //  Success
