const containerscroll = document.querySelector('.gallery');
const btn =document.getElementById('next');

console.log(containerscroll);

containerscroll.addEventListener('wheel',function(ev){
    ev.preventDefault();
    containerscroll.scrollLeft += ev.deltaY;
    console.log(containerscroll,'heello');    

})
btn.addEventListener('click',function(){
    containerscroll.scrollLeft +=900;
    
})