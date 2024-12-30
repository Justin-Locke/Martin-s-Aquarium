import { database } from './aquariumData.js';

const allFish = database.fish;

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '';
    
    for (const fish of allFish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_species">Species: ${fish.species}</p>
                    <p class="fish_length">Length: ${fish.length}</p>
                    <p class="fish_location">Location: ${fish.location}</p>
                    <p class="fish_diet">Diet: ${fish.diet}</p>
                </div>
            </article>
        `;
    }

    return fishHTML
};

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

    for (const fish of allFish) {
        if (fish.length % 3 === 0) {
            holyFish += `
                <article class="fish">
                    <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
                    <div class="fish_details">
                        <h2 class="fish_name">${fish.name}</h2>
                        <p class="fish_species">Species: ${fish.species}</p>
                        <p class="fish_length">Length: ${fish.length}</p>
                        <p class="fish_location">Location: ${fish.location}</p>
                        <p class="fish_diet">Diet: ${fish.diet}</p>
                    </div>
                </article>
            `;
        }
    }

    return holyFish;
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish

    let soldierFish = ""

    for (const fish of allFish) {
        if (fish.length %3 != 0 && fish.length % 5 === 0) {                
            soldierFish += `
                <article class="fish">
                    <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
                    <div class="fish_details">
                        <h2 class="fish_name">${fish.name}</h2>
                        <p class="fish_species">Species: ${fish.species}</p>
                        <p class="fish_length">Length: ${fish.length}</p>
                        <p class="fish_location">Location: ${fish.location}</p>
                        <p class="fish_diet">Diet: ${fish.diet}</p>
                        </div>                        </article>
            `;
        }
     }

    return soldierFish;
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    
    let regularFish = ""

    for (const fish of allFish) {
        if (fish.length % 3 != 0 && fish.length % 5 != 0) {
            regularFish += `
                <article class="fish">
                    <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
                    <div class="fish_details">
                        <h2 class="fish_name">${fish.name}</h2>
                        <p class="fish_species">Species: ${fish.species}</p>
                        <p class="fish_length">Length: ${fish.length}</p>
                        <p class="fish_location">Location: ${fish.location}</p>
                        <p class="fish_diet">Diet: ${fish.diet}</p>
                        </div>                        </article>
            `;
        }
    }

    return regularFish;
}