import { fishList, mostHolyFish, regularFish, soldierFish } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()
const mostHolyHTML = mostHolyFish()
const soldierFishHTML = soldierFish()
const regularFishHTML = regularFish()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
const fishListHTML = document.getElementById('fishList');

if (fishListHTML) {
    fishListHTML.innerHTML = mostHolyHTML;
    fishListHTML.innerHTML += soldierFishHTML;
    fishListHTML.innerHTML += regularFishHTML;
} else {
    console.error('Could not find element with id "movie-list"');
};

const tipListContainer = document.getElementById('tipList');
tipListContainer.innerHTML = tipHTML;

const locationListContainer = document.getElementById('locationList');
locationListContainer.innerHTML = locationHTML;