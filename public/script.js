const btn = document.querySelector("a.icon");
const menu = document.querySelector(".mobile-menu");

console.log("Hello");

btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});