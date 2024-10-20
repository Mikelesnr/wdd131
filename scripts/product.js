const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productName");
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});

// Counter for reviews in localStorage
if (localStorage.getItem("reviewCount") === null) {
  localStorage.setItem("reviewCount", 0);
}

document.getElementById("reviewForm").addEventListener("submit", () => {
  let reviewCount = parseInt(localStorage.getItem("reviewCount"), 10);
  localStorage.setItem("reviewCount", reviewCount + 1);
});