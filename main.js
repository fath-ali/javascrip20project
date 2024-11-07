
let computerchoice = document.getElementById("computer_choice");
let youchoice  = document.getElementById("your_choic");
let result1 = document.getElementById("result_choice");

const passiblechoice = document.querySelectorAll('button');
let userchoice;
let computerchoice1;
let result;
passiblechoice.forEach(passiblechoice=>passiblechoice.addEventListener('click',(e)=>{
 userchoice = e.target.id;
 youchoice.innerHTML = userchoice;
 gereratecomputerchoice();
 getresult();
}))
 
function gereratecomputerchoice(){
let randomNumber = Math.floor(Math.random() *3) +1;

if(randomNumber ==1){
    computerchoice1  = "rock";
}
if(randomNumber ===2){
    computerchoice1 = "scissor";
}
if(randomNumber ==3){
    computerchoice1 = "papper";
}
 computerchoice.innerHTML = computerchoice1;
}

function getresult(){
    if(computerchoice1 ==userchoice){
      result = "its' draw";
    }
    if(computerchoice1 ==="rock" && userchoice=="papper"){
        result = "you won"
    }
    if(computerchoice1 ==="rock" && userchoice ==="scisoor"){
        result = "lost"
    }
    if(computerchoice1 =="papper" && userchoice ==="scisoor"){
        result = "you win"
    }
    if(computerchoice1 =="papper" && userchoice ==="rock"){
        result  ="you lost"
    }
    if(computerchoice1 =="scisoor" && userchoice =="rock"){
        result = "you win"
    }
    if(computerchoice1 ==="scisoor" && userchoice =="papper"){
        result = "you lost"
    }
   result1.innerHTML = result;
}