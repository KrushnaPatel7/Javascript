const form = document.getElementById("idForm");
const body = document.getElementById("idBody");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  const customEvent = new CustomEvent("formsubmitted", {
    detail: formData,
  });

  body.dispatchEvent(customEvent);
});

body.addEventListener("formsubmitted", function (event) {
  console.log("Form submitted!");
  console.log(`Sending email with the following data:
    First Name: ${event.detail.firstName}
    Last Name: ${event.detail.lastName}
    Email: ${event.detail.email}`);
});
