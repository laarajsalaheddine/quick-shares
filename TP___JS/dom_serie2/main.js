// const paragraph = document.querySelector("#envelope p");
// const button = document.querySelector("#change-text");

// button.addEventListener('click', () => {
//    // previousElementSibling *
//    // nextElementSibling
//    if (button.previousElementSibling.textContent === "New text") {
//       button.previousElementSibling.textContent = "Texte Original";
//       button.previousElementSibling.style.color = "#000";
//    } else {
//       button.previousElementSibling.textContent = "New text";
//       button.previousElementSibling.style.color = "#F00";
//    }

// });

// EX2 pro max
// const highlight1 = document.querySelector("#highlight1");
// const highlight2 = document.querySelector("#highlight2");
// const highlight3 = document.querySelector("#highlight3");
// const allBtn = document.querySelectorAll(".card button");


// // classe (this) ==> instance
// // boucle

allBtn.forEach(btn => {
   btn.addEventListener('click', () => {
      let closestParent = btn.closest(".card");
      let siblingParagraph = btn.previousElementSibling;
      let paragrapheText = siblingParagraph.textContent;
      let newInput = document.createElement("input");
      let saveButton = document.createElement("button");
      newInput.type = "text";
      newInput.id = "editParagraph";
      newInput.value = paragrapheText;

      saveButton.textContent = "Save";
      saveButton.id = 'save';

      siblingParagraph.innerHTML = "";
      siblingParagraph.appendChild(newInput);
      siblingParagraph.appendChild(saveButton);

      document.getElementById("save").addEventListener('click', () => {
         let editPargraphInput = document.getElementById("editParagraph")
         let NewValue = editPargraphInput.value;
         editPargraphInput.parentNode.innerHTML = NewValue;
      });

      closestParent.classList.toggle("card-styled");
   });
});

// EX 5
const maUL = document.querySelector("ul");
const maULEnfnats = document.querySelectorAll("li");

document.addEventListener("keyup", (event) => {
   // keyCode = 88, key = "x", code = "KeyX"
   console.log(event.keyCode, event.key, event.code);
   if (event.key !== "x") {
      return null;
   }

   for (let i = 0; i < maULEnfnats.length; i++) {
      if ((i + 1) % 2 !== 0)
         continue;
      const unListElement = maULEnfnats[i];
      unListElement.classList.add("selectionner-li");
   }

})




