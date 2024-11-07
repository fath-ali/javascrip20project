// const btn = document.querySelector('.switch-btn');
// const vidoe = document.querySelector('.video-container');
// btn.addEventListener('click',function(e){
//     if(!btn.classList.contains('slide')){
//         btn.classList.add('slide');
//         vidoe.pause();
//     }
//     else{
//         btn.classList.remove('slide')
//         vidoe.play()
//     }
// })

let btn = document.querySelector('.switch-btn');
let vov = document.querySelector('.video-container')

btn.addEventListener('click',function(e){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        vov.pause()
    }
    else{
        btn.classList.remove('slide');
        vov.play();
    }
})

