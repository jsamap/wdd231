// FNAME AND DNAME IN MESSAGE
const fname = window.localStorage.getItem("fname-cc");
const lname = window.localStorage.getItem("lname-cc");
const email = window.localStorage.getItem("email-cc");
const phone = window.localStorage.getItem("phone-cc");
const organization = window.localStorage.getItem("organization-cc");
const timestamp = window.localStorage.getItem("timestamp-cc");

console.log(`[THANKYOU] Form Parameters: - fname "${fname}" - lname "${lname}" - email "${email}" - phone "${phone}" - organization "${organization}" - timestamp "${timestamp}"`);

const message = document.getElementById("message");
message.innerHTML = `
Hi <b>${fname}</b>! 
<br><br>Thank you for filling the Membership Application form. We look forward to have <b>${organization}</b> as part of our Chamber of Commerce. 
<br><br>The following information has been stored in our database (${timestamp}):
<br><br>
<ul>
    <li>First name: ${fname}</li>
    <li>Last name: ${lname}</li>
    <li>Email: ${email}</li>
    <li>Phone: ${phone}</li>
    <li>Organization: ${organization}</li>
    <li></li>
</ul>
<br>We will contact you soon at the email address <b>${email}</b>.
`;
