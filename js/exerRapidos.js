const exerSped = document.querySelectorAll(".quiz-exer");
const input = document.querySelector(".search-quiz input");

const filterQuiz = (searchQuiz) => {
  searchQuiz = searchQuiz.toLowerCase();

  exerSped.forEach((quiz) => {
    console.log(quiz);
    let tittle = quiz.querySelector("h1").textContent.toLowerCase();

    if (tittle.indexOf(searchQuiz) !== -1) {
      quiz.style.display = "block";
    } else {
      quiz.style.display = "none";
    }
  });
};

input.addEventListener("input", function () {
  const searchQuiz = this.value;
  filterQuiz(searchQuiz);
});
