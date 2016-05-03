i = 0;

$(document).ready(function(){


    $(window).keypress(function(e) {
        var value = Math.floor(Math.random() * 13);

        Chat.sendMessage({
          sender: 'DougthePug',
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
  10:'image10',
  11:'image11',
  12:'image12'
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
  10: 'quote10',
  11: 'quote11',
  12: 'quote12'

  
};


Chat.onMessage(function (data) {

  var quotes = $("." + quoteValues[data.value]);
  var images = $("." + imageValues[data.value]);

  var quote = $(quotes[Math.floor(Math.random() * quotes.length)]);
  var image = $(images[Math.floor(Math.random() * images.length)]);


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







