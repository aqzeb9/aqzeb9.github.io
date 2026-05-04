function checkQuiz() {
  let score = 0;
  let feedback = "";

  // Question 1
  let q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "correct") {
    score++;
  } else {
    feedback += "<p>Q1: Correct answer is Central Processing Unit</p>";
  }

  // Question 2
  let q2 = document.getElementById("q2").value.toLowerCase();
  if (q2.includes("0") && q2.includes("1")) {
    score++;
  } else {
    feedback += "<p>Q2: Correct answer is 0 and 1</p>";
  }

  // Question 3
  let q3 = document.querySelectorAll('input[name="q3"]:checked');
  if (q3.length === 2) {
    let values = Array.from(q3).map(el => el.value);
    if (values.includes("keyboard") && values.includes("mouse")) {
      score++;
    } else {
      feedback += "<p>Q3: Correct answers are Keyboard and Mouse</p>";
    }
  } else {
    feedback += "<p>Q3: Correct answers are Keyboard and Mouse</p>";
  }

  // Question 4
  let q4 = document.querySelector('input[name="q4"]:checked');
  if (q4 && q4.value === "correct") {
    score++;
  } else {
    feedback += "<p>Q4: Correct answer is Execute instructions</p>";
  }

  // Question 5
  let q5 = document.querySelector('input[name="q5"]:checked');
  if (q5 && q5.value === "correct") {
    score++;
  } else {
    feedback += "<p>Q5: Correct answer is A step-by-step solution</p>";
  }

  document.getElementById("score").innerHTML =
    "Your Score: " + score + " / 5";

  document.getElementById("feedback").innerHTML = feedback;
}