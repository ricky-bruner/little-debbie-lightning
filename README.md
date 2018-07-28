# A Little Debbie themed Lightning Exercise!

## Purpose:

Create a datastructure centered around little debbie cakes. The assignment must include a cake making function that results in a cake object being created when the function is envoked, and each result must be pushed to an array that is then loaded to local storage. The load to local storage must be halted until the user clicks a button, and the load should be the result of an Event Listener.

Verify that the load worked, and then populate to the DOM however you wish!

## Reality:

I decided to add several buttons becuase I wanted more practice with Event Listeners and functions. I made a function to loop the storage and make a "cake card" for each sweet I put in my array. Then, I went crazy and decided a user should be able to add their favorite cakes!

## How?

I added another button that loads a form when clicked, and several input fields with ids and placeholders to tell the user very specifically what to input. When the form submit button is clicked, the users informations they entered is then spun up in a very similar manner to the initial cards, the form is removed, and the original button returns for another go around. 

## Issues that came up:

There are numerous issues that came up, from scope all the way to a full on page reload when the button on the form was clicked. I used chrome dev tools and source with a break to figure out exactly where the code was breaking, then referred back to the DOM and other functions to solve each individual crisis. There were so many of these. 

Another big issue was image size. I searched google for images exactly 250px by 250px for the initial cards, and once I got the user loaded info to work, the images were pushing the text outside of the cards. To fix this, I targeted the card images in CSS and set their height to 250px, so no matter what the user loads, the image wont push the text out of the cards. This will lead to some wonky images, but atleast its all contained for now! For best results, find images that are square :)

## Recent Changes:

I had a major breakthrough! I wanted the user to be able to add new snacks via the form, and them show up the next time the user visited the page. Sounds simple, but it was super complex to pull off! I totally reworked the snack adding function to also incorporate adding a new database to local storage. I did this because the original DB is being overwritten on page load due to the assignment parameters. So I made a new array and set it equal to the loaded DB from local storage. Then, the users info is used in a very similar new function for making the cake object that then pushed the new cake object into the new array. That array is then used to set the new DB into local storage.

```js
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
```

After this, I added conditionals to check for the presence of the new DB, and if it is there, it will then use that DB to populate all of the cards! 

```js
let debbieData = loadData("littleDebbieSnacks")
if(localStorage.getItem("newLittleDebbieSnacks")){
    debbieData = loadData("newLittleDebbieSnacks")
} 
```


I also used a conditional to make sure that the empty array is overwritten with the new local storage DB everytime the form is submitted. After hours of trial and error, it worked. It finally worked. I then added a conditional to the input fields that wont let a card generate if any input is empty.

```js
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
}
```

## Future Changes Incoming:

Style, Style, Style. I'll find a consistant theme and make it look snazzy.