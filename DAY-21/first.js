
const quizData = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Order Model",
      "Document Object Model",
      "Data Object Method",
      "Direct Object Management"
    ],
    correct: 1
  },
  {
    question: "Which method selects an element by its ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElement()",
      "getElementsByClassName()"
    ],
    correct: 0
  },
  {
    question: "Which event fires when an input value is changed and loses focus?",
    options: [
      "click",
      "submit",
      "change",
      "keydown"
    ],
    correct: 2
  },
  

];


let questions = [...quizData].sort(()=> Math.random() - 0.5 )



const timerEl = document.getElementById('timer')
const questionEl = document.getElementById('question')

const optionEl = document.getElementById('options')
const nextBtn = document.getElementById('next-btn')

const resultEl = document.getElementById('result')

let currQues = 0

function loadQuestion() {
    const  q  = questions[currQues]
    questionEl.textContent = `Q${currQues + 1}. ${q.question} `
    optionEl.innerHTML = ''

    q.options.forEach(( option, index)=>{
        const btn = document.createElement('button')
         btn.textContent = option
         btn.classList.add('option-btn')
         btn.addEventListener('click',() => selectAnswer(index) )
    optionEl.appendChild(btn)
    })

nextBtn.style.display = 'none'

}


loadQuestion()

let score = 0

function selectAnswer(index){

    const q = questions[currQues]
    const buttons = document.querySelectorAll('.option-btn')

    buttons.forEach(btn => btn.disabled = true )


    if(index === q.correct ){
    score++
    buttons[index].classList.add('correct')

    }else{
        buttons[index].classList.add('wrong')
        buttons[q.correct].classList.add('correct')
    }
nextBtn.style.display = 'inline-block'
}


nextBtn.addEventListener('click', ()=>{
    currQues++
    if(currQues < questions.length ){
        loadQuestion()
    }else{
nextBtn.style.display = 'none'
        showResult()
    }
})



function showResult() {
    const highScore = localStorage.getItem('quizHighScore' ) || 0

    const isNew = score > highScore

    if(isNew){
     localStorage.setItem('quizHighScore', score) 
}

resultEl.innerHTML = `
      <h2>Hurray!!! Quiz Completed</h2>
      <p>You have scored ${score} out of ${questions.length} questions</p>
      <p>Highest Score: ${Math.max(score, highScore)}</P>
      ${isNew ? "<p>Hey, New High Score!</p>": ""}
      <button class='restartBtn' >Restart Quiz</button>
  `

const restart = document.querySelector('.restartBtn')
restart.addEventListener('click', restartQuiz )

}

function restartQuiz() {
    currQues = 0
    score = 0

 questions = [...quizData].sort(()=> Math.random() - 0.5 )
resultEl.innerHTML = ''
loadQuestion()


}









