const heading = document.getElementById("heading");
const navLinks = document.querySelectorAll(".nav-link");
const navBtn = document.querySelector(".btn-menu");
const nav = document.querySelector("nav");

let myheading = "Home";
heading.innerHTML = myheading;

// Loop through each link and add an event listener
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    //console.log(`Navigating to ${link.innerHTML}`);
    // Set Heading
    myheading = link.innerHTML;
    heading.innerHTML = myheading;
  });
});

navBtn.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.toggle("hide-min");
});
