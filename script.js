function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Scroll animations
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

// Form success animation
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("success");
  const btn = form.querySelector("button");
  btn.textContent = "✅ Sent!";
  setTimeout(() => {
    btn.textContent = "Send";
    form.classList.remove("success");
    form.reset();
  }, 2000);
});
