// alert("Welcome to a simple website");
document.getElementById("sendMessage").addEventListener("click", SendMessage);

function Pi() 
{
    return Math.PI;
}

function SendMessage()
{
    var newMessage = document.getElementById("newMessage").value;
    alert(newMessage);
    document.getElementById("newMessage").value = "";
}