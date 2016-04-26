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








var messageContainer = document.querySelectorAll('.messages')[0];
var addLink = document.querySelectorAll('.add-link')[0];
var quoteValues = {
  0: 'quote1',
  1: 'quote2',
  2: 'quote3',
  3: 'quote4',
  4: 'quote5',  
};

var imageValues = {
  5: 'image1',
  6: 'image2',
  7: 'image3',
  8: 'image4',
  9: 'image5',  
};

Chat.onMessage(function (data) {
  var message = $('<div></div>');
  var quote = $("." + quoteValues[data.value]);
  alert(quote.html());
  $(message).addClass(quoteValues[data.value]);
  if (data.sender == username) {
     $(message).addClass('from-current-user');
  }

  $(messageLabel).html(data.sender);
  $(message).append(messageLabel);
  $('.message-container').append(message);
});
Chat.onUserCountChange(function (currentCount) {
    if (currentCount > 20) {
    currentCount = 20;
  }










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







