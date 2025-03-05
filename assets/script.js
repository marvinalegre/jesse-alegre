document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".tag");
  const items = document.querySelectorAll(".item");

  // Track active filters
  let activeFilters = [];

  tags.forEach((tag) => {
    tag.addEventListener("click", function () {
      const filter = tag.getAttribute("data-filter");

      // Toggle the active class for styling
      tag.classList.toggle("active");

      // Add or remove the tag from activeFilters array
      if (activeFilters.includes(filter)) {
        // If the tag is already active, remove it
        activeFilters = activeFilters.filter((item) => item !== filter);
      } else {
        // If the tag is not active, add it
        activeFilters.push(filter);
      }

      // Filter the items based on active tags
      filterItems();
    });
  });

  function filterItems() {
    items.forEach((item) => {
      const tags = item.getAttribute("data-tags").split(",");

      // Check if all active filters are present in the item's tags
      if (
        activeFilters.length === 0 ||
        activeFilters.every((filter) => tags.includes(filter))
      ) {
        item.style.display = "block"; // Show the item
      } else {
        item.style.display = "none"; // Hide the item
      }
    });
  }
});
