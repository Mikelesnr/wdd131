// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

document.getElementById("menu-icon").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
});
