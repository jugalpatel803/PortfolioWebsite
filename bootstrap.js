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

  $('#arrow').localScroll({duration:1200, offset: -50});
  $('#aboutscroll').localScroll({duration:1200, offset: -50});
  $('#adaptscroll').localScroll({duration:1200, offset: -50});
  $('#projectscroll').localScroll({duration:1200, offset: -50});
  $('#vizscroll').localScroll({duration:1200, offset: -50});
  $('#csscroll').localScroll({duration:1200, offset: -50}); 
  $('#columnscroll').localScroll({duration:1200, offset: -50}); 
  $('#photoscroll').localScroll({duration:1200, offset: -50});
  $('#photomescroll').localScroll({duration:1200, offset: -50}); 
  $('#photobymescroll').localScroll({duration:1200, offset: -50});  

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
    
// INTERACTIVES VIDEO AUTOPLAY
    
  var video = document.getElementById("video");
  function checkScroll() {
    var fraction = 0.8;
    var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
      b = y + h, //bottom
      visibleX, visibleY, visible;

      visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
      visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

      visible = visibleX * visibleY / (w * h);

      if (visible > fraction) {
        $('#video').get(0).play()
      } else {
          $('#video').get(0).pause()
        }
  }

  window.addEventListener('scroll', checkScroll, false);
  window.addEventListener('resize', checkScroll, false);
});

// MODAL WINDOW

(function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

$(function(){    
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');

        var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="100%" height="500">No Support</object>'
        $.createModal({
            title:'Resume',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;        
    });    
})

      (function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);


      $(function(){    
          $('.view-pdf').on('click',function(){
              var pdf_link = $(this).attr('href');
              //var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
              //var iframe = '<object data="'+pdf_link+'" type="application/pdf"><embed src="'+pdf_link+'" type="application/pdf" /></object>'        
              var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="100%" height="500">No Support</object>'
              $.createModal({
                  title:'Resume',
                  message: iframe,
                  closeButton:true,
                  scrollable:false
              });
              return false;        
          });    
      })

