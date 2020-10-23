// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

"use strict";
var count = 0;
var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message, xTime) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = msg;
    var u = user;

    var k = document.createElement("div");

    k.style.marginBottom = "0";
    k.style.color = "blue";
    k.style.fontSize = "22px";
    k.style.fontWeight = "bold";
    k.textContent = u;
    document.getElementById("messagesList").appendChild(k);

    var d = document.createElement("div");
    d.style.marginBottom = "0";
    d.style.color = "gray";
    d.style.fontSize = "20px";
    d.style.marginBottom = "15px";
    d.textContent = "(" + xTime + ") " + encodedMsg;
    document.getElementById("messagesList").appendChild(d);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;

    if (document.getElementById("messageInput").value.length == 0) {
        alert("Du måste fylla i ett meddelande...")
        throw new Error("Input is empty...");
    } else {
        document.getElementById("messageInput").value = "";
    }

    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    var xTime = h + ":" + m + ":" + s;

    connection.invoke("SendMessage", user, message, xTime).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
