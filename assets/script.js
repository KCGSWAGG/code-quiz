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