let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = ()=>{
  const options = ["rock","paper","scissors"];
  const randidx = Math.floor(Math.random()*3);
  return options[randidx];
};
const drawGame =()=>{
   msg.innerText = 'Game Was Draw.Play Again.';
         msg.style.backgroundColor = '#081b31';
};
const showWinner = (userWin,userChoice,compChoice)=>{
if(userWin){
 userScore++;
 userScorePara.innerText = userScore;
  msg.innerText = `You Win!.Your ${userChoice} beats ${compChoice}.`;
  msg.style.backgroundColor = 'green';
} else{
 compScore++;
 compScorePara.innerText = compScore;
    msg.innerText = `You Lose!${userChoice} beats your ${compChoice}.`;
      msg.style.backgroundColor = 'red';
}
}
const playGame = (userChoice)=>{
  const CompChoice= genCompChoice();
  //Check conditions based on logic
  if(userChoice === CompChoice){
drawGame();
  } else {
   let userWin = true;
    if (userChoice === "rock"){
     userWin =  CompChoice === "paper"?false : true;//paper .scissors
    } else if (userChoice === "paper"){
       userWin = CompChoice ==="scissors"?false:true;//rock.scissors
    } else {//scissors => user choice
 userWin = CompChoice === "rock"?false : true;//roack,Paper
    }
    showWinner(userWin,userChoice,CompChoice);
  }

};
choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    const userChoice= choice.getAttribute('id');
playGame(userChoice);
  })
});