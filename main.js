const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("product-list");
const clearBtn = document.getElementById("clearAllBtn");

const form = document.forms.productForm;
const modelInput = form.model;
const yearInput = form.year;
const colorsInput = form.colors;
const isElectroInput = form.electro;

function ValidItems(){
    if (modelInput.value === "" || modelInput.value === "0"){
        return false
    }
    return true
}

addBtn.onclick = (event) => {

    if(!ValidItems()){
        alert("txt box is null")
        return;
    }

    event.preventDefault();

    // read form values
    const item = new car(
        modelInput.value,
        yearInput.value,
        colorsInput.value,
        isElectroInput.checked
    );

    tableBody.innerHTML += item.toHTMLRow();
}

clearBtn.onclick = () => {
    tableBody.innerHTML = "";
}