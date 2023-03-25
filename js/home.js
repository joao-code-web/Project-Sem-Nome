// DOM
const helloUserTittle = document.querySelector("h1#helloName");
const addPhoto = document.querySelector(".photo-user");
// functions
const helloUSer = () => {
  if (localStorage.nameUser === undefined) {
    helloUserTittle.innerHTML = `Olá`;
  } else {
    helloUserTittle.innerHTML = `Olá, ${localStorage.nameUser}`;
  }
};

const verificAutoPhoto = () => {
  if(localStorage.userImg != undefined) {
    addPhoto.innerHTML = localStorage.userImg;
  } 
}
helloUSer();

verificAutoPhoto();