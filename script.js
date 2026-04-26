const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    const name = document.querySelector('input[name="name"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();

    if (name.length < 3) {
      alert("Please enter a valid name");
      e.preventDefault();
    }

    if (phone.length < 10) {
      alert("Please enter a valid phone number");
      e.preventDefault();
    }
  });
}