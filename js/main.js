function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;

}
let debbieData = loadData("littleDebbieSnacks")
if(localStorage.getItem("newLittleDebbieSnacks")){
    debbieData = loadData("newLittleDebbieSnacks")
} 

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
    let snackCake = document.querySelector("#snackNameInput").value;
    let name = document.querySelector("#nameInput").value;
    let packaging = document.querySelector("#packagingInput").value;
    let description = document.querySelector("#descriptionInput").value;
    let amount = document.querySelector("#amountInput").value;
    let image = document.querySelector("#imageInput").value;
    let newDebbieCakes = loadData("littleDebbieSnacks");
    if(localStorage.getItem("newLittleDebbieSnacks")){
        newDebbieCakes = loadData("newLittleDebbieSnacks")
    } 
    function userMadeCakeObject(snackCake, name, packaging, description, amount, image){
        snackCake = {
            name: name,
            packaging: packaging,
            description: description,
            amount: amount,
            image: image
        }
        newDebbieCakes.push(snackCake);
        return snackCake
    };
    if(snackCake === "" || name === "" || packaging === "" || description === "" || amount === "" || image === ""){
        console.log("does this work?");
    } else {
        let newSnack = userMadeCakeObject(snackCake, name, packaging, description, amount, image);
        console.log(newDebbieCakes);
        const snackContainer = document.querySelector(".snack-container");
        snackContainer.innerHTML +=
        `<div class="snack-card">
            <img src="${newSnack.image}" alt="${newSnack.name}">
            <div>
                <h3>${newSnack.name}</h3>
                <p>${newSnack.description}</p>
                <p class="snack-details">${newSnack.amount} - ${newSnack.packaging}</p>
            </div>
        </div>`
        setData("newLittleDebbieSnacks", newDebbieCakes)
        let form = document.querySelector("form");
        mainContent.removeChild(form);
        let footer = document.querySelector("footer");
        const replaceButton = document.createElement("button");
        replaceButton.setAttribute("id", "add-snacks-button");
        replaceButton.textContent = "Add More Snacks?";
        mainContent.insertBefore(replaceButton, footer);
        const addSnacksButton = document.querySelector("#add-snacks-button");
        addSnacksButton.addEventListener("click", showForm);
    }
}

function showForm(){
    console.log("A form will be added here!");
    const addSnacksButton = document.querySelector("#add-snacks-button");
    mainContent.removeChild(addSnacksButton);
    const footer = document.querySelector("footer");
    const form = document.createElement("form");
    mainContent.insertBefore(form, footer);
    const snackForm = document.querySelector("form");
    snackForm.innerHTML +=
        `<input required id="snackNameInput" placeholder="A simple one word name for your snack" type="text">
        <input required id="nameInput" placeholder="Title of Your Snack" type="text">
        <input id="packagingInput" placeholder="Type of Packaging" type="text" required>
        <input id="amountInput" placeholder="How many snacks come in the package?" type="text" required>
        <input id="descriptionInput" placeholder="Describe the snack!" type="text" required>
        <input id="imageInput" placeholder="Copy and Paste a URL to picture of your snacks box!" type="text" required>
        <button id="submit-form">Add Your Snack to the Collection!</button>`
    const submitSnackFormBtn = document.querySelector("#submit-form");
    submitSnackFormBtn.addEventListener("click", userAddedSnacks);
}

function popSnacks(){
    const showSnacks = document.querySelector("#show-snacks")
    mainContent.removeChild(showSnacks);
    mainContent.innerHTML +=
        `<header>
            <img src="https://www.littledebbie.com/images/template/logo-home.png" alt="Little Debbie Logo">
            <h2>SCHNAAAAAAKS!</h2>
        </header>
        <div class="snack-girl">
            <h2>Words From Our Sponsors:</h2>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/L52dVwMJTEc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hu6eekDEiTE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div class="snack-container"></div>
        <button id="add-snacks-button">Add More Snacks?</button>
        <footer>
            <p><small>&copy; Ricky Bruner</small></p>
            <div>
                <a href="https://github.com/ricky-bruner" target="_blank">My GitHub Profile</a>
                <a href="https://github.com/ricky-bruner/little-debbie-lightning" target="_blank">This Repo!</a>
                <a href="http://starlogs.net/#ricky-bruner/little-debbie-lightning" target="_blank">Something Awesome!</a>
            </div>
        </footer>`;
    const addSnacksButton = document.querySelector("#add-snacks-button");
    addSnacksButton.addEventListener("click", showForm);
    let snack = document.querySelector(".snack-container");
    debbieData.forEach(index => {
        snack.innerHTML +=
            `<div class="snack-card">
                <img src="${index.image}" alt="${index.name}">
                <div>
                    <h3>${index.name}</h3>
                    <p>${index.description}</p>
                    <p class="snack-details">${index.amount} - ${index.packaging}</p>
                </div>
            </div>`
    });
}

loadButton.addEventListener("click", populateDB);






