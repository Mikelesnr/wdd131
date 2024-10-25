document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("ntr-It2D3hMbyKngJ"); // my public key

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_mb5gexk", "template_6mx9j5l", this).then(
        function () {
          alert("SUCCESS!");
        },
        function (error) {
          alert("FAILED...", error);
        }
      );
    });
});
