let count = 0;
let value  = document.getElementById("value");
let btns = document.querySelectorAll(".btn");
btns.forEach(function(item){
    
    item.addEventListener('click',function(e){
     let show = e.currentTarget.classList;
     if(show.contains('decrease')){
        count--;
     }else if(show.contains('increase')){
        count++;
        
     }else if(show.contains('reset')){
        count = 0;
     }
     if(count>0){
        value.style.color = 'green'
     }
     else if(count<0){
        value.style.color = 'red'
     }
     else if(count ===0){
        value.style.color = 'black';
     }
     else{
        alert("hello world")
     }
        value.textContent = count;
    })
})