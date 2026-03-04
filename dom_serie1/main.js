console.log("main file working .........");

// getelementById
// querySelector
let element = document.getElementById("message")
// let element_v2 = document.querySelector("#message")

setTimeout(() => {

    element.style.color = "#f00"
    element.style.textTransform = "uppercase"
}, 2000);


setTimeout(() => {
    element.innerText = "Salut DD106";
}, 4000);


