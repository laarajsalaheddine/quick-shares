let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPhone = document.getElementById("phone");
let btnAdd = document.getElementById("btnAdd");
let tableBody = document.getElementById("tableBody");
let iputNameValue = inputName.value
let iputEmailValue = inputEmail.value
let iputPhoneValue = inputPhone.value

const data = []; //[{}]

btnAdd.addEventListener("click", function () {
    iputNameValue = inputName.value
    iputEmailValue = inputEmail.value
    iputPhoneValue = inputPhone.value

    data.push(
        {
            name: iputNameValue,
            email: iputEmailValue,
            phone: iputPhoneValue
        }
    )


    data.forEach(function (item, index, array) {
        let row = document.createElement("tr");
        let cellName = document.createElement("td");
        let cellEmail = document.createElement("td");
        let cellPhone = document.createElement("td");
        let cellActions = document.createElement("td");

        cellName.textContent = item.name;
        cellEmail.textContent = item.email;
        cellPhone.textContent = item.phone;

        let btnEdit = document.createElement("button");
        btnEdit.textContent = "Edit";
        btnEdit.className = "edit";
        btnEdit.addEventListener("click", function () {
            inputName.value = item.name;
            inputEmail.value = item.email;
            inputPhone.value = item.phone;
            data.splice(index, 1);
            updateTable();
        });

        let btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete";
        btnDelete.className = "delete";
        btnDelete.addEventListener("click", function () {
            data.splice(index, 1);
            updateTable();
        });

        cellActions.appendChild(btnEdit);
        cellActions.appendChild(btnDelete);

        row.appendChild(cellName);
        row.appendChild(cellEmail);
        row.appendChild(cellPhone);
        row.appendChild(cellActions);

        tableBody.appendChild(row);
    });

    function updateTable() {
        tableBody.innerHTML = "";
        data.forEach(function (item, index, array) {
            let row = document.createElement("tr");
            let cellName = document.createElement("td");
            let cellEmail = document.createElement("td");
            let cellPhone = document.createElement("td");
            let cellActions = document.createElement("td");

            cellName.textContent = item.name;
            cellEmail.textContent = item.email;
            cellPhone.textContent = item.phone;

            let btnEdit = document.createElement("button");
            btnEdit.textContent = "Edit";
            btnEdit.className = "edit";
            btnEdit.addEventListener("click", function () {
                inputName.value = item.name;
                inputEmail.value = item.email;
                inputPhone.value = item.phone;
                data.splice(index, 1);
                updateTable();
            });

            let btnDelete = document.createElement("button");
            btnDelete.textContent = "Delete";
            btnDelete.className = "delete";
            btnDelete.addEventListener("click", function () {
                data.splice(index, 1);
                updateTable();
            });

            cellActions.appendChild(btnEdit);
            cellActions.appendChild(btnDelete);

            row.appendChild(cellName);
            row.appendChild(cellEmail);
            row.appendChild(cellPhone);
            row.appendChild(cellActions);

            tableBody.appendChild(row);
        });
    }

    console.log("name: ", iputNameValue);
    console.log("email: ", iputEmailValue);
    console.log("phone: ", iputPhoneValue);
    console.log(data);


});


