const rentalCars = [
  {
    name: "Toyota RAV4",
    brand: "Toyota",
    type: "SUV",
    rent_price: "$50/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Mercedes C200",
    brand: "Mercedes-Benz",
    type: "Sedan",
    rent_price: "$70/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Ford Mustang",
    brand: "Ford",
    type: "Coupe",
    rent_price: "$90/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Honda Civic",
    brand: "Honda",
    type: "Sedan",
    rent_price: "$40/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Chevrolet Tahoe",
    brand: "Chevrolet",
    type: "SUV",
    rent_price: "$80/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "BMW X5",
    brand: "BMW",
    type: "SUV",
    rent_price: "$100/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Audi A4",
    brand: "Audi",
    type: "Sedan",
    rent_price: "$60/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jeep Wrangler",
    brand: "Jeep",
    type: "SUV",
    rent_price: "$75/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Tesla Model 3",
    brand: "Tesla",
    type: "Electric",
    rent_price: "$120/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Rivian R1 T",
    brand: "Rivian",
    type: "Electric",
    rent_price: "$120/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Toyota Hilux",
    brand: "Toyota",
    type: "Truck",
    rent_price: "$80/day",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Nissan Altima",
    brand: "Nissan",
    type: "Sedan",
    rent_price: "$45/day",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const gallery = document.querySelector(".car-gallery");

function fillGallery(cars) {
  const galleryHTML = cars
    .map(
      (car) => `
      <figure>
        <figcaption>
          <h3>${car.name}</h3>
          <p><span class="span-title">Brand : </span>${car.brand}</p>
          <p><span class="span-title">Type : </span>${car.type}</p>
          <p><span class="span-title">Price : </span>${car.rent_price}</p>
        </figcaption>
        <img src="${car.imageUrl}" alt="image of ${car.name}">
      </figure>
    `
    )
    .join("");

  gallery.innerHTML = galleryHTML;
}

function filter(filter) {
  if (filter === "") {
    fillGallery(rentalCars);
  } else {
    let filteredCars = rentalCars.filter((car) => car.type === filter);

    fillGallery(filteredCars);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const filters = document.getElementById("filters");
  const carTypes = ["All", "SUV", "Sedan", "Coupe", "Electric", "Truck"];

  const filterButtons = carTypes
    .map(
      (type) => `
        <button class="filter-btn" onclick="filter('${
          type === "All" ? "" : type
        }')">${type}</button>
      `
    )
    .join("");

  filters.innerHTML = filterButtons;

  // Initial load
  fillGallery(rentalCars);
});
