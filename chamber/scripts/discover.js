//   CREATE ELEMENTS BASED ON DATA
import {places} from '../data/members.mjs';

const displayPlaces = (place) => {
    places.forEach((place) => {

        const img = document.createElement('img');
        img.src = place.photo_url;
        img.alt = place.name;

        const name = document.createElement('h2');
        name.textContent = place.name;

        const description = document.createElement('p');
        description.textContent = place.description;

        const address = document.createElement('address');
        address.textContent = place.websiteUrl;

        const placeContainer = document.createElement('div');
        placeContainer.append(img, name, description, address);

        const container = document.getElementById('allplaces');
        container.append(placeContainer);

    });
}
displayPlaces();

// SET MESSAGE FOR LAST VISIT
const lastVisitElement = document.querySelector('#lastVisit p');
const lastVisit = window.localStorage.getItem("lastvisit-cc");
const today = new Date();

if (lastVisit == null) {
    lastVisitElement.textContent = 'Welcome! Let us know if you have any questions.';
    localStorage.setItem("lastvisit-cc", today);
} else {
    const lastVisitDate = new Date(lastVisit);
    
    const daysDiff = Math.floor((today - lastVisitDate) / (1000 * 60 * 60 * 24));
    if (daysDiff < 1) {
        lastVisitElement.textContent = 'Back so soon! Awesome!';
    } else {
        if (daysDiff == 1) {
            lastVisitElement.textContent = `You last visited ${daysDiff} day ago.`;
        } else {
            lastVisitElement.textContent = `You last visited ${daysDiff} days ago.`;
        }
    }
}


// LAST VISIT MODAL - OPEN / CLOSE
const visitContainer = document.getElementById("lastVisit");

document.getElementById("visitClose").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("main").removeChild(visitContainer);    
});
