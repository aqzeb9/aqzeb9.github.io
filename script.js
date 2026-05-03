function checkQuiz() {
  let score = 0;

  let q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "correct") score++;

  let q2 = document.getElementById("q2").value;
  if (q2 === "0 and 1") score++;

  document.getElementById("result").innerHTML = "Score: " + score;
}