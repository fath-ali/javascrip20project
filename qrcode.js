const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('form');
const inputfile = document.querySelector('input');

function fetchRequest(formData){
    fetch("http:/api.qrserver.com/v1/read-qr-code/",{
        method:"POST",
        body:formData

    }).then(res =>res.json()).then(result=>{
        wrapper.classList.add("active");
    })
}
 inputfile.addEventListener('change',function(e){ 
    let file = e.target.file[0];
    let formdata =  new FormData();
    formdata.append("file",file);
    fetchRequest(formdata)
    
    
 })
form.addEventListener('click',function(){
    inputfile.click();
})



