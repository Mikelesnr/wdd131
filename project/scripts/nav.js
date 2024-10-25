document.addEventListener("DOMContentLoaded", function () {
  // Add navigation dynamically
  const navbarContainer = document.getElementById("nav-container");
  navbarContainer.innerHTML = `
          <nav id="navbar">
                  <ul>
                      <li><a href="../index.html">Home</a></li>
                      <li><a href="listings.html">Car Listings</a></li>
                      <li><a href="booking.html">Booking</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                  </ul>
          </nav>
      `;
});
