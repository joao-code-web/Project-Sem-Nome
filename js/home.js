const helloUserTitle = document.querySelector("h1#helloName");
const addPhoto = document.querySelector(".photo-user");

// Funções de Utilidade
const getLocalStorageItem = (key) => {
  return localStorage.getItem(key) || "";
};

// Funções
const helloUser = () => {
  const nameUser = getLocalStorageItem("nameUser");
  helloUserTitle.innerHTML = nameUser ? `Olá, ${nameUser}` : "Olá";
};

const verificAutoPhoto = () => {
  const userImg = getLocalStorageItem("userImg");
  if (userImg) {
    addPhoto.innerHTML = userImg;
  }
};

helloUser();
verificAutoPhoto();