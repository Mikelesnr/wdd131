const navBtn = document.querySelector(".btn-menu");
const nav = document.querySelector(".nav");

document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Set last modified date
  document.getElementById("last-modified").textContent = document.lastModified;

  // Calculate and display windchill factor
  const temperature = 10; // Example temperature in Celsius
  const windSpeed = 5; // Example wind speed in km/h
  const windchill = calculateWindchill(temperature, windSpeed);
  document.getElementById("windchill").textContent += `${windchill} °C`;
});

function calculateWindchill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  ).toFixed(2);
}

// manage mobile nav

navBtn.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.toggle("hide-min");
});
