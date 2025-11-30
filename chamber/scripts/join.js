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
const modal = document.querySelector("#modal");
//modal.showModal();

document.getElementById("close").onclick = function () {
    modal.close();
}
document.getElementById("np").onclick = function () {
    const h2 = document.querySelector("#modal h2");
    h2.classList.remove("bronze","silver","gold");
    h2.classList.add("np");
    h2.innerHTML = "&bigstar; Non Profit Membership Level &bigstar;";

    document.querySelector("#modal p").innerHTML = `
    <ul>
        <li>Basic Directory Listing: Organization name and contact info in Chamber’s online directory.</li>
        <li>Event Invitations: Access to free community networking events.</li>
        <li>Newsletter Access: Receive Chamber updates, local business news, and opportunities.</li>
        <li>Advocacy Updates: Stay informed on local policy changes affecting nonprofit.</li>
    <ul>`;

    modal.showModal();
}
document.getElementById("bronze").onclick = function () {
    const h2 = document.querySelector("#modal h2");
    h2.classList.remove("np","silver","gold");
    h2.classList.add("bronze");
    h2.innerHTML = "&bigstar; Bronze Membership Level &bigstar;";

    
    document.querySelector("#modal p").innerHTML = `
    <ul>
        <li>Enhanced Directory Profile: Logo, description, and website link included.</li>
        <li>Networking Events: Discounted admission to Chamber mixers and luncheons.</li>
        <li>Business Workshops: Access to quarterly training sessions on marketing, finance, and operations.</li>
        <li>Social Media Spotlight: Occasional promotion on Chamber’s social channels.</li>
        <li>Ribbon Cutting Ceremonies: Support for new business launches or milestones.</li>
    <ul>`;

    modal.showModal();
}
document.getElementById("silver").onclick = function () {
    const h2 = document.querySelector("#modal h2");
    h2.classList.remove("np","bronze","gold");
    h2.classList.add("silver");
    h2.innerHTML = "&bigstar; Silver Membership Level &bigstar;";
    
    
    document.querySelector("#modal p").innerHTML = `
    <ul>
        <li>Priority Event Access: Early registration for high-demand events.</li>
        <li>Advertising Discounts: Reduced rates for Chamber publications and website ads.</li>
        <li>Committee Participation: Opportunity to join Chamber committees and influence initiatives.</li>
        <li>Business Referrals: Inclusion in referral lists shared with community inquiries.</li>
        <li>Spotlight Features: Quarterly member highlight in newsletters or Chamber blog.</li>
        <li>Job Board Access: Post openings on Chamber’s employment portal.</li>
    <ul>`;

    modal.showModal();
}
document.getElementById("gold").onclick = function () {
    const h2 = document.querySelector("#modal h2");
    h2.classList.remove("np","bronze","silver");
    h2.classList.add("gold");
    h2.innerHTML = "&bigstar; Gold Membership Level &bigstar;";
    
    
    document.querySelector("#modal p").innerHTML = `
    <ul>
        <li>Premium Directory Placement: Top-tier visibility in Chamber directory.</li>
        <li>Unlimited Event Access: Complimentary admission to most Chamber events.</li>
        <li>Exclusive Networking: Invitations to VIP roundtables with business leaders and policymakers.</li>
        <li>Sponsorship Opportunities: Priority access to sponsor Chamber events and programs.</li>
        <li>Advocacy Representation: Direct involvement in Chamber’s lobbying and policy efforts.</li>
        <li>Custom Marketing Support: Personalized promotion campaigns through Chamber channels.</li>
        <li>Leadership Recognition: Recognition as a Gold Partner at events, website, and annual report.</li>
    <ul>`;

    modal.showModal();
}
