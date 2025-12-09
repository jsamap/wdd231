// CLICK EVENT
document.getElementById("send").onclick = function () {

    const fname = document.getElementById("fname");
    const dname = document.getElementById("dname");

    console.log(`review fname: ${fname} - ${dname}`);

    localStorage.setItem("fname-tt", fname.value);
    localStorage.setItem("dname-tt", dname.value);
};
