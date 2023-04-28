const exerSped = document.querySelectorAll(".quiz-exer");
const input = document.querySelector(".search-quiz input");

const filterQuiz = (searchQuiz) => {
  searchQuiz = searchQuiz.toLowerCase();
  let foundQuiz = false;

  exerSped.forEach((quiz) => {
    let tittle = quiz.querySelector("h1").textContent.toLowerCase();
    let shouldDisplay = tittle.includes(searchQuiz);

    quiz.classList.toggle("hidden", !shouldDisplay);

    if (shouldDisplay) {
      foundQuiz = true;
    }

    if (tittle.indexOf(searchQuiz) !== -1) {
      quiz.style.display = "block";
    } else {
      quiz.style.display = "none";
    }
  });

  if (foundQuiz) {
    console.log("encontrou");
  } else {
    console.log("não encontrou");
  }
};

input.addEventListener("input", function () {
  const searchQuiz = this.value;
  filterQuiz(searchQuiz);
});
