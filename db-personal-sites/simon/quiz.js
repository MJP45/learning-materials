let qna = new Map();
qna.set("question1", { answer: 1, score: 1, answerText: "Yes" });
qna.set("question2", { answer: 1, score: 1, answerText: "1" });
qna.set("question3", { answer: 3, score: 2, answerText: "3" });
qna.set("question4", { answer: 12, score: 2, answerText: "12" });
qna.set("question5", { answer: 4000, score: 2, answerText: "4000+" });
qna.set("question6", { answer: 7, score: 3, answerText: "Motorcycle, Car and Rigid Lorry (not Articulated Lorry)" });
qna.set("question7", { answer: 15, score: 4, answerText: "Java, C#, Visual Basic, SQL (not CSS, HTML or JavaScript)" });

let grades = new Set();
grades.add ({score: 15, commentary: "You got all the questions right. Well done!", image: "grade-a.jpg"});
grades.add ({score: 11, commentary: "You scored pretty well. Well done!", image: "grade-b.jpg"});
grades.add ({score: 6, commentary: "You didn't score too badly. Maybe study Simon more and try again?", image: "grade-c.jpg"});
grades.add ({score: 1, commentary: "That's a pretty poor score. Maybe study Simon more and try again?", image: "grade-d.jpg"});
grades.add ({score: 0, commentary: "You didn't get any right. Shame on you!", image: "grade-f.jpg"});


let totalScore = 0;

function evaluateCheckboxes(questionNumber) {
    const checkboxes = document.getElementsByName("question" + questionNumber + "[]");
    let answer = 0;

    //Total up the values for all the selected checkboxes/radio buttons. This will give a unique number for the answer which will be 
    // evaluated against the correct answer
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) answer += Number(checkbox.value);
        checkbox.disabled = true; // don't allow user to change inout after form is submitted
    });

    return answer;
}

function processAnswer(questionNumber) {
    const questionKey = "question" + questionNumber;
    const answerKey = "answer" + questionNumber;

    // get value for user's answer differently depending on whether the question used checkboxes/radio buttons or not
    if (document.getElementById(questionKey) == null) {
        answerValue = evaluateCheckboxes(questionNumber);
    } else {
        answerValue = document.getElementById(questionKey).value;
        document.getElementById(questionKey).disabled = true; // don't allow user to change inout after form is submitted
    }

    //Check if answer is correct and give feedback accordingly
    if (answerValue == qna.get(questionKey).answer) {
        document.getElementById(answerKey).innerText = "Correct!";
        document.getElementById(answerKey).className = "correct-answer";
        totalScore += qna.get(questionKey).score;
    } else {
        document.getElementById(answerKey).innerText = "Wrong! The correct answer is: " + qna.get(questionKey).answerText;
        document.getElementById(answerKey).className = "incorrect-answer";
    }
}

function processInput() {
    event.preventDefault();
    totalScore = 0;

    //Evaluate each answer, total up the score and give feedback on each question
    for (i = 1; i <= qna.size; i++) {
        processAnswer(i);
    }

    // Assign a grade to the total score and give feedback to the user
    for(grade of grades) {
        if (totalScore >= grade.score) {
            document.getElementById("submit").style.display = "none";
            document.getElementById("commentary").innerHTML = `<h2>Feedback</h2> Total score: ${totalScore} <br><br> ${grade.commentary}`;
            document.getElementById("grade-picture").innerHTML = `<img src=img/${grade.image}></img>`;
            document.getElementById("grade-picture").scrollIntoView();
            break;
        }
    }
}