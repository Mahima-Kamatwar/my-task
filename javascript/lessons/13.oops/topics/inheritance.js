// Inheritance is one of the core concepts of Object-Oriented Programming (OOP). It allows a class (child or subclass) to inherit properties and methods from another class (parent or superclass). This way, code can be reused, and common functionality can be shared across multiple objects.

//  Key Points About Inheritance in JavaScript

// JavaScript classes can inherit from other classes using the extends keyword.
// The super() function is used to call the parent class’s constructor.
// A subclass can override methods of the parent class to provide specialized behavior.
// Inheritance helps organize code and avoid repetition.

// 1. Single level Inheritance
// A child class inherits from a single parent class.

// 2. Multi-Level Inheritance
// A class inherits from a class that itself is a child of another class.

// 3. Hierarchical Inheritance
// Multiple child classes inherit from a single parent class.



// class parent {
//     data = 1234
//     getParentData() {
//         return this.data
//     }
// }

// class child extends parent {
//     childData = 5678
//     getChildData() {
//         return this.childData
//     }
// }

// class grandChild extends child {
//     grandChildData = 9101112
//     getGrandChildData() {
//         return this.grandChildData
//     }
// }

// let c1 = new grandChild()

// console.log(c1.data)
// console.log(c1.childData)
// console.log(c1.grandChildData)
// console.log(c1.getParentData())
// console.log(c1.getChildData())
// console.log(c1.getGrandChildData())

class car {
    name;
    wheels;
    doors;
    seats;
    color;

    constructor(name, wheels, doors, seats, color) {
        console.log("a object is created of car class !")
        this.name = name
        this.wheels = wheels
        this.doors = doors
        this.seats = seats
        this.color = color
    }

    getInfo() {
        console.log(`car name is ${this.name}`)
        console.log(`${this.name} car has ${this.wheels} wheels !`)
        console.log(`${this.name} car has ${this.seats} seats !`)
        console.log(`${this.name} car has ${this.doors} doors !`)
        console.log(`${this.name} car is of ${this.color} color !`)
    }

    drive() {
        console.log(`${this.name} car is driving  !`)
    }

    stop() {
        console.log(`${this.name} car has stoped !`)
    }

    reverse() {
        console.log(`${this.name} car is reversing !`)
    }
}

class sedan extends car {
    type = "sedan"

    constructor(name, wheels, doors, seats, color) {
        super(name, wheels, doors, seats, color)
    }

    doSedanStuff() {
        console.log(`${this.name} doing sedan stuff`)
    }
}

class suv extends car {
    type = "SUV"

    constructor(name, wheels, doors, seats, color) {
        super(name, wheels, doors, seats, color)
    }

    doSUVStuff() {
        console.log(`${this.name} doing SUV stuff`)
    }
}

let virtusGT = new sedan("virtus GT 1.5 TSI", 4, 5, 4, "black")

let brezza = new suv("Brezza ZXI", 4, 4, 5, "red")

virtusGT.getInfo()

virtusGT.doSedanStuff()

brezza.getInfo()
brezza.doSUVStuff()