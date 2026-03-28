
const productList = [
  {
    title: "Laptop",
    price: 1200
  },
  {
    title: "Smartphone",
    price: 800
  },
  {
    title: "Tablet",
    price: 500
  },
  {
    title: "Headphones",
    price: 150
  },
  {
    title: "Smartwatch",
    price: 300
  },
  {
    title: "Keyboard",
    price: 100
  },
  {
    title: "Mouse",
    price: 60
  },
  {
    title: "Monitor",
    price: 400
  }
];

const myDocumentBody = document.getElementsByTagName("body")[0]; 
const myDocumentBody_v2 = document.querySelector("body"); 
// myDocumentBody.style.backgroundColor = "red";
console.log(myDocumentBody);
console.log(myDocumentBody_v2);

productList.forEach(unProduit => {
    let newDiv = document.createElement("div");
    let newTitle = document.createElement("h2");
    let newParagraph = document.createElement("p");
    let newButton = document.createElement("button");

    newTitle.innerText = unProduit.title;
    newParagraph.innerText = unProduit.price + "$";
    newButton.innerText = "+";

    newDiv.classList.add("product-card")

    newDiv.appendChild(newTitle)
    newDiv.appendChild(newParagraph)
    newDiv.appendChild(newButton)
    myDocumentBody.appendChild(newDiv)
});