const rentalCars = [
  {
    name: "Toyota RAV4",
    brand: "Toyota",
    type: "SUV",
    rent_price: "$50/day",
    imageUrl: "../images/rav4.jpeg",
  },
  {
    name: "Mercedes C200",
    brand: "Mercedes-Benz",
    type: "Sedan",
    rent_price: "$70/day",
    imageUrl: "../images/MercedesC200.jpeg",
  },
  {
    name: "Ford Mustang",
    brand: "Ford",
    type: "Coupe",
    rent_price: "$90/day",
    imageUrl: "../images/FordMustang.jpeg",
  },
  {
    name: "Honda Civic",
    brand: "Honda",
    type: "Sedan",
    rent_price: "$40/day",
    imageUrl: "../images/HondaCivic.jpeg",
  },
  {
    name: "Chevrolet Tahoe",
    brand: "Chevrolet",
    type: "SUV",
    rent_price: "$80/day",
    imageUrl: "../images/ChevroletTahoe.jpeg",
  },
  {
    name: "BMW X5",
    brand: "BMW",
    type: "SUV",
    rent_price: "$100/day",
    imageUrl: "../images/BMWX5.jpeg",
  },
  {
    name: "Audi A4",
    brand: "Audi",
    type: "Sedan",
    rent_price: "$60/day",
    imageUrl: "../images/audia4.jpeg",
  },
  {
    name: "Jeep Wrangler",
    brand: "Jeep",
    type: "SUV",
    rent_price: "$75/day",
    imageUrl: "../images/jeepwrangler.jpeg",
  },
  {
    name: "Tesla Model 3",
    brand: "Tesla",
    type: "Electric",
    rent_price: "$120/day",
    imageUrl: "../images/model3.jpeg",
  },
  {
    name: "Rivian R1 T",
    brand: "Rivian",
    type: "Electric",
    rent_price: "$120/day",
    imageUrl: "../images/rivian.jpeg",
  },
  {
    name: "Toyota Hilux",
    brand: "Toyota",
    type: "Truck",
    rent_price: "$80/day",
    imageUrl: "../images/hilux.jpeg",
  },
  {
    name: "Nissan Altima",
    brand: "Nissan",
    type: "Sedan",
    rent_price: "$45/day",
    imageUrl: "../images/altima.jpeg",
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
        <img src="${car.imageUrl}" alt="image of ${car.name}" loading="lazy">
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
