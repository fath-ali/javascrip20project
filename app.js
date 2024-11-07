// function getnumbers(){
//     let number1 = parseInt(prompt("Enter the number"));
//     let number2 = parseInt(prompt("Enter the second number"));
//     let operator = prompt("Enter the operator");
//     let result1 = culculation(number1,number2,operator);
//    console.log(result1);
//    let show1 = show(number1,number2,operator);
//    console.log(show);
   
   


// }
// let restul;
//  function culculation(n1,n2,operator){
//   if(operator =='+'){
//     restul = n1+n2;
//   }
//   else if(operator =='-'){
//     restul = n1-n2;
// }
// else if(operator =='*'){
//     restul = n1*n2;
// }
// else if(operator =='/'){
//     restul = n1/n2
// }
//  console.log(restul);
 
//  }
//  function show(nn1,nn2,op){
//    console.log("number1 = ",nn1)
//    console.log("number1 = ",nn2)
//    console.log("number1 = ",op)
//  }
// getnumbers();

// function username(name){
//     let name1 = prompt('Enter Your name');
//     username1(name1);
// }
// function username1(n){
//     if(n=="fathalishah" || n=="mansoor"){
//         alert("WELCOMT BOSYS")
        
//     } else{
//         alert("please try again")
//     }
// }
// username()

// function email(name){
//     let name1 = prompt("Enter Your name");
//     perfroms(name1)
// }
// function perfroms(n1){
//     if(n1[0]=='f' && n1[-1]=='m'){
//         console.log("welcom to the site");
        

//     }
//     else{
//         console.log("try again");
        
//     }
// }
// email();


// function IsPrime(){
//     let i=0;
//     while(i<=20){
//         if(i%2==0){
//             console.log(i);
            
//         }
//         i = i+1
//     }
// }

// IsPrime(90);

// let MainMony = parseInt(prompt("Enter you salary"));
// let result;
// // let mainlot
// let result2
// let percentage = 0;
// if(MainMony ===5000){
//     result =MainMony;
//     console.log(result);
    
    
    
// }
// else if(MainMony>=6000 && MainMony<=50000){
//     result =  percentage =12/100*MainMony;
//     result2 = percentage-MainMony;
//     console.log(result);
//     console.log(result2)
    
// }
// else if(MainMony >=70000){
//     result = percentage = 20/100*MainMony;
//     console.log(result)
//     result2 = percentage-MainMony;
//     console.log('your main money is ',result2);
// let colors = ['red','black','green','yellow'];
// let btn = document.getElementById("btn");
// let color = document.querySelector(".color");
// let container = document.querySelector('.container');
// btn.addEventListener("click",function(){
//     let randomnumber = getRandom();
//     container.style.backgroundColor = colors[randomnumber];
//     color.textContent = colors[randomnumber];
// })

// function getRandom(){
//     return Math.floor(Math.random() * colors.length)
// }
// let colors = ['red','blue','yellow','black'];
// let btn = document.getElementById("btn");
// let color = document.querySelector(".color");
// let container = document.querySelector(".container");
// btn.addEventListener("click",function(){
//     let randomnumber = getRandom();
//     container.style.backgroundColor = colors[randomnumber];
//     color.textContent = colors[randomnumber];

// })
// function getRandom(){
//     let result = Math.floor(Math.random() *colors.length)
//     return result;
// }
// let colors = ['red','yellow','blue','black','white'];
// let btn = document.querySelector('#btn');
// let container = document.querySelector(".container");
// let color = document.querySelector(".color");
// btn.addEventListener('click',function(){
//     let getnumners = getRandom()
//     container.style.backgroundColor = colors[getnumners]
//     color.textContent = colors[getnumners]
// })
// function getRandom(){
//     return Math.floor(Math.random() *colors.length)
// }
let colors = ['red','blue','yellow','black','lightblue'];
let contianer = document.querySelector('.container');
let btn = document.querySelector('#btn');
let color = document.querySelector('.color');
  btn.addEventListener("click",function(){
    let random  =  gerRandom();
    contianer.style.backgroundColor = colors[random];
    color.textContent = colors[random]
  })



function gerRandom(){
    let result = Math.floor(Math.random() * colors.length)
    return result;
}