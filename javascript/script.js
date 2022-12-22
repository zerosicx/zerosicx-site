// General styling for all components

// Add onClick functionality to the hamburger menu
let hamburgerButton = document.getElementById("hamburger");
let hamburger = document.getElementById("hamburger-menu");

hamburger.style.display = "none";

// header and main
let header = document.getElementById("intro-content");
let main = document.getElementById("main-content");
header.style.display = "block";
main.style.display = "block";

hamburgerButton.addEventListener("click", function () {
    // Set display for everything except the hamburger to none
    console.log("hamburger got clicked")
    if (main.style.display === "block") {
        main.style.display = "none";
    } else {
        main.style.display = "block";
    }


    if (header.style.display === "block") {
        header.style.display = "none";
    } else {
        header.style.display = "block";
    }
    

    if (hamburger.style.display === "block") {
      hamburger.style.display = "none";
    } else {
      hamburger.style.display = "block";
    }


})