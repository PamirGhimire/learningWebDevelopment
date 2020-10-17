// alert("Welcome to a simple website");
document.getElementById("button1").addEventListener("click", Button1Callback);
document.getElementById("button2").addEventListener("click", Button2Callback);

function Pi() 
{
    return Math.PI;
}

function Button1Callback()
{
    document.getElementById("outputText").innerHTML = "You clicked button 1!";
}

function Button2Callback()
{
    document.getElementById("outputText").innerHTML = "You clicked button 2!";
}