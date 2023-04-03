import matematica1YQuestions from "../quizQuestions/matematica1YQuestions.js";

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".quiz");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const imgQuiz = document.querySelector(".imgQuiz");

let questions = matematica1YQuestions;
let currentIndex = 0;
let questionsCorrect = 0;

const resetQuiz = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

const handleAnswer = (e) => {
  if (e.target.dataset.correct === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
};

const finish = () => {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length} perguntas.`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
};

const loadQuestion = () => {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;
  if (item.img === undefined) {
    imgQuiz.style.display = "none";
  } else {
    imgQuiz.style.display = "block";
    imgQuiz.innerHTML = item.img;
  }

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", handleAnswer);
  });
};

resetQuiz();
btnRestart.addEventListener("click", resetQuiz);
