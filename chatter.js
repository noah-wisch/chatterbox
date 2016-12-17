function init() {
    getChat();
    let getMessage = document.querySelector('#receive');
    getMessage.addEventListener('click', showChat);
    let send = document.querySelector('#sent');
    send.addEventListener('click', submitChat);

}

function getChat() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);

        for (let i = 0; i < response.chats.length; i++) {
            let chat = response.chats[i];

            // for (let j = 0; j < i.length; j++) {
            //     let newestChat = response.chats[j];
            //     showChat(newestChat);
            // }
            //tried to use this ^^^ for loop to get the new messages, didn't work though
            console.log(chat.from);
            showChat(chat);
        }
    });
    request.send();
    // console.log('chat requested');
}

function showChat(loyalUser) {

    let message = document.createElement('li');

    let parent = document.querySelector('.inMessages');
    parent.appendChild(message);

    let user = document.createElement('p');
    message.appendChild(user);
    user.textContent = 'From: ' + loyalUser.from;

    let content = document.createElement('p');
    content.textContent = 'Message: ' + loyalUser.message;
    message.appendChild(content);
}

function submitChat() {
    console.log('good');
    let request = new XMLHttpRequest();
    request.open('POST', 'http://api.queencityiron.com/chats');
    // on load, getChat();
    let body = JSON.stringify({
        message: document.querySelector('#write').value,
        from: document.querySelector('#name').value,
    });
    request.send(body);

    let chat = {
        message: document.querySelector('#write').value,
        from: document.querySelector('#name').value,
    }
    // We can call the showChat function at any time. 
    // Up above, we are showing chats we got from the api.
    // Down here, we are just calling showChat to display
    // the message we wrote and submitted without clicking
    // Get Message.

    showChat(chat);
    document.querySelector('#write').value = ("");
    document.querySelector('#name').value = ("");
}

window.addEventListener('load', init);




