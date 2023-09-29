var connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

connection.on("ReceiveMessage", function (fromUser, message) {
    var msg = fromUser + ": " + message;
    var li = document.createElement("li");
    li.textContent = msg;

    $("#list").prepend(li);
});

connection.start();

$("#btnSend").on("click", function () {
    var fromUser = $("#textUser").val();
    var message = $("#textMessage").val();

    connection.invoke("SendMessage", fromUser, message);
})
