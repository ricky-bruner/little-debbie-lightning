// Begin with an empty array
const debbieCakes = [];

// Build a function to create new "snack-cakes"
function makeCakeObject(snackCake, name, packaging, description, amount, image){
    // I gave an additional argument for snackCake names, so that the function can automatically push the new cake using its name
    snackCake = {
        name: name,
        packaging: packaging,
        description: description,
        amount: amount,
        image: image
    }
    // Here the new cake is pushed to the empty array
    debbieCakes.push(snackCake);
}

// Call the function and pass in the details to make a few snack cakes
makeCakeObject("starCrunch", "Star Crunch", "Individually Wrapped", "A soft, chewy cookie topped with caramel and crispy rice then covered in a layer of fudge .", 12, "https://target.scene7.com/is/image/Target/14996405?wid=250&hei=250&qlt=80&fmt=pjpeg");

makeCakeObject("swissCakeRoll", "Swiss Cake Roll", "Twin Wrapped", "Chocolate cake rolled around a layer of creme filling and drenched with fudge coating.", 12, "https://target.scene7.com/is/image/Target/13217399?wid=250&hei=250&qlt=80&fmt=pjpeg");

makeCakeObject("oatmealCremePie", "Oatmeal Creme Pie", "Individually Wrapped", "Soft oatmeal cookie patties held together by a sweet creme middle", 12, "https://target.scene7.com/is/image/Target/14996401?wid=250&hei=250&qlt=80&fmt=pjpeg");

makeCakeObject("nuttyBars", "Nutty Bars", "Twin Wrapped", "Classic crunchy wafer bars layered with peanut butter and covered in rich chocolate fudge.", 12, "https://target.scene7.com/is/image/Target/13217400?wid=250&hei=250&qlt=80&fmt=pjpeg");


// A function to set a database to Local Storage
function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

// A function with the purpose of setting the DB to LocalStorage, removing the initial button, and adding a new one with an event listener that calls the popSnacks function when clicked
function populateDB(){
    setData("littleDebbieSnacks", debbieCakes);
    mainContent.removeChild(loadButton);
    mainContent.innerHTML += 
    `<button id="show-snacks">Show The Schnacks</button>`;
    const showSnacks = document.querySelector("#show-snacks");
    showSnacks.addEventListener("click", popSnacks);
}

