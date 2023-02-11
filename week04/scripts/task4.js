/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let info = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
info.name = "Alexander Chagua";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
info.photo = "images/placeholder.png";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
info.favoriteFoods = ["ceviche","causa","pachamancha","chaufa"]
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
info.hobbies = ["movies","videogames","series","traveller"]
// Step 6: Add another property named placesLived with a value of an empty array
info.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
let myPlace = {place: "", length: ""};
info.placesLived.push(myPlace);
// Step 8: For each property, add appropriate values as strings
info.placesLived[0].place = "Piura"
info.placesLived[0].length = "2 years"
// Step 9: Add additional objects with the same properties for each place you've lived
let myPlace2 = {place: "", length: ""}
info.placesLived.push(myPlace2);
info.placesLived[1].place = "Tarapoto";
info.placesLived[1].length = "6 years";


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerHTML = info.name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('src', 'images/myphoto.png');
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").addEventListener = info.photo
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favorite = document.getElementById("favorite-foods")
for(let i = 0; i< info.favoriteFoods.length; i++) {
    let listFavorite = document.createElement("li");
    listFavorite.textContent = info.favoriteFoods[i]
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
favorite.append(listFavorite)
} 
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hob = document.getElementById("hobbies")
for(let i = 0; i< info.hobbies.length; i++) {
    let listhob = document.createElement("li");
    listhob.textContent = info.hobbies[i]
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
hob.append(listhob)
} 
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
    info.placesLived.forEach((i) => {
    let placesWorkedPlace = document.createElement('dt');// Creación del elemento
    placesWorkedPlace.textContent = i.place;// Esto es acceder a una propiedad de objeto en nuestra matriz
       
    let placesWorkedLength = document.createElement('dd');
    placesWorkedLength.textContent = i.length;
       

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.querySelector('#places-lived').appendChild(placesWorkedPlace);// Vamos a mostrar esto tomando el ID de nuestro HTML
document.querySelector('#places-lived').appendChild(placesWorkedLength);
})