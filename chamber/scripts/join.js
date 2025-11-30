// SUBMIT FORM
document.getElementById("submit").onclick = function () {

    const fname = document.getElementById("fname");
    const email = document.getElementById("email");
    const organization = document.getElementById("org-name");

    console.log(`Form Parameters: - fname "${fname}" - email "${email}" - organization "${organization}"`);

    localStorage.setItem("fname-cc", fname.value);
    localStorage.setItem("email-cc", email.value);
    localStorage.setItem("organization-cc", organization.value);
};


// MODALS