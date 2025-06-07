// const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("product-list2");
// const clearBtn = document.getElementById("clearAllBtn");

// const form = document.forms.productForm;
// const modelInput = form.model;
// const yearInput = form.year;
// const colorsInput = form.colors;
// const isElectroInput = form.electro;

// function ValidItems(){
//     if (modelInput.value === "" || !yearInput.value){
//         return false
//     }
//     return true
// }

// addBtn.onclick = (event) => {
//     event.preventDefault();

//     if(!ValidItems()){
//         alert("txt box is null")
//         return;
//     }


//     // read form values
//     const item = new car(
//         modelInput.value,
//         yearInput.value,
//         colorsInput.value,
//         isElectroInput.checked
//     );

//     tableBody.innerHTML += item.toHTMLRow();
// }

// clearBtn.onclick = () => {
//     tableBody.innerHTML = "";
// }
const fish = new product(
    "fish",
    "./images/Food_C205-128.png"
)
const egg = new product(
    "egg",
    "./images/Food_C203-128.png"
)
const a = new product(
    "cheese",
    "./images/Food_C217-128.png"
)
const b = new product(
    "meat",
    "./images/Food_C225-128.png"
)
tableBody.innerHTML += fish.toHTMLRow();
tableBody.innerHTML += egg.toHTMLRow();
tableBody.innerHTML += a.toHTMLRow();
tableBody.innerHTML += b.toHTMLRow();
const addFishBtn = document.getElementById("AddFish");
const addCheeseBtn = document.getElementById("AddCheese");
const addEggBtn = document.getElementById("AddEgg");
const resetBtn = document.getElementById("reset")
resetBtn.onclick = (event) => {
    tableBody.innerHTML = ""
}
addFishBtn.onclick = (event) =>{
    event.preventDefault();
    tableBody.innerHTML += fish.toHTMLRow();

}
addCheeseBtn.onclick = (event) =>{
    event.preventDefault();
    tableBody.innerHTML += a.toHTMLRow();

}
addEggBtn.onclick = (event) =>{
    event.preventDefault();
    tableBody.innerHTML += egg.toHTMLRow();

}

function handleRowClick(name) {
    RandomChoiceResept(name);
}
function RandomChoiceResept(name){
    //const rand = getRandomInt(1, 10);
    switch(name){
        case "fish":
            window.open("https://www.allrecipes.com/recipe/12782/lemon-garlic-tilapia/", "_blank");
            break;
        case "egg":
            window.open("https://www.allrecipes.com/recipe/222618/classic-egg-salad/", "_blank");
            break;
        case "cheese":
            window.open("https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/", "_blank"); // просто запитав в чата силки
            break;
        case "meat":
            window.open("https://www.allrecipes.com/recipe/25473/beef-stroganoff-iii/", "_blank");
            break;
        default:
            alert("Немає рецепту для цього інгредієнта");
}

}