//DOUGHNUT

var doughnutButton = document.getElementById("doughnutButton");
var navUl = document.getElementById("ul");
var doughnut = document.getElementsByClassName("doughnut")[0];
var doughDiv = document.getElementsByClassName("dough")[0];
var msg;

doughnutButton.addEventListener("click", function() {
    updatemsg();
 
    doughnut.classList.toggle("fallFromSky");
});

function updatemsg () {
  console.log("ran updatemsg");

  switch (msg) {
    case undefined:
      msg="Done?";
      break;
    case "Done?":
      msg="For You";
      break;
    case "For You":
      msg="Done?";
      break;
  }

  doughnutButton.innerHTML = msg; 
}
    






//SMOOTH SCROLLING CODE

$(document).ready(function(){
  // Add smooth scrolling to all "arrow" image links
  $(".arrow").on('click', function(event) {

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
$('#companies').css({'height': (vph-(.3*vph)) + 'px'});
$('#companies').css({'width': vpw + 'px'});
}

//SAFARI FLEXBOX FIX

var userAgent = navigator.userAgent.toLowerCase(); 
    if (userAgent .indexOf('safari')!=-1){ 
       if(userAgent .indexOf('chrome')  > -1){
        
       }else if((userAgent .indexOf('opera')  > -1)||(userAgent .indexOf('opr')  > -1)){
          
       }else{//Is Safari
          var portfolioPieces = document.querySelector( ".portfolio-pieces" ); 
          var lovely = document.querySelector( ".lovely" ); 
             portfolioPieces.classList.add( "safariParent" );
             lovely.classList.add( "safariParentLove" );
       }
    }

