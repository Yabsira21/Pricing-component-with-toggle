let price = "month";
let prices = document.querySelectorAll(".price--main");
let toggle = document.querySelector(".toggler-main");
let circle = document.querySelector(".toggler-circle");

let monthly = ["19.99", "24.99", "39.99"];
let annual = ["199.99", "249.99", "399.99"];
toggle.addEventListener("click", function () {
  if (price == "month") {
    prices.forEach((p, i) => (p.textContent = annual[i]));
    circle.style.transform = "translate(-90%, -50%)";
    price = "annual";
  } else {
    prices.forEach((p, i) => (p.textContent = monthly[i]));
    circle.style.transform = "translate(0%, -50%)";
    price = "month";
  }
});
