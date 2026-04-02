document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".animate-item");

  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.12}s`;
  });

});