//   TOGGLE BETWEEN GRID AND LIST
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});




//   CREATE ELEMENTS BASED ON DATA
const displayMembers = (members) => {
    members.forEach((member) => {

        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;

        const title = document.createElement('h3');
        title.textContent = member.name;

        const service = document.createElement('p');
        service.textContent = member.service_type;

        const phone = document.createElement('a');
        phone.textContent = member.phone_number;
        phone.href = `tel:${member.phone_number}`;

        const website = document.createElement('a');
        website.textContent = member.websiteUrl;
        website.href = member.websiteUrl;

        const section = document.createElement('section');
        section.append(img, title, service, phone, website);

        display.append(section);

    });
}
function buildCards(members) {
    members.forEach(member => {



    });
}



//   FETCH MEMBERS DATA
const fetchData = async () => {
    try {
        const response = await fetch("data/members.json"); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the response to be converted to JSON
        console.log(data); // Output the fetched data
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};
fetchData();