(function() {
var config = {
    apiKey: "AIzaSyCBQL_9bUFei73WZzFMb8JPF30TH_LONV8",
    authDomain: "hbb-36f85.firebaseapp.com",
    databaseURL: "https://hbb-36f85.firebaseio.com",
    projectId: "hbb-36f85",
    storageBucket: "",
    messagingSenderId: "230716773049"
};
 firebase.initializeApp(config);
    


var messagesRef = firebase.database().ref('messages');

document.getElementById("contact__form").addEventListener('submit', sendForm);

function getInputVal(id) {
    return document.getElementById(id).value;
}

function sendForm(e) {
    e.preventDefault();
    console.log('ide');
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

})();