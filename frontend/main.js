// alert("Welcome to a simple website");
document.getElementById("sendMessage").addEventListener("click", SendMessage);

function Pi() 
{
    return Math.PI;
}

function SendMessage()
{
    var newMessage = document.getElementById("newMessage").value;

    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = "http://localhost:3000/newMessage"; 

    // open a connection 
    xhr.open("POST", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 
            // Print received data from server 
            result.innerHTML = this.responseText; 

        } 
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({ "userId": 123, "newMessage": newMessage }); 

    // Sending data with the request 
    xhr.send(data); 

    document.getElementById("newMessage").value = "";
}