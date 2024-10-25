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
});
