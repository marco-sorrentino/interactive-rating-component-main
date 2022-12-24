const container = document.querySelector(".container");
const containerThanks = document.querySelector(".container-thanks");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".cicle");
const returnback = document.querySelector(".return");

submitButton.addEventListener("click", () => {
  containerThanks.classList.remove("hidden");
  container.style.display = "none";
});

returnback.addEventListener("click", () => {
  containerThanks.classList.add("hidden");
  container.style.display = "block";
});

rates.forEach((conta) => {
  conta.addEventListener("click", () => {
    rating.innerText = conta.innerText;
  });
});
