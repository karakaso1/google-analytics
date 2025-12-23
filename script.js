// Avatar click animation
const avatar = document.querySelector(".avatar");
avatar.addEventListener("click", () => {
  avatar.style.transform = "scale(1.2)";
  setTimeout(() => {
    avatar.style.transform = "scale(1)";
  }, 200);
});

// Link highlighting
const links = document.querySelectorAll(".links a");
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Dark/light mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form validation
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function(e) {
  const email = form.querySelector("input[name='email']").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    e.preventDefault();
    alert("Please enter a valid email address!");
  }
});
