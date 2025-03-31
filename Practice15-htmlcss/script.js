function showCityInfo(dropdown) {
  const city = dropdown.value;

  // Hide all city containers
  const cityContainers = document.querySelectorAll(".city-container");
  cityContainers.forEach((container) => {
    container.style.display = "none";
  });

  // Show selected city container
  if (city) {
    document.querySelector(`.${city}-style`).style.display = "block";
  }
}
