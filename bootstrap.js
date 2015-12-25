$(document).ready(function(){
    "use strict";
    
  $(function () { 
      $(".headline").animate({
          "marginTop": "160px"
      }, 2200, "swing");
  });

  $(function () {
      $(".subtitle")
          .animate({"marginTop": "-15px"}, 2200, "swing")
          .animate({"opacity": 1}, 1500);
  });

  $(function () {
      $(".bgimage")
          .animate({"opacity": "1"}, 1000)
          .animate({"opacity": "0.5"}, 1700)
          .animate({"opacity": "1"}, 1200);
  });

  $('#arrow').localScroll({duration:800, offset: -50});
  
  $('#aboutscroll').localScroll({duration:800, offset: -50});
  
  $('#adaptscroll').localScroll({duration:800, offset: -50});
  
  $('#projectscroll').localScroll({duration:800, offset: -50});
  
  $('#vizscroll').localScroll({duration:800, offset: -50});
 
  $('#csscroll').localScroll({duration:800, offset: -50}); 
  
  $('#columnscroll').localScroll({duration:800, offset: -50}); 
 
  $('#photoscroll').localScroll({duration:800, offset: -50});   

  $(function () {
    $("#arrow")
      .animate({"opacity": "1"}, 2000)
      .animate({"marginTop": "300px"}, 1000)
      .animate({"marginTop": "325px"}, 1000)
      .animate({"marginTop": "300px"}, 1000)
      .animate({"marginTop": "325px",}, 1000, "linear", function repeatArrow(){
        $("#arrow")
          .animate({"marginTop": "300px"}, 1000)
          .animate({"marginTop": "325px"}, 1000)
          .animate({"marginTop": "300px"}, 1000)
          .animate({"marginTop": "325px",}, 1000, "linear", function(){        
            repeatArrow();
          });
      }); 
  });
});   
