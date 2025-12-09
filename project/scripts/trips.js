// TRIPS
import {trips} from '../data/trips.mjs';

const container = document.querySelector(".container");

buildCards(trips);

function buildCards(tripsArray){
	tripsArray.forEach(trip => {
		const h3 = document.createElement('h3');
		h3.textContent = trip.name;

		const thLocation = document.createElement('th');
		thLocation.textContent = "Location:";
		const tdLocation = document.createElement('td');
		tdLocation.textContent = trip.location;
		const trLocation = document.createElement('tr');
		trLocation.append(thLocation,tdLocation);
		
		const thDate = document.createElement('th');
		thDate.textContent = "Date:";
		const tdDate = document.createElement('td');
		tdDate.textContent = trip.date;
		const trDate = document.createElement('tr');
		trDate.append(thDate,tdDate);
		
		const thFeatures = document.createElement('th');
		thFeatures.textContent = "Features:";
		const tdFeatures = document.createElement('td');
		tdFeatures.textContent = trip.features;
		const trFeatures = document.createElement('tr');
		trFeatures.append(thFeatures,tdFeatures);

		const table = document.createElement('table');
		table.append(trLocation, trDate, trFeatures)

		const img = document.createElement('img');
		img.src = trip.imageUrl;
		img.alt = trip.name;
		img.loading = "lazy";
		
		const div = document.createElement('div');
		div.append(h3, table, img);

		container.appendChild(div);
	});
}