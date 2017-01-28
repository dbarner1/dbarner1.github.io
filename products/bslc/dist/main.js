
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

//WHY BOXES

var featuredWhyBoxContents = document.querySelector(".why-box-featured");
var whyBox1 = document.querySelector(".whyBox1");
var whyBox2 = document.querySelector(".whyBox2");
var whyBox3 = document.querySelector(".whyBox3");

whyBox1.addEventListener("click", function() {
  featuredWhyBoxContents.innerHTML = whyBox1.innerHTML;
  featuredWhyBoxContents.classList +=" clickedWhy1 ";

});

whyBox2.addEventListener("click", function() {
  featuredWhyBoxContents.innerHTML = whyBox2.innerHTML;
  featuredWhyBoxContents.classList +=" clickedWhy2 ";

});

whyBox3.addEventListener("click", function() {
  featuredWhyBoxContents.innerHTML = whyBox3.innerHTML;
  featuredWhyBoxContents.classList +=" clickedWhy3 ";

});

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
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Banner

var banner = document.querySelector(".bannerAnnouncement");
var closeBannerButton = document.querySelector(".closeBanner");
var headlineDiv = document.querySelector(".headline");
var headlineDiv3 = document.querySelector(".headline h3");
//var middleSubHeroDiv = document.querySelector(".middleSubHero");

closeBannerButton.addEventListener("click", function() {
  console.log("hey");
    addClass(banner, "hide");
    addClass(closeBannerButton, "hide");
    removeClass(banner, "bannerAnnouncement");
    removeClass(closeBannerButton, "closeBanner");
    addClass(headlineDiv, "noBannerAnnouncement");
    addClass(headlineDiv3, "noBannerAnnouncement");
   // addClass(middleSubHeroDiv, "noBannerAnnouncement");
})




