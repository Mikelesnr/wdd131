async function fetchReviews() {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    const reviewsContainer = document.getElementById("reviews");
    let currentIndex = 0;
    const serviceComments = [
      "Excellent service! The car was clean and the staff were very friendly. Will definitely rent again.",
      "The booking process was smooth, but the car had a few scratches. Overall, a decent experience.",
      "Great value for money. The car was in excellent condition and the pick-up/drop-off process was quick.",
      "Had an issue with the GPS system, but customer service was very helpful and resolved it quickly.",
      "The car I reserved was not available, but they upgraded me to a better model at no extra cost. Very satisfied!",
      "Long wait time at the counter, but the car was in good condition. Could improve on the service speed.",
      "Fantastic experience! The staff went above and beyond to ensure I had a great rental experience.",
      "The car was not very clean and had a strange smell. Not the best experience.",
      "Quick and easy process. The car was in great shape and the price was reasonable.",
      "Had a flat tire during the rental period, but roadside assistance was prompt and efficient.",
    ];

    function displayReviews() {
      reviewsContainer.innerHTML = "";
      data.data.forEach((user, index) => {
        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");
        if (index !== currentIndex) {
          reviewDiv.classList.add("hidden");
        }

        reviewDiv.innerHTML = `
          <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
          <h3>${user.first_name} ${user.last_name}</h3>
          <p>${user.email}</p>
          <p>${serviceComments[user.id]}</p>
        `;

        reviewsContainer.appendChild(reviewDiv);
      });
    }

    function scrollReviews(direction) {
      const reviews = document.querySelectorAll(".review");
      const totalReviews = reviews.length;

      reviews[currentIndex].classList.add("hidden");

      if (direction === "next") {
        currentIndex = (currentIndex + 1) % totalReviews;
      } else if (direction === "prev") {
        currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
      }

      reviews[currentIndex].classList.remove("hidden");
    }

    displayReviews();

    document
      .getElementById("next")
      .addEventListener("click", () => scrollReviews("next"));
    document
      .getElementById("prev")
      .addEventListener("click", () => scrollReviews("prev"));
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}

fetchReviews();
