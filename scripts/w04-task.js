/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Eli Barker",
    photo: "https:mountainproject.com/assets/photos/climb/106597315_medium_1494123686.jpg?cache=1701316036",
    favoriteFoods: ["Pasta", "Pizza", "Chicken", "Tacos"],
    hobbies: ["Rock Climbing", "Swimming", "Hiking", "Watching Movies"],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push( {
    place: "Arvada, Colorado",
    length: "18 Years"
} );

myProfile.placesLived.push( {
    place: "Syracuse, New York",
    length: "2 Years"
} );

myProfile.placesLived.push( {
    place: "Rexburg, Idaho",
    length: "2 Years"
} );


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */

document.querySelector("img").setAttribute('src', myProfile.photo);
document.querySelector("img").setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(listItem);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let listItem = document.createElement("li");
    listItem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(listItem);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(location => {
    let place = document.createElement("dt");
    place.textContent = location.place;
    let length = document.createElement("dd")
    length.textContent = location.length
    document.querySelector('#places-lived').appendChild(place);
    document.querySelector('#places-lived').appendChild(length);
});
