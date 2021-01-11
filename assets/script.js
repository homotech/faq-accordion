var questions1 = document.querySelector("#questions1");
var questions2 = document.querySelector("#questions2");
var questions3 = document.querySelector("#questions3");
var questions4 = document.querySelector("#questions4");
var questions5 = document.querySelector("#questions5");
var questions6 = document.querySelector("#questions6");
var toggle1 = document.querySelector("#toggle");
var toggle2 = document.querySelector("#toggle2");
var toggle3 = document.querySelector("#toggle3");
var toggle4 = document.querySelector("#toggle4");
var toggle5 = document.querySelector("#toggle5");
var toggle6 = document.querySelector("#toggle6");
var checkbool = [false, false, false, false, false, false];
const checked = (obje, inde) => {
  checkbool[inde] = !checkbool[inde];
  if (checkbool[inde]) {
    obje.classList.remove("inactive");
    obje.classList.add("active");
  } else {
    obje.classList.add("inactive");
    obje.classList.remove("active");
  }
};
toggle1.addEventListener("click", () => checked(questions1, 0));
toggle2.addEventListener("click", () => checked(questions2, 1));
toggle3.addEventListener("click", () => checked(questions3, 2));
toggle4.addEventListener("click", () => checked(questions4, 3));
toggle5.addEventListener("click", () => checked(questions5, 4));
toggle6.addEventListener("click", () => checked(questions6, 5));
