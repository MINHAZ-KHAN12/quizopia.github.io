const quizData = [
        {
            question: "Which of the following is the hardest natural substance on Earth?",
            
                a: "Gold",
                b: "Iron",
                c: "Diamond",
                d: "Quartz",
            
            correct: "c",
        },
        {
            question: "In which year did the Titanic sink?",
            
                a: "1912",
                b: "1905",
                c: "1915",
                d: "1920",

                correct: "a",
        },
        {
            question: "Who developed the theory of general relativity?",
           
                a: "Isaac Newton",
                b: "Albert Einstein",
                c: "Galileo Galilei",
                d: "Stephen Hawking",

                correct: "b",
        },
        {
            question: "Which element has the highest atomic number?",
            
                a: "Oganesson",
                b: "Copernicium",
                c: "Moscovium",
                d: "Livermorium",

                correct: "a",
        },
       
        {
            question: "What is the most widely spoken language in the world?",
           
                a: "Spanish",
                b: "Mandarin Chinese",
                c: "English",
                d: "Hindi",

                correct: "b",
        }
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);