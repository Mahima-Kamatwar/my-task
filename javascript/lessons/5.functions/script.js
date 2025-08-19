
// function types
let num1 = 600
let num2 = 300
let operation = () => {
   console.log(num1 + num2)
   console.log(num1 - num2)
   console.log(num1 * num2)
   console.log(num1 / num2)
   console.log(num1 % num2)
}
operation()
console.log("no argument no return")

// argument but no return
operation = (num1, num2) => {
   console.log(num1 + num2)
   console.log(num1 - num2)
   console.log(num1 * num2)
}
operation(34, 87)
console.log("argument but no return")

// no argument but return
operation = () => {
   return num1 - num2
}
console.log(operation())
console.log("no argument but return")

// argument and return
operation = (num1, num2) => {
   let divide = num1 / num2
   return divide
}
console.log(operation(100, 50))
console.log("argument and return")



// statements
// (looping)

//  wap in js to write all odd numbers from 0 to 50
function odd() {
   for (let start = 0; start <= 10; start++) {
      if (start % 2 !== 0) {
         console.log(start)
      }
   }
   console.log("odd program complete")

}
odd()

//   factorial
let fact = () => {
   let fact = 1
   for (let number = 6; number > 0; number--) {
      fact = fact * number
   }
   return fact
}
console.log("factorial is", fact())


// sum of digits
function digits() {
   let sum = 0
   for (let number = 475; number != 0; number = parseInt(number / 10)) {
      let digit = number % 10
      sum = sum + digit

   }
   console.log("sum is", sum)
}
digits()

// reverse a number
let reverse = () => {

   let digit = 0
   let rev = 0
   for (let number = 549; number > 0; number = parseInt(number / 10)) {
      digit = number % 10
      rev = rev * 10 + digit
   }
   console.log("Reverse number is " + rev)
}
reverse()

// argument and return
let reverse1 = (num) => {
   let rev = 0

   for (let number = num; number > 0; number = parseInt(number / 10)) {
      let digit = number % 10
      rev = rev * 10 + digit
   }

   return rev
}
let result = reverse1(874);
console.log("Reverse number is " + result)

// find and count armstrong number from range 0-1000

function armstrong() {
   let count = 0
   for (let i = 1; i <= 1000; i++) {
      let digit = 0
      let sum = 0

      for (let num = i; num > 0; num = parseInt(num / 10)) {
         digit = num % 10
         sum = sum + (digit * digit * digit)
      }
      if (sum === i) {
         console.log(sum + " is Armstrong number.")
         count++;
      }
   }
   console.log("total armstrong numbers are", count)
}
armstrong()

// palindrome

let palindrome = (start, end) => {
   let count = 0

   for (let number = start; number <= end; number++) {
      let orginal_number = number
      let rev = 0
      let temp = number
      if ((number > 100) && (number != 0)) {
         while (temp != 0) {
            let digit = temp % 10
            rev = rev * 10 + digit
            temp = parseInt(temp / 10)
         }
         if (orginal_number === rev) {
            count++;
         }
      }
   }
   return count
}
let total = palindrome(0, 300)
console.log("Total palindrome numbers: " + total)

// prime
function prime() {
   for (let i = 2; i <= 30; i++) {
      let Prime = true;
      for (let j = 2; (j * j) <= i; j++) {
         if (i % j == 0) {
            Prime = false;
            break;
         }
      }
      if (Prime) {
         console.log(i + " is Prime.");
      }
   }
}
prime()
console.log("prime number complete")

// (condition)
// if
let checkNumber = () => {

   let number = 40
   if (number > 4) {
      console.log("number  is greater than 4")
   }
}
checkNumber()

//   if else
let check = (number) => {
   if (number > 10) {
      return "number is greater than 10"
   } else {
      return "number is not greater than 10"
   }
}

console.log(check(0.5))
console.log(check(15))

// nested if 
let findLargest = (a, b, c, d) => {
   let largest;

   if (a > b) {
      if (a > c) {
         if (a > d) {
            largest = a
         } else {
            largest = d
         }
      } else {
         if (c > d) {
            largest = c
         } else {
            largest = d
         }
      }
   } else {
      if (b > c) {
         if (b > d) {
            largest = b
         } else {
            largest = d
         }
      } else {
         if (c > d) {
            largest = c
         } else {
            largest = d
         }
      }
   }

   return largest;
};
result = findLargest(10, 25, 45, 18)
console.log("The greatest number is " + result)

// if else if

function greater(a, b, c, d, e) {
   if (a > b && a > c && a > d && a > e) {
      console.log("Greatest number is: " + a)
   } else if (b > c && b > d && b > e) {
      console.log("Greatest number is: " + b)
   } else if (c > d && c > e) {
      console.log("Greatest number is: " + c)
   } else if (d > e) {
      console.log("Greatest number is: " + d)
   } else {
      console.log("Greatest number is: " + e)
   }
}
greater(12, 45, 23, 78, 56)



