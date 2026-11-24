const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.querySelectorAll("[data-cat]").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#cat").value = link.dataset.cat;
  });
});

document.querySelector("#adoption-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const cat = document.querySelector("#cat").value;
  document.querySelector("#form-message").textContent =
    `Obrigado, ${name}! Seu interesse em conhecer ${cat} foi registrado nesta demonstração.`;
  event.target.reset();
});
