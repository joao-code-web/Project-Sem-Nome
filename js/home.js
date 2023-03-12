// DOM
const menu_cell = document.querySelector(".menu_cell");
const btn_open = document.querySelector(".btn_open");
const img_menu = document.querySelector("#img_menu");
// menuMobile
const helloUserTittle = document.querySelector("h1#helloName");
// functions

console.log(helloUserTittle);
const mobileMenu = () => {
  if (menu_cell.classList.contains("open")) {
    menu_cell.classList.remove("open");
    img_menu.src = "./img/homeImg/menu2.png";
  } else {
    menu_cell.classList.add("open");
    img_menu.src = "./img/homeImg/close2.png";
  }
};

const helloUSer = () => {
  if (localStorage.nameUser === undefined) {
    helloUserTittle.innerHTML = `Olá`;
  } else {
    helloUserTittle.innerHTML = `Olá, ${localStorage.nameUser}:)`;
  }
};

const botao = () => {
  mobileMenu();
};

btn_open.addEventListener("click", botao);
helloUSer();
