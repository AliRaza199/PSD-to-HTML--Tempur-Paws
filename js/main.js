// Navigation Menu
document.getElementById('menuToggle').addEventListener('click', function () {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
});


const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open"); // Toggle the 'open' class on .menu to show/hide it
  hamburgerIcon.style.display = hamburgerIcon.style.display === "none" ? "inline" : "none";
  closeIcon.style.display = closeIcon.style.display === "none" ? "inline" : "none";
});




// Toggle dropdown open/close
document.getElementById('selectedCountryButton').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.toggle('open');
});
// Function to select a country
function selectCountry(countryName, flagSrc) {
    // Update the button with the selected country's flag and name
    document.getElementById('selectedCountry').textContent = countryName;
    document.getElementById('selectedFlag').src = flagSrc;

    // Close the dropdown menu
    document.querySelector('.dropdown').classList.remove('open');
}




// For Small Screen
// Toggle dropdown open/close
document.getElementById('selectedCountryButtons').addEventListener('click', function() {
    document.querySelector('.dropdown-content_first').classList.toggle('open');
});
// Function to select a country
function selectCountrys(country, flagSrc) {
    // Update the button with the selected country's flag and name
    document.getElementById('selectedCountrys').textContent = country;
    document.getElementById('selectedFlags').src = flagSrc;

    // Close the dropdown menu
    document.querySelector('.dropdown-smallScreen').classList.remove('open');
}