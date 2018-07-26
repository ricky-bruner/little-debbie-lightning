# A Little Debbie themed Lightning Exercise!

##Purpose:

Create a datastructure centered around little debbie cakes. The assignment must include a cake making function that results in a cake object being created when the function is envoked, and each result must be pushed to an array that is then loaded to local storage. The load to local storage must be halted until the user clicks a button, and the load should be the result of an Event Listener.

Verify that the load worked, and then populate to the DOM however you wish!

##Reality:
I decided to add several buttons becuase I wanted more practice with Event Listeners and functions. I made a function to loop the storage and make a "cake card" for each sweet I put in my array. Then, I went crazy and decided a user should be able to add their favorite cakes!

##How?
I added another button that loads a form when clicked, and several input fields with ids and placeholders to tell the user very specifically what to input. When the form submit button is clicked, the users informations they entered is then spun up in a very similar manner to the initial cards, the form is removed, and the original button returns for another go around. 

##Issues that came up:
There are numerous issues that came up, from scope all the way to a full on page reload when the button on the form was clicked. I used chrome dev tools and source with a break to figure out exactly where the code was breaking, then referred back to the DOM and other functions to solve each individual crisis. There were so many of these. 

Another big issue was image size. I searched google for images exactly 250px by 250px for the initial cards, and once I got the user loaded info to work, the images were pushing the text outside of the cards. To fix this, I targed the card images in CSS and set their height to 250px, so no matter what the user loads, the image wont push the text out of the cards. This will lead to some wonky images, but atleast its all contained for now! For best results, find images that are square :)

##Future Changes Incoming:
Style, Style, Style. I'll find a consistant theme and make it look snazzy.