//Bubble sorting

let numbers = [3, 5, 4, 2, 1];

function bubbleSort(arr, order) {
    let steps = 0
    for (let i = 0; i < arr.length - 1; i++) {
        let swap = false;

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (order === "a" && arr[j] > arr[j + 1]) {
                steps++
                // ascending swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            } 
            else if (order === "d" && arr[j] < arr[j + 1]) {
                // descending swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }

        // if no swap happened → array already sorted
        if (!swap) break;
    }

    return arr;
}

let order = window.prompt("How do you want to arrange your numbers? Press `a` for ascending or `d` for descending");
console.log(bubbleSort(numbers, order));


//Selection sort
let names = [`mahi`, `isha`, `nau`, `adi`];

function selectionSort(array, sequence) {
    if (sequence === `a`) {   // Ascending
        for (let i = 0; i < array.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    } 
    else if (sequence === `d`) {   // Descending
        for (let i = 0; i < array.length; i++) {
            let maxIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] > array[maxIndex]) {
                    maxIndex = j;
                }
            }
            // Swap
            let temp = array[i];
            array[i] = array[maxIndex];
            array[maxIndex] = temp;
        }
    } 
    else {
        console.log("You have entered the wrong option");
    }
    
    return array;
}

let seq = window.prompt("How do you want to arrange your array? Press (a) for ascending order or (d) for descending order");
console.log(selectionSort(names, seq));
