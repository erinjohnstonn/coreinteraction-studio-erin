i = 0;

$(document).ready(function(){

    var sendDoug = function(){
        alert('Doug the Pug');
    };



    $(window).keypress(function(e) {
        var value = Math.floor(Math.random() * 13);

        Chat.sendMessage({
          sender: 'Dan Brewster',
          type: 'raw',
          value: value
        });

       sendDoug();
        $("span").text(i += 1);
    });   
});

/*

var messageContainer = document.querySelectorAll('.messages')[0];
var addLink = document.querySelectorAll('.add-link')[0];


Chat.onMessage(function (data) {
  var message = document.createElement('div');
  message.className = 'message';
  message.innerHTML += 'From: ' + data.sender + '<br>';
  message.innerHTML += 'Type: ' + data.type + '<br>';
  message.innerHTML += 'Value: ' + data.value;
  messageContainer.appendChild(message);
});

Chat.onUserCountChange(function (newCount) {
  var userCountElement = document.querySelector('.user-count');
  userCountElement.innerHTML = newCount;
});

*/