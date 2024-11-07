// const textear = document.querySelector('textarea');
// const speechbtn = document.querySelector('button');
// const voicelist = document.querySelector('select');
// let synth = speechSynthesis;
// function voice(){
//     for(let voices of synth.getVoices()){
//         let option = `<option value ="${voices.name}" ${selected}>${voices.name} (${voices.lang})</option>`
//         voicelist.insertAdjacentHTML("beforebegin",option);
//     }
// }
// synth.addEventListener('voiceschanged',voice)
// speechbtn.addEventListener('click',e=>{
//     e.preventDefault();
//     if(textear.value!==""){
//         textToSpeech(textear.value);
//     }
    
// })
// function textToSpeech(text){
//     let utternace = new SpeechSynthesisUtterance(text);
//     synth.speak(utternace)
// }
// const textarea = document.querySelector('textarea');
// const select = document.querySelector('select');
// const buttons = document.querySelector('button');
// let synth = speechSynthesis;
// buttons.addEventListener('click' ,function(e){
//     e.preventDefault()
//     if(textarea.value!==""){
//          texttopspeech(textarea.value);
//         setTimeout(() => {
//             textarea.value = ""
//         }, 3000);
         
//     }
//     else{
//         let p = document.createElement('h5');
//         p.textContent= 'Please Insert Something Here';
//         document.querySelector('.wrapper').appendChild(p)
//         p.style.color = 'red';
//         p.style.fontSize = '1.4rem';
//         setTimeout(() => {
//             p.innerText = "" 
//         }, 2000);
//     }
    
// })

// function texttopspeech(text){
//     let utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance)

// }

const textarea = document.querySelector('textarea');
const buttons = document.querySelector('button');
const select  = document.querySelector('select');
let speech1 = speechSynthesis;
textarea.addEventListener('mouseenter',function(e){
    e.preventDefault();
    speech2('Pay Attention Please Right Text Here Not Number');
        
})
buttons.addEventListener("click",function(button){
    button.preventDefault()
    if(textarea.value!==""){
        speech(textarea.value)
        setTimeout(() => {
             textarea.value = ''
        }, 6000);
    }else{
        let h5 = document.createElement('h5');
        h5.textContent = "What Are You Doing Bro Please Insert Text to Texarea"
        document.querySelector('.wrapper').appendChild(h5);
        speech(h5.textContent);
        h5.style.color = 'red';
        h5.style.fontSize = '1.2rem'
        setTimeout(() => {
           h5.textContent = '' 
        }, 4000);
    }
})
function speech(text){
    const say =  new SpeechSynthesisUtterance(text)
    speech1.speak(say)
}
function speech2(text2){
    let utterance1 = new SpeechSynthesisUtterance(text2);
    speech1.speak(utterance1);
}