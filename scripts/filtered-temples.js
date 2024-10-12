const heading = document.getElementById("heading");
const navLinks = document.querySelectorAll(".nav-link");
const navBtn = document.querySelector(".btn-menu");
const nav = document.querySelector("nav");
const gallery = document.querySelector(".gallery-sub");
const home = document.querySelector("#home");
const old = document.querySelector("#old");
const newer = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    year: 2005,
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    year: 1888,
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    year: 2015,
    area: 96630,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-11087-thumb.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    year: 2020,
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    year: 1974,
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    year: 1986,
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    year: 1983,
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    year: 2017,
    area: 44175,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-8877-thumb.jpg",
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19-21",
    year: 1999,
    area: 45800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-25171-thumb.jpg",
  },
  {
    templeName: "Frankfurt Germany",
    location: "Frankfurt, Germany",
    dedicated: "1987, August, 28-30",
    year: 1987,
    area: 32895,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-6613-thumb.jpg",
  },
];

let myheading = "Home";
heading.innerHTML = myheading;

// Loop through each link and add an event listener
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    //console.log(`Navigating to ${link.innerHTML}`);
    // Set Heading
    myheading = link.innerHTML;
    heading.innerHTML = myheading;

    // Remove "active" class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add "active" class to the clicked link
    link.classList.add("active");
  });
});

navBtn.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.toggle("hide-min");
});

function fillGallery(temples) {
  const galleryHTML = temples
    .map(
      (temple) => `
    <figure>
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><span class="span-title">LOCATION : </span>${temple.location}</p>
        <p><span class="span-title">DEDICATION : </span>${temple.dedicated}</p>
        <p><span class="span-title">SIZE : </span>${temple.area} sq ft</p>
      </figcaption>
      <img src="${temple.imageUrl}" alt="A beautiful temple in ${temple.location}">
    </figure>
  `
    )
    .join("");

  gallery.innerHTML = galleryHTML;
}

function filter(filter) {
  let filteredTemples = [];
  switch (filter) {
    case "old": // if (filter === 'old')
      filteredTemples = temples.filter((temple) => temple.year < 1900);
      break;

    case "new": // if (filter === 'new')
      filteredTemples = temples.filter((temple) => temple.year > 2000);
      break;

    case "large": // if (filter === 'large')
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;

    default:
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;
  }

  fillGallery(filteredTemples);
}

old.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior
  //console.log(`Navigating to ${link.innerHTML}`);
  filter("old");
});

newer.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior
  //console.log(`Navigating to ${link.innerHTML}`);
  filter("new");
});

large.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior
  //console.log(`Navigating to ${link.innerHTML}`);
  filter("large");
});

small.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior
  //console.log(`Navigating to ${link.innerHTML}`);
  filter("small");
});

home.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior
  //console.log(`Navigating to ${link.innerHTML}`);
  fillGallery(temples);
});
// Call the function to fill the gallery
fillGallery(temples);
