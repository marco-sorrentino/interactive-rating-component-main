const container = document.querySelector(".container");
const containerThanks = document.querySelector(".container-thanks");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  containerThanks.classList.remove("hidden");
});
