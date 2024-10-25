const availableCars = [
  "RAV4",
  "Mercedes C200",
  "Ford Mustang",
  "Honda Civic",
  "Chevrolet Tahoe",
  "BMW X5",
  "Audi A4",
  "Jeep Wrangler",
  "Tesla Model 3",
  "Rivian R1 T",
  "Toyota Hilux",
  "Nissan Altima",
];

document.addEventListener("DOMContentLoaded", function () {
  const carSelect = document.getElementById("car");

  availableCars.forEach((car) => {
    const option = document.createElement("option");
    option.value = car;
    option.textContent = car;
    carSelect.appendChild(option);
  });

  const form = document.getElementById("booking-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const bookingData = {
      car: formData.get("car"),
      date: formData.get("date"),
      time: formData.get("time"),
      name: formData.get("name"),
      email: formData.get("email"),
    };
    saveBookingToLocalStorage(bookingData);
  });
});

function saveBookingToLocalStorage(booking) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert("Booking saved successfully!");
}

// Function to retrieve and display bookings (optional)
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function () {
  const searchName = document.getElementById("search-name").value;
  searchBookingsByName(searchName);
});

function saveBookingToLocalStorage(booking) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert("Booking saved successfully!");
}

function searchBookingsByName(name) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  let results = bookings.filter(
    (booking) => booking.name.toLowerCase() === name.toLowerCase()
  );
  displaySearchResults(results);
}

function displaySearchResults(results) {
  const searchResultsDiv = document.getElementById("search-results");
  searchResultsDiv.innerHTML = "";

  if (results.length > 0) {
    let resultsHTML = results
      .map(
        (booking, index) =>
          `<div class="booking-card" data-index="${index}">
        <h3>${booking.car}</h3>
        <p><strong>Date:</strong> ${booking.date}</p>
        <p><strong>Time:</strong> ${booking.time}</p>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <button class="delete-button" onclick="deleteBooking(${index})">Delete</button>
      </div>`
      )
      .join("");
    searchResultsDiv.innerHTML = resultsHTML;
  } else {
    searchResultsDiv.innerHTML = "<p>No bookings found for the given name.</p>";
  }
}

function deleteBooking(index) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.splice(index, 1);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert("Booking deleted successfully!");
  // Refresh the search results after deletion
  const searchName = document.getElementById("search-name").value;
  searchBookingsByName(searchName);
}
