var messagesRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener('submit', sendForm);

function getInputVal(id) {
    return document.getElementById(id).value;
}

function sendForm(e) {
    e.preventDefault();

    var name= getInputVal('name-field');
    var mail = getInputVal('mail-field');
    var message = getInputVal('message-field');

    saveMessage(name, mail, message);

  }

  function saveMessage(name, mail, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: mail,
        message: message
    })
}