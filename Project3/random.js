  $(function() {

            var imgCount = 5;
            var dir = '../dougthepug/';
            var images = new Array();

            images[0] = "1a.jpg";
            images[1] = "2a.jpg";
            images[2] = "3a.jpg";
            images[3] = "4a.jpg";
            images[4] = "5a.jpg";
            
                        
         var randomBG = function() {

                var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;

                document.getElementById("divID").style.backgroundImage = "url(" + dir + images[randomCount] + ")"; 
            };
            $(window).on("scroll", randomBG);
        });