const selectTag = document.querySelectorAll('select');
const translatBtn = document.querySelector("button");
const fromText = document.querySelector('.from-text');
const totext = document.querySelector('.to-text');
const exchange = document.querySelector('.exchange');
// ------icons----------------------------------------
const link = document.querySelector('.btn');
const sound = document.querySelector('.p1');
const sound1 = document.querySelector('.p2');
const link1 = document.querySelector('.a1');
link1.addEventListener('click',function(e){
    e.preventDefault();
    navigator.clipboard.writeText(totext.value);
})
sound1.addEventListener('click',function(){
    
    let utterance1  = new SpeechSynthesisUtterance(totext.value);
    speechSynthesis.speak(utterance1)
})
sound.addEventListener('click',function(){
    
    let utterance =  new SpeechSynthesisUtterance(fromText.value);
    speechSynthesis.speak(utterance)
    
})

link.addEventListener('click',function(e){
    e.preventDefault()

    navigator.clipboard.writeText(fromText.value);
})


selectTag.forEach(function(tag,id){
    for(const country_cod in countries){
        //Selecting English By Default as from laguage and hindi as to langaufe
        let selected;
        if(id ==0 && country_cod =="en-GB"){
            selected = "selected";
            
        }else if(id == 1 && country_cod =="fa-IR"){
            selected  = "selected";
        }
        let option = `  <option value="${country_cod}" ${selected}>${countries[country_cod]}</option>`;
        // tag.insertAdjacentHTML("beforeend", option);//adding options tags inside select tag
        tag.insertAdjacentHTML("beforeend" ,option);

    }
    
});
exchange.addEventListener('click',function(){
    //exchanging textarea and select tag values;
    let temp = fromText.value;
    let templang = selectTag[0].value;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = templang;
    fromText.value  = totext.value;
    totext.value = temp;
});
translatBtn.addEventListener("click",function(){
 let text = fromText.value;
 let translatFrom = selectTag[0].value; //getting from select tage value;
  let translaTo = selectTag[1].value; //getting to select tag value
 let apiurl =`https://api.mymemory.translated.net/get?q=${text}&langpair=${translatFrom}|${translaTo}`;
 fetch(apiurl).then(res=>res.json()).then(data=>{
    totext.value = data.responseData.translatedText;

    console.log(apiurl);
    
 })
 
});




