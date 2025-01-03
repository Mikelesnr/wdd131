document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu
  const menuToggle = document.getElementById("menu-toggle");
  const navUl = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navUl.classList.toggle("show");
  });

  // Add footer dynamically
  const footer = document.getElementById("footer");
  footer.innerHTML = `
        <p>Address: 3 Alexander Road, Highlands, Harare</p>
        <p>Phone: +263 773 000 000</p>
        <p>Email: <a href="mailto:mikefake@gmail.com">mikefake@gmail.com</a></p>
        <p>© 2024 by <a href="https://www.linkedin.com/in/michael-mwanza-64469227b/" target="_blank">Michael Mwanza</a></p>
    `;
});
