document.addEventListener("DOMContentLoaded", function () {
    // Store the correct answers for each question
    const correctAnswers = ["All of the above", "Alerts", "Console Log"];
    // Initialize score and current question index
    let score = 0;
    let currentQuestion = 0;
  
    // Function to check the selected answer and update the score
    function checkAnswer(answer) {
      if (answer === correctAnswers[currentQuestion]) {
        score++;
      }
      currentQuestion++;
      showNextQuestion();
    }
   // Function to display the next question or final score
   function showNextQuestion() {
    if (currentQuestion < correctAnswers.length) {
      const questionSections = document.querySelectorAll("section");
      questionSections.forEach(function (section, index) {
        section.style.display = index === currentQuestion ? "block" : "none";
      });
    } else {
      showFinalScore();
    }
  }

  // Function to display the final score
  function showFinalScore() {
    const quizContainer = document.querySelector("body");
    quizContainer.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${correctAnswers.length}</p>
    `;
  }

  // Add event listeners to the answer buttons
  const answerButtons = document.querySelectorAll("button");
  answerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedAnswer = this.textContent;
      checkAnswer(selectedAnswer);
    });
  });

  // Show the first question
  showNextQuestion();
});