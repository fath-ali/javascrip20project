// const btns =document.querySelectorAll('.question-btn');
// btns.forEach(function(btn){
//    btn.addEventListener('click',function(e){
//     let showtext = e.currentTarget.parentElement.parentElement;
//     showtext.classList.toggle('show-text');
//     console.log(showtext);
    
    
//    })
    
// })

let btns   =  document.querySelectorAll('.question-btn');
console.log(btns);
btns.forEach(function(btn){
   btn.addEventListener('click', function(e){
      let result = e.currentTarget.parentElement.parentElement;
      result.classList.toggle("show-text");
      

   })
})
