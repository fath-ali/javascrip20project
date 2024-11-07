let btnsmodal =document.querySelector('.btn-modal');
const overlay  = document.querySelector('.modal-overlay');
const closebtn = document.querySelector('.close-btn');
btnsmodal.addEventListener('click',function(e){
overlay.classList.toggle('open-modal')
    
})

closebtn.addEventListener('click',function(){
    overlay.classList.remove('open-modal')
})
