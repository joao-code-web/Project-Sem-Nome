const buttonI = window.document.querySelector(".list-mobile i");
const navMoba = window.document.getElementById("mobile");

const menuFunction = () => {
  if (navMoba.style.opacity === "0") {
    navMoba.style.opacity = "1";
    buttonI.style.transform = "rotate(510deg)";
    buttonI.style.fontSize = "45px";
  } else {
    navMoba.style.opacity = "0";
    buttonI.style.transform = "rotate(0deg)";
    buttonI.style.fontSize = "30px";
  }
};

buttonI.addEventListener("click", () => {
  menuFunction();
});
