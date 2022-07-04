const startButton=document.getElementById('start');

const showScoreCard=document.getElementById('score-card');

const infoBox=document.getElementById('info-box-1');

const changeCount=document.getElementById('count');


const questionElement=document.getElementById('question');

const answerButtonsElement=document.getElementById('answer-buttons');

let shuffleQuestions,currentQuestionIndex;

const quitButton=document.getElementById('exit');
const quitQuizButton=document.getElementById('qut-btn');

const continueButton=document.getElementById('continue');
const nextButton=document.getElementById('nxt-btn')
const questionContainerElement=document.getElementById('question-container');

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})
function startGame(){
   infoBox.style.display="block";
   startButton.classList.add('hide');
}

continueButton.addEventListener('click',startQuiz)

function startQuiz(){
    questionContainerElement.classList.remove('hide');
    infoBox.style.display="none";
    shuffleQuestions=question.sort(()=>Math.random()-.5);
    currentQuestionIndex=0;
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach(answer=>{
        const button=document.createElement('button');
        button.innerText=answer.text
        button.classList.add('butn')
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct);
    })
    if(shuffleQuestions.length>currentQuestionIndex+1){
        nextButton.classList.remove('hide');
    }else{
        quitQuizButton.classList.remove('hide');
    }
}
quitQuizButton.addEventListener('click',showScore)

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
function showScore(){
    var c=0;
    showScoreCard.classList.remove('hide');
    questionContainerElement.classList.add('hide');
    
}
const question=[
    {
        question: "What is the name of batman butler ?",
        answers:[
            {
                text:"Alfred Pennyworth",correct:true,count:true
            },
            {
                text:"Cuthbert Pennyworth",correct:false,count:false
            },
            {
                text:"Albred Pennyworth",correct:false,count:false
            },
            {
                text:"Northbert Pennyworth",correct:false,count:false
            }
        ]
    },
    {
    question: "What does batman Lack ?",
    answers:[
            {
                text:"Superpower",correct:true,count:true
            },
            {
                text:"Manners",correct:false,count:false
            },
            {
                text:"Furniture",correct:false,count:false
            },
            {
                text:"An Amazing Car",correct:false,count:false
            }
        ]
    },
    {
    question: "What is batman's secret headquarter name ?",
    answers:[
            {
                text:"Stark Tower",correct:false,count:false
            },
            {
                text:"Justice league Watcher",correct:false,count:false
            },
            {
                text:"The Bat Cave",correct:true,count:true
            },
            {
                text:"X-Mansion",correct:false,count:false
            }
        ]
    },
    {
    question: "What gadget does batman uses the most?",
    answers:[
            {
                text:"Invisibility Cloak",correct:false,count:false
            },
            {
                text:"Adamantium Claws",correct:false,count:false
            },
            {
                text:"Batarang",correct:true,count:true
            },
            {
                text:"Wings that are like shield of steel",correct:false,count:false
            }
        ]
    },
    {
    question: "What is the colour of Riddler's costume in the film batman:forever?",
    answers:[
            {
                text:"Red",correct:false,count:false
            },
            {
                text:"Black",correct:false,count:false
            },
            {
                text:"White",correct:false,count:false
            },
            {
                text:"Green",correct:true,count:true
            }
        ]
    },
    {
    question: "In which American State the Fictional City of Gotham Located?",
    answers:[
            {
                text:"New York",correct:false,count:false
            },
            {
                text:"New Jersey",correct:true,count:true
            },
            {
                text:"Washington",correct:false,count:false
            },
            {
                text:"Michigan",correct:false,count:false
            }
        ]
    },
    {
    question: "What were his parents Called ?",
    answers:[
            {
                text:"Peter and Margaret",correct:false,count:false
            },
            {
                text:"Thomas and Martha",correct:true,count:true
            },
            {
                text:"Jonathan and Rosie",correct:false,count:false
            },
            {
                text:"Rod and Jane",correct:false,count:false
            }
        ]
    },
    {
    question: "What is batman's real name ?",
    answers:[
            {
                text:"Fedrick Wayne",correct:false,count:false
            },
            {
                text:"Bruce Wayne",correct:true,count:true
            },
            {
                text:"Brian Wayne",correct:false,count:false
            },
            {
                text:"Roger Wayne",correct:false,count:false
            }
        ]
    },
    {
    question: "What is the name of batman's nemesis aka The clown prince of crime ?",
    answers:[
            {
                text:"The prankster",correct:false,count:false
            },
            {
                text:"The fool",correct:false,count:false
            },
            {
                text:"The jester",correct:false,count:false
            },
            {
                text:"The Joker",correct:true,count:true
            }
        ]
    },
    {
    question: "What is the name of batman's company ?",
    answers:[
            {
                text:"Wayne Enterprise",correct:true,count:true
            },
            {
                text:"Wayne tech",correct:false,count:false
            },
            {
                text:"Wayne Corp",correct:false,count:false
            },
            {
                text:"Wayne Solutions",correct:false,count:false
            }
        ]
    },
    
]