const reviews = [
    {
        id:1,
        img:'p-7.jpg',
        name:'Mansoor',
        job:'Database Devoloper',
        text:' i am a database Devoloper i  my nam is manssor',
    },
    {
        id:2,
        img:'p-8.jpg',
        name:'Mardisakhy',
        job:'Officer',
        text:'my name is mardisakhy i am a officer manager i would like to worok here',
    },
    {
        id:3,
        img:'p-9.png',
        name:'Mustafa',
        job:'IT Manager',
        text:'my name is mustafa Abid i am a IT manager i would like to work here',
    },
    {
        id:4,
        img:'p-10.jpg',
        name:'Fathalishah',
        job:'Web Developement',
        text:'my name is fathalishah gowhari i am a web devoloper i would like to work here',
    }


]

let countITm =0;
const img = document.getElementById('person-img');
const author =document.getElementById('author');
const job = document.getElementById('job');
const info =document.getElementById('info');

const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector('.next-btn');
const random_btn = document.querySelector('.random-button')

window.addEventListener('DOMContentLoaded',function(){
  showitem(countITm)
})

function showitem(e){
    let item = reviews[e];
    img.src  = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

next_btn.addEventListener('click',function(){
    countITm++;
    if(countITm>reviews.length-1){
        countITm = 0;
    }
    showitem(countITm);
})
prev_btn.addEventListener('click' ,function(){
    countITm--;
    if(countITm<0){
        countITm = reviews.length -1
    }
    showitem(countITm)
})

random_btn.addEventListener('click',function(){
    countITm = Math.floor(Math.random() *reviews.length);
    showitem(countITm)
    console.log(countITm);
    
})