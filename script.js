const container = document.querySelector(".container");
const containerThanks = document.querySelector(".container-thanks");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".cicle");

submitButton.addEventListener("click", () => {
  containerThanks.classList.remove("hidden");
  container.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
