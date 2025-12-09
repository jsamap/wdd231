// TRIPS
const container = document.querySelector(".container");

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

//   FETCH MEMBERS DATA
const fetchData = async () => {
    try {
        const response = await fetch("data/trips.json"); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the response to be converted to JSON
        const filteredData = data.slice(0,3);
		console.log(filteredData); // Output the fetched data

		try{
	        buildCards(filteredData);
		} catch (errorCards) {
			console.error("Error building cards:", errorCards)
		}
		
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};
fetchData();

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