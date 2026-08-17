

// DAY 7
// RPS game 

let choices = ['rock' , 'paper' , 'scissor']

function userInp(){
const userPrompt = prompt('Choose Rock , Paper , Scissor')

if(userPrompt === null) return

const choice = userPrompt.trim().toLowerCase()

if(choices.includes(choice)){
    return choice
}


}


function computerInp() {
let randomNum = Math.floor(Math.random()*3 + 1)

switch(randomNum){
    case 1:
    return 'rock'
    case 2:
    return 'paper'
    case 3:
    return 'scissor'
}

}


function gameLogic(userChoice, computerChoice) {

    
if(
    (userChoice === 'paper' && computerChoice === 'rock') || 
    ( userChoice === 'scissor' && computerChoice === 'paper' ) ||
    (userChoice === 'rock' && computerChoice === 'scissor'   )
)
{
    console.log('User wins');
  return  'User wins'
    
}else if(

    ( computerChoice === 'paper' && userChoice === 'rock'  ) ||
    ( computerChoice === 'scissor' && userChoice === 'paper' ) || 
    ( computerChoice === 'rock' && userChoice === 'scissor' )

){
    console.log("Computer wins");
   return 'Computer wins'
}
else{
        console.log("match is draw");
      return 'Match is Draw'
}

}



function startGame(gameLogic) {
    
let userChoice = userInp()

if(userChoice === undefined){
    console.log('user hasnt wanna play');
    
    return
}

let computerChoice = computerInp()

return gameLogic(userChoice, computerChoice)


}



const btn = document.querySelector('button')
const res = document.getElementById('res')

btn.addEventListener('click' , (ev)=>{
   let result =  startGame(gameLogic)
   if(result === undefined){
    res.innerText = 'Result -  user doesnt wanna play'
   }else{
    res.innerText = 'Result -' + result

   }

})







