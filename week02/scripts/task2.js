/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

const myname = "alexander";
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = myname;

// Step 3: declare and instantiate a variable to hold the current year

const myyear = 2023;
// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = myyear;

// Step 5: declare and instantiate a variable to hold the name of your picture

const mypicture = "images/myphoto.png";
// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', 'images/myphoto.png');


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const myfavorite = ["ceviche","carapulca","pachamnaca"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = myfavorite;

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFavorite = "causa"

// Step 4: add the variable holding another favorite food to the favorite food array
myfavorite.push(anotherFavorite);

// Step 5: repeat Step 2
document.querySelector("#food").textContent = myfavorite;

// Step 6: remove the first element in the favorite foods array
myfavorite.shift()

// Step 7: repeat Step 2
document.querySelector("#food").textContent = myfavorite;

// Step 8: remove the last element in the favorite foods array
myfavorite.pop()

// Step 7: repeat Step 2
document.querySelector("#food").textContent = myfavorite;


