const climbingElement = document.getElementById("climbing locations");
let climbingList = [];

const displayClimbs = (climbingList) => {
    climbingList.forEach(climb => {
        let article = document.createElement("article");
        let climbName = document.createElement("h3");
        let climbDifficulty = document.createElement("p");
        climbDifficulty.textContent = `Difficulty: ${climb.difficulty}`;
        let climbDistance = document.createElement("p");
        climbDistance.textContent = `Distance (MI): ${climb.distance}`;
        climbName.textContent = climb.climbName;
        let climbLocation = document.createElement("p");
        climbLocation.textContent = `Location: ${climb.location}`;
        let mountain = document.createElement("p");
        mountain.textContent = `Mountain: ${climb.mountain}`;
        let imageUrl = document.createElement("img");
        imageUrl.setAttribute('src', climb.imageUrl);
        imageUrl.setAttribute('alt', climb.location);
        article.appendChild(climbName);
        article.appendChild(climbLocation);
        article.appendChild(mountain);
        article.appendChild(climbDifficulty);
        article.appendChild(climbDistance);
        article.appendChild(imageUrl);
        climbingElement.appendChild(article);
    });
};

const getClimbs = async () => {
    const response = await fetch("https://run.mocky.io/v3/e9fb28b7-e253-4f19-937c-943b8c47bd82");
    const data = await response.json();
    climbingList = data;
    displayClimbs();
};

const reset = () => {
    climbingElement.innerHTML = '';
};


const filterClimbs = (climbs) => {
    reset();
    let filter = document.querySelector("#filtered").value.toLowerCase();
    let sort = document.querySelector("#sorted").value.toLowerCase();
    let filteredClimbs;
    switch (filter) {
        case "bouldering":
            filteredClimbs = climbs.filter(climb => climb.type.toLowerCase() === "bouldering");
            break;
        case "sport climbing":
            filteredClimbs = climbs.filter(climb => climb.type.toLowerCase() === "sport climb");
            break;
        case "trad climbing":
            filteredClimbs = climbs.filter(climb => climb.type.toLowerCase() === "trad climb");
            break;
        case "all climbs":
            filteredClimbs = climbs;
            break;
        default:
            filteredClimbs = climbs;
            break;
    }
    switch (sort){
        case 'difficulty':
            filteredClimbs.sort((a, b) => 
            parseInt(a.difficulty.slice(2)) - parseInt(b.difficulty.slice(2)));
            break;
        case 'distance':
            filteredClimbs.sort((a, b) => a.distance - b.distance);
            break;
        default:
            break;

    }
    displayClimbs(filteredClimbs);
};

function calcTime() {
    let timeToTravel = Math.round((Number(document.querySelector('#distance').value)/45)*60);
    document.querySelector('#timeToTravel').value = `${timeToTravel} minutes`;
}

getClimbs(climbingList);

document.querySelector("#filtered").addEventListener("change", () => {filterClimbs(climbingList)})
document.querySelector("#sorted").addEventListener("change", () => {filterClimbs(climbingList)})
document.querySelector('#timeCalc').addEventListener('click', calcTime)