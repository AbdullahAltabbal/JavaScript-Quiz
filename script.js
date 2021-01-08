let aktuelleFrage = 0;
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const firstAnswer = document.getElementById('btn1');
const secondAnswer = document.getElementById('btn2');
const thirdAnswer = document.getElementById('btn3');
const fourthAnswer = document.getElementById('btn4');


const myQuestions = [
    {
        question: "who inventes JavaScript?",
        answers: {
            a: "ich",
            b: "du",
            c: "er",
            d: "sie"
        },
        correctAnswer: "c"
    },
    {
        question: "who inventes JavaScript?",
        answers: {
            a: "ich",
            b: "ich",
            c: "ich",
            d: "ich"
        },
        correctAnswer: "c"
    },
    {
        question: "who inventes JavaScript?",
        answers: {
            a: "ich",
            b: "ich",
            c: "ich",
            d: "ich"
        },
        correctAnswer: "c"
    }
];

function ShowQuestion(aktuelleFrage){
    questionElement.innerHTML = myQuestions[aktuelleFrage].question;
    firstAnswer.innerHTML = myQuestions[aktuelleFrage].answers.a;
    secondAnswer.innerHTML = myQuestions[aktuelleFrage].answers.b;
    thirdAnswer.innerHTML = myQuestions[aktuelleFrage].answers.c;
    fourthAnswer.innerHTML = myQuestions[aktuelleFrage].answers.d;
    aktuelleFrage++;
    ShowQuestion(aktuelleFrage);
}


window.onload(ShowQuestion());

// logik
// Frage zeigen -- auswählen richtig oder Falsch
// --> Scour rechnen Funktion
// --> Frage zeigen 
