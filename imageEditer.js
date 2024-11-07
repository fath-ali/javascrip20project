const fileinput = document.querySelector('.input-file');
const chooseimg  = document.querySelector('.choose-image');
const previewimg = document.querySelector('.preview-img img');
const container = document.querySelector('.container');
const filterOpton = document.querySelectorAll(".fillter button");
const filterName = document.querySelector(".fillter-info .name");
const filtervalue = document.querySelector(".fillter-info .value");
const filterslider = document.querySelector(".slider input");
const rotateoption = document.querySelectorAll('.rotat button');
const saveimage  = document.querySelector('.save-img')

let brightness = 100, saturation = 100, inversion = 0,grascale = 0;
let rotate = 0,flipHorizontal =1,flipvertical = 1;

function applyfilter(){
    previewimg.style.transform =`rotate(${rotate}deg) scale(${flipHorizontal},${flipvertical})`
    previewimg.style.filter= `brightness(${brightness}%), saturate(${saturation}%) invert(${inversion}$) grascale(${grascale}%)`
}

filterOpton.forEach(function(filter){
    filter.addEventListener('click',function(){
        let option = document.querySelector(".fillter .active");
        option.classList.remove('active');
        filter.classList.add("active")
        filterName.innerText = filter.innerText;
        filterslider.max ="200";
        if(filter.id =="Brightness"){
            filterslider.max ="200";
            filterslider.value = brightness;
            filtervalue.innerText = `${brightness}%`
        }else if(filter.id =="Saturation"){
            filterslider.max ="200";
            filterslider.value = saturation;
            filtervalue.innerText = `${saturation}%`
        }else if(filter.id =="Inversion"){
            filterslider.max ="100";
            filterslider.value = inversion;
            filtervalue.innerText = `${inversion}%`
        }else if(filter.id =="Grayscale"){
            filterslider.max ="100";
            filterslider.value = grascale;
            filtervalue.innerText = `${grascale}%`
        }

        
    })
})
chooseimg.addEventListener('click',function(){
    fileinput.click();
})

filterslider.addEventListener('input',function(){
    let filterslide1 = filterslider.value;
        filtervalue.innerHTML = `${filterslide1}%`
     let filterselect = document.querySelector(".fillter .active");
     if(filterselect.id ==='Brightness'){
        brightness = filterslide1;
     }else if(filterselect.id ==="Saturation"){
        saturation  = filterslide1
     }else if(filterselect.id ==="Inversion"){
        inversion = filterslide1;
     }else if(filterselect.id ==="Grayscale"){
        grascale = filterslide1;
     } 
     applyfilter();

})

fileinput.addEventListener('change',function(){
    let file = fileinput.files[0];
    previewimg.src = URL.createObjectURL(file);
    container.classList.add('active')
});

rotateoption.forEach(function(rotate1){
    rotate1.addEventListener("click",function(){
        if(rotate1.id ==='left'){
            rotate -=90;
        }else if(rotate1.id ==='right'){
            rotate +=90;
        }
        else if(rotate1.id ==='vertical'){
            flipvertical  = flipvertical =-1
        }
        else if(rotate1.id =="horizantal"){
            flipHorizontal = flipHorizontal =-1
        }
        applyfilter()
    })

});

saveimage.addEventListener('click',function(){
    // const canvas = document.createElement('canvas');
    // const ctx = canvas.getContext('2d');
    // canvas.width = previewimg.naturalWidth;
    // canvas.height = previewimg.naturalHeight;
    // ctx.translate(canvas.width/2, canvas.height/2)
    // ctx.filter = `brightness(${brightness}%), saturate(${saturation}%) invert(${inversion}$) grascale(${grascale}%)`;
    // ctx.scale(flipHorizontal,flipvertical)
    // ctx.drawImage(previewimg, -canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    // if(rotate!==0){
    //     ctx.rotate(rotate * Math.PI /180)
    // }
    
    //  const link = document.createElement('a');
    //  link.download = 'image.jpg';
    //  link.href =  canvas.toDataURL();
    //  link.click()
// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = previewimg.naturalWidth;
// canvas.height = previewimg.naturalHeight;
// ctx.translate(canvas.width/2 , canvas.height/2);
// ctx.drawImage(previewimg, -canvas.width/2, -canvas.height/2, canvas.width ,canvas.height)
// const link = document.createElement('a');
//  link.download = 'image.jpg';
//  link.href = canvas.toDataURL();
//  link.click()
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = previewimg.naturalWidth;
canvas.height = previewimg.naturalHeight;
ctx.translate(canvas.width/2,canvas.height/2);
ctx.drawImage(previewimg ,-canvas.width/2 , -canvas.height/2, canvas.width, canvas.height);


const link = document.createElement('a');
link.download = 'image.jpg';
link.href = canvas.toDataURL();
link.click();

    
    
    
    
    
    
    
})