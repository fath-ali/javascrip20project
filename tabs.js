// const btns =document.querySelectorAll('.tab-btn');
// const about = document.querySelector('.about');
// const articls = document.querySelectorAll('.content');

// about.addEventListener('click',function(e){
//     let id = e.target.dataset.id;
// if(id){
//     btns.forEach(function(btn){
//         btn.classList.remove('active');
//         e.target.classList.add('active')
//     });
//     articls.forEach(function(artice){
//         artice.classList.remove('active');
        
//     });
//     const element =document.getElementById(id);
//     element.classList.add('active')
// }
// })


const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const content = document.querySelectorAll('.content');
about.addEventListener('click' ,function(e){
     let id = e.target.dataset.id;     
     if(id){
         btns.forEach(function(btn){
            btn.classList.remove('active')
            e.target.classList.add('active')
        });
        content.forEach(function(art){
            art.classList.remove('active')
        });
        let display = document.getElementById(id);
        display.classList.add('active')
        console.log(display);
        
        
     }
})


