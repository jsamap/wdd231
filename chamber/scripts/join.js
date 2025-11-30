// LOAD TIMESTAMP TO HIDDEN ELEMENT
const now = new Date().toISOString(); 
document.getElementById("timestamp").value = now;


// SUBMIT FORM
document.getElementById("submit").onclick = function () {

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const organization = document.getElementById("org-name");
    const timestamp = document.getElementById("timestamp");

    console.log(`[JOIN] Form Parameters: - fname "${fname}" - lname "${lname}" - email "${email}" - phone "${phone}" - organization "${organization}" - timestamp "${timestamp}"`);

    localStorage.setItem("fname-cc", fname.value);
    localStorage.setItem("lname-cc", lname.value);
    localStorage.setItem("email-cc", email.value);
    localStorage.setItem("phone-cc", phone.value);
    localStorage.setItem("organization-cc", organization.value);
    localStorage.setItem("timestamp-cc", timestamp.value);
};


// MODALS