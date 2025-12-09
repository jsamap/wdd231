// TRIPS
import {tripsArray} from '../data/trips-array.mjs';
const tripsArrayFiltered = tripsArray.slice(0,3);

const container = document.querySelector(".container");

buildCards(tripsArrayFiltered);

function buildCards(tripsArray){
	tripsArray.forEach(trip => {
		const h3 = document.createElement('h3');
		h3.textContent = trip.name;

		const p = document.createElement('p');
		p.textContent = trip.description;
		p.classList.add("desc");

		const img = document.createElement('img');
		img.src = trip.imageUrl;
		img.alt = trip.name;
		img.loading = "lazy";
		const divImg = document.createElement('div');
		divImg.classList.add("card-child");
		divImg.appendChild(img);

		const btn = document.createElement('button');
		btn.textContent = "SEE MORE";
		btn.classList.add("more-btn");
		btn.onclick = function () {
			showTrip(trip);
		};

		const divBtn = document.createElement('div');
		divBtn.classList.add("card-child");
		divBtn.appendChild(btn);

		const div = document.createElement('div');
		div.classList.add("container-div")
		div.append(h3, p, divImg, divBtn);

		container.appendChild(div);
	});
}

// BUTTONS
document.getElementById("join").onclick = function () {
	location.href = "contact";
};

// MODALS
const modal = document.querySelector("#modal");

document.getElementById("close").onclick = function () {
    modal.close();
}
document.querySelector("#modal-button").onclick = function () {
	location.href = "trips";
};

function showTrip(trip){
	document.querySelector("#modal-title").textContent = trip.name;
	modal.style.background = `url("${trip.imageUrl}") center / cover no-repeat`;
	document.querySelector("#modal-description").textContent = trip.description;
	document.querySelector("#modal-date-location").textContent = `${trip.date} | ${trip.location}`;
	document.querySelector("#modal-features").textContent = trip.features;
	modal.showModal();
}