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

        for (let i = 0; i < response.chats.length; i++){
        let chat = response.chats[i];
        showChat(chat);
        }
    });

    request.send();
    console.log('chat requested');
}

function showChat(loyaUser) {
    let user = document.querySelector('#user');
    user.textContent = loyaUser.chats.from;

    let parent = document.querySelector('#message');
    parent.appendChild(user);
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

