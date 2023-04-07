const buttonI = document.querySelector(".list-mobile i");
const desktop = document.querySelector("nav.desktop");
const container = document.querySelector(".logo img");

const menuFunction = () => {
  if (desktop.style.display == "none") {
    desktop.style.display = "block";
    desktop.style.opacity = "1";
  } else {
    desktop.style.display = "none";
  }
};

buttonI.addEventListener("click", () => {
  menuFunction();
});

function animateImage() {
  container.style.transform = "translateY(-60%)";
}

function resetAnimation() {
  container.style.transform = "translateY(0)";
}

container.addEventListener("mouseenter", animateImage);
container.addEventListener("mouseleave", resetAnimation);
