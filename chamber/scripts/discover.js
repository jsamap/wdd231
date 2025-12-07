import {places} from '../data/members.mjs';

//   CREATE ELEMENTS BASED ON DATA
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