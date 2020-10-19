// alert("Welcome to a simple website");
document.getElementById("sendMessage").addEventListener("click", SendMessage);

function Pi() 
{
    return Math.PI;
}

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
    var data = JSON.stringify({"userId": 123, "newMessage": newMessage}); 
    xhr.send(data);

    document.getElementById("newMessage").value = "";
}