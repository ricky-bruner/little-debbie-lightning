function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}

const debbieData = loadData("Little Debbie Snacks")

const body = document.querySelector("body");
const script = document.querySelector("script");
const makeContent = document.createElement("div")
makeContent.setAttribute("id", "main-content");
body.insertBefore(makeContent, script);
const mainContent = document.querySelector("#main-content");


mainContent.innerHTML +=
    `<button id="populateDatabase">Load Snacks!</button>`;


const loadButton = document.querySelector("#populateDatabase");

function userAddedSnacks(){
    console.log("Did we get here?");
    let name = document.querySelector("#nameInput").value;
    let packaging = document.querySelector("#packagingInput").value;
    let description = document.querySelector("#descriptionInput").value;
    let amount = document.querySelector("#amountInput").value;
    let image = document.querySelector("#imageInput").value;
    let userAddedSnack = {
        name: name, 
        packaging: packaging, 
        description: description, 
        amount: amount, 
        image: image
    }
    const snackContainer = document.querySelector(".snack-container");
    snackContainer.innerHTML +=
    `<div class="snack-card">
    <img src="${userAddedSnack.image}" alt="${userAddedSnack.name}">
    <div>
    <h3>${userAddedSnack.name}</h3>
    <p>${userAddedSnack.description}</p>
    <p class="snack-details">${userAddedSnack.amount} - ${userAddedSnack.packaging}</p>
    </div>
    </div>`
    let form = document.querySelector("form");
    body.removeChild(form);
    mainContent.innerHTML += 
    `<button id="add-snacks-button">Add More Snacks?</button>`;
    const addSnacksButton = document.querySelector("#add-snacks-button");
    addSnacksButton.addEventListener("click", showForm);
}


function showForm(){
    console.log("A form will be added here!");
    const addSnacksButton = document.querySelector("#add-snacks-button");
    mainContent.removeChild(addSnacksButton);
    const form = document.createElement("form");
    body.insertBefore(form, script);
    const snackForm = document.querySelector("form");
    snackForm.innerHTML +=
    `<input id="nameInput" placeholder="Name of Snack">
    <input id="packagingInput" placeholder="Type of Packaging">
    <input id="amountInput" placeholder="How many snacks come in the package?">
    <input id="descriptionInput" placeholder="Describe the snack!">
    <input id="imageInput" placeholder="Copy and Paste a URL to picture of your snacks box!">
    <button id="submit-form">Add Your Snack to the Collection!</button>`
    const submitSnackFormBtn = document.querySelector("#submit-form");
    submitSnackFormBtn.addEventListener("click", userAddedSnacks);
}

function popSnacks(){
    const showSnacks = document.querySelector("#show-snacks")
    mainContent.removeChild(showSnacks);
    mainContent.innerHTML +=
    `<h2>SCHNAAAAAAKS!</h2>
    <div class="snack-container"></div>
    <button id="add-snacks-button">Add More Snacks?</button>`;
    const addSnacksButton = document.querySelector("#add-snacks-button");
    addSnacksButton.addEventListener("click", showForm);
    let snack = document.querySelector(".snack-container");
    for (let i = 0; i < debbieData.length; i++) {
        snack.innerHTML +=
        `<div class="snack-card">
            <img src="${debbieData[i].image}" alt="${debbieData[i].name}">
            <div>
                <h3>${debbieData[i].name}</h3>
                <p>${debbieData[i].description}</p>
                <p class="snack-details">${debbieData[i].amount} - ${debbieData[i].packaging}</p>
            </div>
        </div>
        `
    }
}

loadButton.addEventListener("click", populateDB);






