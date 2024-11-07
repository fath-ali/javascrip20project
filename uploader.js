const file_brows = document.querySelector('.file-brows-button');
const file_input = document.querySelector('.file-browse-input');
const fileUploadBox = document.querySelector('.file-upload-box');
const filelist = document.querySelector('.file-list');


file_brows.addEventListener('click',function(){
    file_input.click()
})
file_input.addEventListener('change', (e)=>handleSelecttedFiles(e.target.files))

fileUploadBox.addEventListener('dragover',function(e){
    e.preventDefault();
    fileUploadBox.classList.add('active');
    fileUploadBox.querySelector('.file-instruction').innerText = 'Release to upload or'
});
fileUploadBox.addEventListener('dragleav',function(e){
    e.preventDefault();
    fileUploadBox.classList.remove('active');
    fileUploadBox.querySelector('.file-instruction').innerText = "Drag files here or"
    
});

function createFileItemHTML(file,index){
    ////extracting file name ,size and extension;
    const {name,size} = file;
    const extension = name.split(".").pop();
    console.log(name,extension,size);
    ///Generating HTML For FIle item
    return ` <li class="file-item">
                <div class="files-extension">${extension}</div>
                <div class="file-content-wrapper">
                    <div class="file-content">
                        <div class="file-details">
                            <h5 class="file-name">${name}</h5>
                            <div class="file-info">
                                <small  class="file-size">4 MB / ${size}all>
                                <small  class="file-divider">.</small>
                                <small  class="file-status">Uploading....</small>
                            </div>
                        </div>
                        <button  class="cancel-button">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="file-progress-bar">
                        <div class="file-progress"></div>
                    </div>
                </div>
            </li>
`
    
}

function handleSelecttedFiles([...files]){
    if(files.length === 0) return;
    files.forEach(function(file,index){
       const filelist1 =  createFileItemHTML(file,index);
       filelist.insertAdjacentHTML('afterbegin',filelist1)
    })
}

// function to drop event
fileUploadBox.addEventListener('drop',function(e){
    e.preventDefault()
  handleSelecttedFiles(e.datatransform.files)

})
