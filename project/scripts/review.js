// FNAME AND DNAME IN MESSAGE
let fname = window.localStorage.getItem("fname-tt");
let dname = window.localStorage.getItem("dname-tt");

console.log(`review fname: ${fname} - ${dname}`);

const message = document.getElementById("message");
if (fname !== null){
    message.innerHTML = `We'll be getting in contact with you soon, <b>${fname}<b>.`;
}else {
    message.innerHTML = `We'll be getting in contact with you soon.`;
}

if (dname !== null && dname !== ""){
    message.innerHTML += ` We are looking forward to meet you and <b>${dname}<b>.`;
}else {
    message.innerHTML += ` We are looking forward to meet you and your furry friend.`;
}