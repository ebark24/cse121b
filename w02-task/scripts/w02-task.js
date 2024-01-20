/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Eli Barker";
let currentYear = "2024";
let profilrPicture = "images/IMG_0695.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilrPicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)




/* Step 5 - Array */

let favoriteFoods = ["Pasta", "Pizza", "Chicken", "Tacos"]
foodElement.innerHTML = favoriteFoods
let AdditionalFood = "Bread"
favoriteFoods.push(AdditionalFood)
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.shift()
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop()
foodElement.innerHTML += `<br>${favoriteFoods}`
