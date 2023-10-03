/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Jarom Mariscal",
    photo: "images/me.jpg",
    favoriteFoods: [
        "Pizza",
        "Mole",
        "Hot dogs",
        "Pozole",
        "Tacos"
    ],
    hobbies: [
        "Playing Volleyball",
        "Reading Books",
        "Draw pictures",
        "Write stories"
    ],
    placeLived: []

};

/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push({
    place: "Merida, Yucatan",
    length: '2 years'
});
myProfile.placeLived.push({
    place: "Puebla,Puebla",
    length: "18 months"
});
myProfile.placeLived.push({
    place: "Sabinas Hidalgo, Nuevo Leon",
    length: "2 years"
});


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", `image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let foodElement = document.createElement("li");
    foodElement.textContent = food;
    document.getElementById("favorite-foods").appendChild(foodElement);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let hobbyElement = document.createElement("li");
    hobbyElement.textContent = hobby;
    document.getElementById("hobbies").appendChild(hobbyElement);
});

/* Places Lived DataList */
myProfile.placeLived.forEach(place => {
    let placeElement = document.createElement("dt");
    let lengthElement = document.createElement("dd");
    placeElement.textContent = place.place;
    lengthElement.textContent = place.length;
    document.getElementById("places-lived").appendChild(placeElement);
    document.getElementById("places-lived").appendChild(lengthElement);
});

