const filterButtons = document.querySelectorAll(".filtro-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    galleryItems.forEach((item) => {
      const categories = item.dataset.category
        .toLowerCase()
        .split(",")
        .map((c) => c.trim());

      if (filter === "all" || categories.includes(filter)) {
        item.classList.remove("is-hidden", "is-gone");
      } else {
        item.classList.add("is-hidden");

        // después de la animación, se elimina del flujo
        setTimeout(() => {
          item.classList.add("is-gone");
        }, 400);
      }
    });
  });
});
