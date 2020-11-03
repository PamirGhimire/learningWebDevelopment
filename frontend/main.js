function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

document.getElementById("sendMessage").addEventListener("click", SendMessage);
let userId = makeid(5);

function SendMessage()
{
    var newMessage = document.getElementById("newMessage").value;

    xhr = new XMLHttpRequest(); 
    var url = "http://localhost:3000/newMessage"; 
    xhr.open("POST", url, true); 
    xhr.setRequestHeader("Content-type", "application/json"); 
    xhr.onreadystatechange = function () {  
        if (xhr.readyState == 4 && xhr.status == 200) { 
            var json = JSON.parse(xhr.responseText); 
            console.log(json.email + ", " + json.name) 
        } 
    } 
    var data = JSON.stringify({"userId": String(userId), "newMessage": newMessage}); 
    xhr.send(data);

    document.getElementById("newMessage").value = "";
}