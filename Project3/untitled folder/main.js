i = 0;

$(document).ready(function(){


    $(window).keypress(function(e) {
        var value = Math.floor(Math.random() * 13);

        Chat.sendMessage({
          sender: 'Doug the Pug',
          type: 'raw',
          value: value
        });

        $("span").text(i += 1);
    });   
});




var imageValues = {
  
  0: 'image0',
  1: 'image1',
  2: 'image2',
  3: 'image3',
  4: 'image4',
  5: 'image5',  
  6: 'image5',  
  7: 'image7',  
  8: 'image8', 
  9: 'image9',   
};



var messageContainer = document.querySelectorAll('.messages')[0];
var addLink = document.querySelectorAll('.add-link')[0];
var quoteValues = {
  0: 'quote1',
  1: 'quote2',
  2: 'quote3',
  3: 'quote4',
  4: 'quote5', 
  5: 'quote6', 
  6: 'quote7', 
  7: 'quote8', 
  8: 'quote9', 
  9: 'quote0', 
  
  
};



Chat.onMessage(function (data) {

  var quote = $("." + quoteValues[data.value]);
  var image = $("." + imageValues[data.value]);


  $(".quote").hide ();
  console.log(quote.show());

 $(".image").hide ();
  console.log(image.show());

  
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







