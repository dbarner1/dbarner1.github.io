//SMOOTH SCROLLING CODE

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//WINDOW RESIZING CODE

$(document).ready(function(){
resizeDiv();
});

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
$('.CTA').css({'width': vpw + 'px'});
$('.CTA').css({'height': vph + 'px'});
$('#sub-heroes-title').css({'height': vph + 'px'});
$('#sub-heroes-title').css({'width': vpw + 'px'});
$('#companies').css({'height': (vph-(.3*vph)) + 'px'});
$('#companies').css({'width': vpw + 'px'});

}

