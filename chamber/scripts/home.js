//   TOGGLE BETWEEN GRID AND LIST
const joinButton = document.querySelector("#action-join");
const grid = document.querySelector(".grid");
const cards = document.querySelector(".cards");


const h2_placeholder = document.querySelector("#h2_placeholder");
grid.removeChild(h2_placeholder);
const h2_placeholder_2 = document.querySelector("#h2_placeholder_2");
cards.removeChild(h2_placeholder_2);

joinButton.addEventListener("click", () => {
    window.location.href = "join.html";
});



//   CREATE ELEMENTS BASED ON DATA
const displayMembers = (members) => {
    members.forEach((member) => {

        const title = document.createElement('h3');
        title.textContent = member.name;

        const service = document.createElement('p');
        service.textContent = member.service_type;

        const top = document.createElement('div');
        top.classList.add("top");
        top.append(title, service);


        const level = document.createElement('p');
        level.textContent = member.level.toUpperCase();
        if (member.level == "Gold")
            level.classList.add("gold");
        if (member.level == "Silver")
            level.classList.add("silver");
        
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;

        const left = document.createElement('div');
        left.append(img, level);
        

        const phone_label = document.createElement('p');
        phone_label.textContent = "Phone:";
        const phone = document.createElement('a');
        phone.textContent = member.phone_number;
        phone.href = member.phone_number;

        const website_label = document.createElement('p');
        website_label.textContent = "Website:";
        const website = document.createElement('a');
        website.textContent = member.websiteUrl;
        website.href = member.websiteUrl;

        const contact = document.createElement('div');
        contact.append(phone_label, phone, website_label, website);

        const bottom = document.createElement('div');
        bottom.classList.add("bottom");
        bottom.append(left, contact);


        const section = document.createElement('section');
        section.append(top, bottom);

        cards.append(section);

    });
}



//   CREATE CURRENT WEATHER ELEMENTS
const displayWeather = (weather) => {
    document.getElementById("degrees").textContent = `${Math.ceil(weather.main.temp)}°C`;
    document.getElementById("description").textContent = `${weather.weather[0].main}`;
    document.getElementById("high").textContent = `High: ${Math.ceil(weather.main.temp_max)}°`;
    document.getElementById("low").textContent = `Low: ${Math.ceil(weather.main.temp_min)}°`;
    document.getElementById("humidity").textContent = `Humidity: ${weather.main.humidity}%`;
    document.getElementById("sunrise").textContent = `Sunrise: ${(new Date(weather.sys.sunrise * 1000)).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true})}`;
    document.getElementById("sunset").textContent = `Sunset: ${(new Date(weather.sys.sunset * 1000)).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true})}`;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
}


//   CREATE FORECAST WEATHER ELEMENTS 
const displayForecast = (forecast) => {
    const oneDayAfter = document.createElement('p');
    oneDayAfter.innerHTML = `${forecast.todayPlusOne[0]}: <b>${Math.ceil(forecast.todayPlusOne[1])}°C</b>`;
    const twoDaysAfter = document.createElement('p');
    twoDaysAfter.innerHTML = `${forecast.todayPlusTwo[0]}: <b>${Math.ceil(forecast.todayPlusTwo[1])}°C</b>`;
    const threeDaysAfter = document.createElement('p');
    threeDaysAfter.innerHTML = `${forecast.todayPlusThree[0]}: <b>${Math.ceil(forecast.todayPlusThree[1])}°C</b>`;
    
    document.getElementById("forecast").append(oneDayAfter, twoDaysAfter, threeDaysAfter);
}



//   FETCH MEMBERS DATA
const fetchData = async () => {
    try {
        const response = await fetch("data/members.json"); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the response to be converted to JSON
        
        const filteredMembers = data.filter(item =>
            item.level == "Gold" || item.level == "Silver"
        );

        const shuffledMembers = [...filteredMembers].sort(() => 0.5 - Math.random());

        const firstThree = shuffledMembers.slice(0, 3);
        console.log(firstThree); // Output the first 3 objects
        displayMembers(firstThree);
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};
fetchData();



//   FETCH WEATHER DATA
const fetchWeatherData = async () => {
    try {
        const url = "https://api.openweathermap.org/data/2.5/weather?lat=14.577709&lon=-90.523193&appid=39f1a2d152ab978f8e6bd5b29e3315c8&units=metric";
        const response = await fetch(url); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the response to be converted to JSON
        
        console.log(data); // Output the first 3 objects
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error); // Handle any errors
    }
};
fetchWeatherData();

//   FETCH FORECAST DATA
const fetchForecastData = async () => {
    try {
        const url = "https://api.openweathermap.org/data/2.5/forecast?lat=14.577709&lon=-90.523193&appid=39f1a2d152ab978f8e6bd5b29e3315c8&units=metric";
        const response = await fetch(url); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the response to be converted to JSON
        
        const today = new Date();
        
        today.setDate(today.getDate() + 1);
        const todayPlusOneFiltered = data.list.filter(item =>
            item.dt_txt.startsWith(today.toISOString().split('T')[0])
        );
        const todayPlusOne = [today.toLocaleDateString("en-US", { weekday: "long" }), todayPlusOneFiltered[0].main.temp];
        
        today.setDate(today.getDate() + 1);
        const todayPlusTwoFiltered = data.list.filter(item =>
            item.dt_txt.startsWith(today.toISOString().split('T')[0])
        );
        const todayPlusTwo = [today.toLocaleDateString("en-US", { weekday: "long" }), todayPlusTwoFiltered[0].main.temp];
        
        today.setDate(today.getDate() + 1);
        const todayPlusThreeFiltered = data.list.filter(item =>
            item.dt_txt.startsWith(today.toISOString().split('T')[0])
        );
        const todayPlusThree = [today.toLocaleDateString("en-US", { weekday: "long" }), todayPlusThreeFiltered[0].main.temp];

        console.log({todayPlusOne, todayPlusTwo, todayPlusThree});
        displayForecast({todayPlusOne, todayPlusTwo, todayPlusThree});
    } catch (error) {
        console.error("Error fetching forecast data:", error); // Handle any errors
    }
};
fetchForecastData();
