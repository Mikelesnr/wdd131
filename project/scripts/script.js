document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Validate form inputs
    // Update available cars based on user selection
  });

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://mockapi.io/reviews")
    .then((response) => response.json())
    .then((data) => {
      const reviewsContainer = document.getElementById("reviews-container");
      data.forEach((review) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `<p>${review.text}</p><p>Rating: ${review.rating}</p>`;
        reviewsContainer.appendChild(reviewElement);
      });
    });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Handle form submission
  });
