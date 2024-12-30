import { database } from "./aquariumData.js";

const locations = database.locations;

export const locationList = () => {
    let locationsHTML = '<article class="locations">'

    locations.forEach(location => {
        locationsHTML += `
            <section class="location">
                <p>${location.name}</p>
                <p>${location.country}</p>
                <p>${location.description}</p>
            </section>
        `;
    });

    locationsHTML += '</article>'

    return locationsHTML;
}