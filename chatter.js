function init() {
    //getChat();
    let getMessage = document.querySelector('#receive');
    getMessage.addEventListener('click', getChat);

    // let sendMessage = document.querySelector('#sent');
    // sendMessage.addEventListener('click', submitChat);
}

function getChat() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);

        for (let i = 0; i < response.chats.length; i++) {
            let chat = response.chats[i];
            console.log(chat.from);
            showChat(chat);
        }
    });

    request.send();
    console.log('chat requested');
}

function showChat(loyalUser) {
    let from = 'From: ';
    let text = 'Message: ';

    let user = document.querySelector('#user');
    user.textContent = loyalUser.from;

    let message = document.querySelector('#content');
    message.textContent = loyalUser.message;
   
    let messages = document.createElement('li');
    messages.textContent = from + loyalUser.from + ' ' + text + loyalUser.message;

    let parent = document.querySelector('.messages');
    parent.appendChild(messages);
}

// function submitChat() {
//     let request = new XMLHttpRequest();
//     request.open('POST', 'http://api.queencityiron.com/chats');
//     request.addEventListener('load', function () {
//         let response = JSON.parse(request.responseText);
//     });
//     request.send();
//     console.log('chat sent');
// }

window.addEventListener('load', init);

