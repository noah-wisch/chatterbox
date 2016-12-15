
function init() {

}

function getChat() {
    let request = XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
    });
    request.send();
    console.log('chat sent');
}

window.addEventListener('load', init);