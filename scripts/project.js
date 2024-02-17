const climbingEmelemt = document.getElementById("climbing locations");
let climbingList = [];

const displayClimbs = (climbingList) => {
    climbingList.forEach(climb => {
        let article = document.createElement("article");
        let climbName = document.createElement("h3");
        climbName.textContent = climb.climbName;
        let imageUrl = document.createElement("img");
        imageUrl.setAttribute('src', climb.imageUrl);
        imageUrl.setAttribute('alt', temple.location);
        article.appendChild(climbName);
        article.appendChild(imageUrl);
        climbingEmelemt.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getClimbs = async () => {
    const response = await fetch("https://ebark24.github.io/cse121b/climbData.html");
    const data = await response.json();
    climbingList = data;
    displayClimbs();
};

/* reset Function */
const reset = () => {
    climbingEmelemt.innerHTML = '';
};

/* filter the types of climbs */

const filterClimbs = (climbs) => {
    reset()
    let filter = document.querySelector("#filtered").value
    switch (filter) {
        case "Sport Climbing":
            let sportClimbs = climbs.filter(climb => climb.type.toLowerCase().includes("Sport Climb"));
            displayTemples(sportClimbs); 
            break;
        case "Bouldering":
            let BoulderingClimbs = climbs.filter(climb => climb.type.toLowerCase().includes("Bouldering"));
            displayTemples(BoulderingClimbs); 
            break;
        case "Trad Climbing":
            let TradClimbs = climbs.filter(climb => climb.type.toLowerCase().includes("Trad Climb"));
            displayTemples(TradClimbs); 
            break;
        case "all climbs":
            displayTemples(climbingList)
            break;
    }
}

getClimbs();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterClimbs(climbingList)})