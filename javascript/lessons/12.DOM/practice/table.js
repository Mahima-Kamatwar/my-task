
// let updateContainer = document.querySelector('#updateContainer')

document.querySelector('#updateClose').addEventListener("click", () => {
    updateContainer.classList.toggle("active")
})

let entries = []

let form = document.getElementById('form1')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event.target["name"].value)
    console.log(event.target["phone"].value)
    console.log(event.target["email"].value)
    console.log(event.target["age"].value)
    entries.push({
        name: event.target["name"].value,
        phone: event.target["phone"].value,
        email: event.target["email"].value,
        age: event.target["age"].value,
    })
    displayData()
})

let table = document.getElementById('table1')
function displayData() {
    table.innerHTML = ""
    entries.forEach((entry, index) => {
        let newRow = document.createElement("tr")
        newRow.innerHTML = `
        <td>${entry.name}</td>
        <td>${entry.phone}</td>
        <td>${entry.email}</td> 
        <td>${entry.age}</td> 
       
        <td><button onClick="deleteEntry(${index})">Delete</button>
        <button onClick="updateEntry(${index})">update</button></td>`

        table.appendChild(newRow)
    })
}

function deleteEntry(deleteIndex) {
    entries = entries.filter((entry, index) => { return index != deleteIndex })
    displayData()
}



let updateContainer = document.querySelector('#updateContainer')
let updateForm = document.getElementById('updateForm')
let edit = null;

// Close 
document.querySelector('#updateClose').addEventListener("click", () => {
    updateContainer.classList.remove("active")
})

// // Open
function updateEntry(index) {
  edit = index
     const entry = entries[index]

     updateContainer.classList.add("active")}

// Save updated data when form is submitted
updateForm.addEventListener("submit", (e) => {
    e.preventDefault() 

    if (edit === null) return

    entries[edit] = {
        name: updateForm.name.value,
        phone: updateForm.phone.value,
        email: updateForm.email.value,
        age: updateForm.age.value
    }

    displayData() // Refresh table
    updateContainer.classList.remove("active") // Close 
    edit = null // Reset
})




