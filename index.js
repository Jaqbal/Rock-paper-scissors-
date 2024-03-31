 const buttons=document.querySelectorAll('button');
 const resultEl = document.querySelector('#results');
 const playerScoreEl = document.getElementById('user-score');
 const computerScoreEl = document.getElementById('computer-score');
 let playerScore = 0;
 let computerScore = 0;

 buttons.forEach(button =>{
    button.addEventListener('click',()=>{
     const result =  playRound(button.id, computerPlay());
     console.log(result);
     resultEl.textContent = result;
   })
})

function computerPlay(){
   const choices= ["rock", "paper", "scissors"];
   const randomChoice=Math.floor(Math.random()*choices.length);
   return choices[randomChoice]
}
function playRound(computerSelection,playerSelection){
  if(playerSelection === computerSelection){
     return "its a tie!!"
  }else if(
     (playerSelection === "rock" && computerSelection === "scissors") ||
     (playerSelection === "paper" && computerSelection === "rock") ||
     (playerSelection ===  "scissors" &&  
     computerSelection === "paper")
  ){
     playerScore++ 
     playerScoreEl.textContent =playerScore;
     return "You Win!" + ' ' + playerSelection + ' ' + "beats" + ' ' + computerSelection
  } else{
     computerScore++ 
     computerScoreEl.textContent = computerScore;
     return "You Lose!" + ' ' + computerSelection  + ' ' + "beats"  + ' ' + playerSelection
  }
}