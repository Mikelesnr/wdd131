async function fetchReviews() {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    const reviewsContainer = document.getElementById("reviews");
    let currentIndex = 0;

    function displayReviews() {
      reviewsContainer.innerHTML = "";
      data.data.forEach((user) => {
        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");

        reviewDiv.innerHTML = `
                    <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
                    <h3>${user.first_name} ${user.last_name}</h3>
                    <p>${user.email}</p>
                    <p>"Great service! Highly recommend."</p>
                `;

        reviewsContainer.appendChild(reviewDiv);
      });
    }

    function scrollReviews(direction) {
      const reviews = document.querySelectorAll(".review");
      const totalReviews = reviews.length;

      if (direction === "next") {
        currentIndex = (currentIndex + 1) % totalReviews;
      } else if (direction === "prev") {
        currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
      }

      reviewsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
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
