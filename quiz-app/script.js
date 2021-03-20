const quizData = [
    {
        question: 'How old am i?',
        a: '15',
        b: '17',
        c: '22',
        d: '25',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    }, {
        question: 'Who is the current President of US?',
        a: 'Barrack Obama',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Hunter Biden',
        correct: 'c'
    }, {
        question: 'What does HTML stand for?',
        a: 'Cascading Style Sheet',
        b: 'Hypertext Markup Language',
        c: 'Json Object Notation',
        d: 'Application Programming Interface',
        correct: 'b'
    }, {
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '2019',
        c: '1956',
        d: '1995',
        correct: 'd'
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
