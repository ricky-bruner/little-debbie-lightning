
function makeCakeObject(name, packaging, description, amount, image){
    const snackCake = {
        name: name,
        packaging: packaging,
        description: description,
        amount: amount,
        image: image
    }
    return snackCake 
}


const starCrunch = makeCakeObject("Star Crunch", "Individually Wrapped", "A soft, chewy cookie topped with caramel and crispy rice then covered in a layer of fudge .", 12, "../images/starcrunch.jpg");

const swissCakeRoll = makeCakeObject("Swiss Cake Roll", "Twin Wrapped", "Chocolate cake rolled around a layer of creme filling and drenched with fudge coating.", 12, "../images/swisscakeroll.jpg");

const oatmealCremePie = makeCakeObject("Oatmeal Creme Pie", "Individually Wrapped", "Soft oatmeal cookie patties held together by a sweet creme middle", 12, "../images/oatmealcremepie.jpg");

const nuttyBar = makeCakeObject("Nutty Bars", "Twin Wrapped", "Classic crunchy wafer bars layered with peanut butter and covered in rich chocolate fudge.", 12, "../images/nuttybar.jpg");

const debbieCakes = [];
debbieCakes.push(starCrunch, swissCakeRoll, oatmealCremePie, nuttyBar);

function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

function populateDB(){
    setData("Little Debbie Snacks", debbieCakes);
    mainContent.removeChild(loadButton);
    mainContent.innerHTML += 
    `<button id="show-snacks">Show Teh Schnacks</button>`
    const showSnacks = document.querySelector("#show-snacks");
    showSnacks.addEventListener("click", popSnacks)
}

// function addMoreSnacks(){
//     name = 
// }
