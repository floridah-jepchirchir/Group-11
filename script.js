// js/script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });
  
  // js/form-validation.js
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const preview = document.getElementById("form-preview");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !message) {
        preview.innerHTML = "<p style='color:red;'>Please fill in all fields.</p>";
        return;
      }
  
      const previewHTML = `
        <h3>Preview:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
  
      preview.innerHTML = previewHTML;
    });
  });
  