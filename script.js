let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Wie bindet man eine Webseite in eine Webseite ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;iframeset&gt;,",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;iframeset&gt;",
        "right_answer": 2
    },

    {
        "question": "Welches Attribut kann man NICHT für textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },

    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1
    },

    {
        "question": "Wie definiert man in Javascript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
    },

    {
        "question": "Was bedeutet das HTML-tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Link",
        "answer_4": "Kursivschreibung",
        "right_answer": 3
    }
];


let currentQuestion = 0;


function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
let questionRef = questions[currentQuestion];

document.getElementById('question_text').innerHTML = questionRef.question;
document.getElementById('answer_1').innerHTML = questionRef.answer_1;
document.getElementById('answer_2').innerHTML = questionRef.answer_2;
document.getElementById('answer_3').innerHTML = questionRef.answer_3;
document.getElementById('answer_4').innerHTML = questionRef.answer_4;

// for (let i = 0; i < array.length; i++) {
  
}

function answer(selection) {
    let questionRef = questions[currentQuestion];
    console.log('Selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('Selected answer is', selectedQuestionNumber);
    console.log('Current question is ', questionRef['right_answer']);

    let idOfRightAnswer = `answer_${questionRef['right_answer']}`;

    if (selectedQuestionNumber == questionRef['right_answer']) {
        console.log('right');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('false');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}
