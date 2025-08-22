
let numbers = [1, 2, 3, 5, 1,6]
// 1 2 3 4 5

// sorting : bubble sort, selection sort

function bubbleSort(arr) {
    let swap = false
    let steps = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                // swaping
                steps++
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = true
            }
        }
        // if not swaped then return the sorted array
        if (!swap) {
            console.log(`it took ${steps}`)
            return arr
        }
    }
    console.log(`it took ${steps}`)
    return arr
}
console.log(bubbleSort(numbers))

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

let names = ["mahi", "chinu", "diya"]

console.log(selectionSort(numbers))
console.log(selectionSort(names))

