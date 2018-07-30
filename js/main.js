
// A function that pulls a key from local storage and parses it, setting it to be used ad a DB for the functions below
function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}
// Grab the body from HTML
const body = document.querySelector("body");
// Grab the first script tag from the body
const script = document.querySelector("script");
// Create a div
const makeContent = document.createElement("div")
// Give that div an id of "main-content"
makeContent.setAttribute("id", "main-content");
// Place that div before the script tag in the body
body.insertBefore(makeContent, script);
// Grab the div from the DOM and set it to this variable
const mainContent = document.querySelector("#main-content");
// Use string literal to add a button
mainContent.innerHTML +=
`<button id="populateDatabase">Load Snacks!</button>`;
// Grab that button from the DOM
const loadButton = document.querySelector("#populateDatabase");
// Add an event listener to run the populateDB function when clicked
loadButton.addEventListener("click", populateDB);

// Function to append user added snacks to the snack cake div
function userAddedSnacks(){
    // Create 6 variables to store the value of each input from the form. They are named in this way so that they may be passed as arguments into a new function below.
    let snackCake = document.querySelector("#snackNameInput").value;
    let name = document.querySelector("#nameInput").value;
    let packaging = document.querySelector("#packagingInput").value;
    let description = document.querySelector("#descriptionInput").value;
    let amount = document.querySelector("#amountInput").value;
    let image = document.querySelector("#imageInput").value;
    
    // Created a new DB variable for the function below that is going to mirror the debbieData function in the card building function below if it is the first time being on the page
    let newDebbieCakes = loadData("littleDebbieSnacks");
   
    // Added conditional statement to check for a new DB, and if it is present in local stroage, then load that DB into the newDebbieCakes variable instead
    if(localStorage.getItem("newLittleDebbieSnacks")){
        newDebbieCakes = loadData("newLittleDebbieSnacks")
    }

    // An extremely similar function to the one in debbiedata.js, only this time it pushed the input values into the newDebbieCakes DB and RETURNS the snackCake so that it may be immediately built and placed with the existing cards and not require a refresh to see.
    function userMadeCakeObject(snackCake, name, packaging, description, amount, image){
        snackCake = {
            name: name,
            packaging: packaging,
            description: description,
            amount: amount,
            image: image
        }
        newDebbieCakes.push(snackCake);
        // A return so that it can be immediately built below
        return snackCake
    };

    // Added conditional to check each input for an empty string and prevent card building if any box is empty. If the inputs are properly filled out, the create a new variable that will equate to the user added snack by calling the function directly above. Grab the snack container and use innerHTML to build the new cake a snack card, and use the new variable to call that data to each part for image, name, and so on.
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

        // After the card is built, set the new DB into local storage. Putting it here allows it to be overwritten with whatever new snack is added by the user each time. The conditionals above  and in the popSnacks function will the load it instead of the initial DB. This allows user added snacks to alway be present whenever they revisit the page!
        setData("newLittleDebbieSnacks", newDebbieCakes)
        
        // Grab the form and remove it. Grab the footer and create a replacement add snacks button with an event listener and insert it above the footer. I chose this route instead of innerHTML because of an issue where the button kept getting added below the footer. The new/old button with then wait for a clock and recall the showForm function.
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

// A function to populate a form for user input
function showForm(){
    console.log("A form will be added here!");

    // Grab the add snacks button that is built in the function below and remove it
    const addSnacksButton = document.querySelector("#add-snacks-button");
    mainContent.removeChild(addSnacksButton);

    // Grab the footer and create a form element, then insert the form above the footer into the main container div
    const footer = document.querySelector("footer");
    const form = document.createElement("form");
    mainContent.insertBefore(form, footer);
    
    // Grab the new form and add 6 inputs, all with ids for grabbing purposes in the function above, also with placeholder text to avoid the neex to create a label for each input. Also add a button to the end for form submission
    const snackForm = document.querySelector("form");
    snackForm.innerHTML +=
        `<input required id="snackNameInput" placeholder="A simple one word name for your snack" type="text">
        <input required id="nameInput" placeholder="Title of Your Snack" type="text">
        <input id="packagingInput" placeholder="Type of Packaging" type="text" required>
        <input id="amountInput" placeholder="How many snacks come in the package?" type="text" required>
        <input id="descriptionInput" placeholder="Describe the snack!" type="text" required>
        <input id="imageInput" placeholder="Copy and Paste a URL to picture of your snacks box!" type="text" required>
        <button id="submit-form">Add Your Snack to the Collection!</button>`
    
    // Grab the new button and add an event listener to call the function above the adds a new snack
    const submitSnackFormBtn = document.querySelector("#submit-form");
    submitSnackFormBtn.addEventListener("click", userAddedSnacks);
}

// The main function, that builds the entire page upon load
function popSnacks(){
    // Load the initial DB from debbiedata.js and store the results in debbieData
    let debbieData = loadData("littleDebbieSnacks");
    // Check for the presence of the other user inuputted DB and if its there, load that into debbieData instead. This way if you leave of refresh the page, your inputted results will build on the page. Otherwise, the first js page over-writes to the initial four snacks onto the DB each time, causing you to lose your inputted snacks :(
    if(localStorage.getItem("newLittleDebbieSnacks")){
        debbieData = loadData("newLittleDebbieSnacks")
    } 

    // Grab the Show Snacks button from the DOM and remove it
    const showSnacks = document.querySelector("#show-snacks")
    mainContent.removeChild(showSnacks);
    
    // Build a header with a logo and h2 into the DOM, the build another div to be a container for a h2 and two videos that are encoded from youtube. Fairly straight-forward copy and paste from youtube, placed into another div for flexing purposes. After that, create another div to place the snack cards into, and a button under-neath to allow a form to be poulated once clicked. Lastly, a simple footer is inserted to round out the page:
    mainContent.innerHTML +=
        `<header>
            <img src="https://vignette.wikia.nocookie.net/peanuts/images/9/96/LittleDebbieLogo.png/revision/latest?cb=20160714075106" alt="Little Debbie Logo">
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
    
    // Grab the new snacks button and store in this variable, then add a click event listener that will call the showForm function to populate the function 
    const addSnacksButton = document.querySelector("#add-snacks-button");
    addSnacksButton.addEventListener("click", showForm);
    
    // Grab the snack card container div from above and store it in the variable so that the cards can be appended into it
    let snack = document.querySelector(".snack-container");
    
    // A forEach loop that will grab each snack object in the data structure and build the card structure below using the data for each object (represented by the argument "item").
    debbieData.forEach(item => {
        snack.innerHTML +=
            `<div class="snack-card">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="snack-details">${item.amount} - ${item.packaging}</p>
                </div>
            </div>`
    });
}







