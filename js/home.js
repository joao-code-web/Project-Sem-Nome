const helloUserTitle = document.querySelector("h1#helloName");
const addPhoto = document.querySelector(".photo-user");
const materiaItems = document.querySelectorAll(".materias-single");
const searchInput = document.querySelector("input#procurar");

// Funções de Utilidade
const getLocalStorageItem = (key) => {
  return localStorage.getItem(key) || "";
};

// Funções
const helloUser = () => {
  const nameUser = getLocalStorageItem("nameUser");
  helloUserTitle.innerHTML = nameUser ? `Olá, ${nameUser}` : "Olá";
};
// Verifição da foto
const verificAutoPhoto = () => {
  const userImg = getLocalStorageItem("userImg");
  if (userImg) {
    addPhoto.innerHTML = userImg;
  }
};
// Filtragem de materias
const filterItems = (searchItem) => {
  searchItem = searchItem.toLowerCase();

  materiaItems.forEach((item) => {
    let title = item.querySelector("h1").textContent.toLowerCase();

    if (title.indexOf(searchItem) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

searchInput.addEventListener("input", function () {
  const searchItem = this.value;
  filterItems(searchItem);
});

helloUser();
verificAutoPhoto();
