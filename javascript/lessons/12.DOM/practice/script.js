

let targetElement = document.getElementById("circle");

let btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
    if(targetElement.classList.value === "show" ){
        targetElement.classList.value = "hide";
    }else{
        targetElement.classList.value = "show";
    }
})


btn.addEventListener("click", (event) => {
    if (targetElement.classList.contains("show")) {
        targetElement.classList.value = "";
        targetElement.classList.value += "hide";
    }
    else {
        targetElement.classList.value = "";
        targetElement.classList.value += "show";
    }
});

