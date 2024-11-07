const chatinput = document.querySelector('.chat-input textarea');
const sendchatbtn = document.querySelector('#btn');
const chatbox  = document.querySelector('.chatbox');

let usermessage;

sendchatbtn.addEventListener('click',function(){    
  usermessage = chatinput.value.trim();
  if(!usermessage) return;
  chatbox.appendChild(  createchatli(usermessage,'outcoming'))
  setTimeout(() => {
        chatbox.appendChild(createchatli("Thinking....","incoming"))
  }, 600);
});

function createchatli(message,className){
    const chatli = document.createElement('li');
    chatli.classList.add('chat',className);
    let chatcontent= className ==='outcoming' ?`<p>${message}</p>`:`  <i class='fas fa-bookmark'></i><p>${message}</p>`;
    chatli.innerHTML = chatcontent;
    return chatli;

}