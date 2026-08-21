const clickButton = document.getElementById("clickButton");
const message = document.getElementById("message");

clickButton.addEventListener("click", function () {
  message.textContent = "Hello! GitHub is working!";
});