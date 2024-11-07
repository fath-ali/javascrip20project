window.onscroll = function(){
   let container =  document.querySelector('.container');
   if(Math.trunc(scrollY)>10){
    container.classList.add('active')
    
   }
    
}