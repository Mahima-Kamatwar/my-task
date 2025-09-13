class Example{
    #data = "mahi"
    getData(){
        return this.#data
    }
    setData(value){
        this.#data = value
    }
}

let obj = new Example()

console.log(obj.getData())

obj.setData("mahima")

console.log(obj.getData())

// console.log(obj.#data) // will throw an syntax error