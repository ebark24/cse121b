/* Declare and initialize global variables */
const templesElement = document.getElementById("temples"); // Removed # from the selector
let templeList = [];

/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach(temple => {
        let article = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let imageUrl = document.createElement("img");
        imageUrl.setAttribute('src', temple.imageUrl);
        imageUrl.setAttribute('alt', temple.location); // Corrected attribute name to 'alt'
        article.appendChild(templeName);
        article.appendChild(imageUrl);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;
    displayTemples();
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */

const filterTemples = (temples) => {
    reset()
    let filter = document.querySelector("#filtered").value
    switch (filter) {
        case "utah":
            const utahTemples = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
            displayTemples(utahTemples); 
            break;
        case "notutah":
            const nonUtahTemples = temples.filter(temple => temple.location.toLowerCase().indexOf("utah") === -1);
            displayTemples(nonUtahTemples);
            break;
        case "older":
            const olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(templeList)
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)})