// FNAME AND DNAME IN MESSAGE
const fname = window.localStorage.getItem("fname-cc");
const email = window.localStorage.getItem("email-cc");
const organization = window.localStorage.getItem("organization-cc");

console.log(`Form Parameters: - fname "${fname}" - email "${email}" - organization "${organization}"`);

const message = document.getElementById("message");
message.innerHTML = `Hi <b>${fname}</b>! <br><br>Thank you for filling the Membership Application form. We look forward to have <b>${organization}</b> as part of our Chamber of Commerce. <br><br>We will contact with you soon at the email address <b>${email}</b>.`;
