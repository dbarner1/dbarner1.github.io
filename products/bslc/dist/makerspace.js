

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

var makerspaceOptions = document.querySelectorAll(".makerspaceOption");
var makerspaceView = document.querySelector(".makerspaceView");

var makerspaceContent = [
	["<h3>Our Maker's Philosophy</h3><p>Something about makerspace philosophy here.</p>"],
	["<h3>Example Projects</h3><p><h3>Pics and explanations will go here.</p>"],
	["<h3>Future Plans</h3><p>Future plans will go here.</p>"],
]


for(i=0;i<makerspaceOptions.length;i++) {
	(function () {
		var j=i;
		var optionSelected =makerspaceOptions[i];
		optionSelected.addEventListener("click", function() {
			console.log("clicked" + (j+1) + "!");
			makerspaceView.innerHTML = makerspaceContent[j];

			if(hasClass(this,"selected")) {
				console.log("already selected");
			} else {
				var x;
				for(x=0;x<makerspaceOptions.length;x++) {
					removeClass(makerspaceOptions[x],"selected");
				};
				addClass(this,"selected");

			  }
		})
	})();
}


//Slideshow

var slideshowImages = [
	["<img src='img/dedhamfirstchurch.jpeg'/>"],
	["<img src='img/rollingWall.png'/>"],
	["<img src='img/pumpkins.jpeg'/>"],
	["<img src='img/class.png'/>"],
	["<img src='img/books_bg.png'/>"],
	["<img src='img/greenBG.png'/>"]
]

var slideshowArrow = document.querySelector(".arrow");
var slideshowDiv = document.querySelector(".slideshow");
var otherPicsDiv = document.querySelector(".otherPics");

var i;
var j;
var i=0;

slideshowArrow.addEventListener("click", function () {

	if(i<6) {
	slideshowDiv.innerHTML= slideshowImages[i];
	i++;}
	else {
		i=0;
		slideshowDiv.innerHTML= slideshowImages[0];
	}
});
	
otherPicsDiv.children[0].innerHTML = slideshowImages[0];	
otherPicsDiv.children[1].innerHTML = slideshowImages[1];
otherPicsDiv.children[2].innerHTML = slideshowImages[2];
otherPicsDiv.children[3].innerHTML = slideshowImages[3];

var smallPics = otherPicsDiv.children;
for(i;i<smallPics.length;i++) {
		console.log("hey");
		(function(j) {
			var j=i;
			console.log("hi" + j);
			otherPicsDiv.children[j].addEventListener("click", function() {
			slideshowDiv.innerHTML = slideshowImages[j];
			});
		})();
}

