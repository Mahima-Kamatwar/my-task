// reverse of a string

let fname = "MAHIMA Kamatwar"
let newname = ""
console.log(fname)
fname = fname.trim()
let i = fname.length - 1
while (i >= 0) {
    newname = newname + fname.charAt(i)
    i--
}
console.log(newname.toUpperCase())
console.log("reverse complete")


// fname store orignal name
// newname is empty string it will hold reverse of string
// fname.length-1 last index of string
// i-- count last character to first
// newname=newname + fname.charAt(i) add each character to end of newname
// toUppercase convert all character to uppercase(i.e all capital character)


// count specific charater within string

let char = "a";

let count = 0;
i = 0
while (i < fname.length) {

    if (char == fname.charAt(i)) {
        count++
    }
    i++
}
console.log(count)
console.log("count complete")



// find unique character within a string

i = 0
while (i < fname.length) {
    if (fname.indexOf(fname.charAt(i)) == fname.lastIndexOf(fname.charAt(i))) {
        console.log(fname.charAt(i));
    }
    i++
}
console.log("unique character complete")

// substring
let string1 = "hello world !"
console.log(string1.substring(0, 5))
console.log(string1.substring(5,string1.length))

