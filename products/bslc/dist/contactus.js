

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

var contactUsOptions = document.querySelectorAll(".contactUsOption");
var contactUsView = document.querySelector(".contactUsView");

var contactUsContent = [
	["<h3>By Phone</h3><p>617-817-1823</p><h3>By Email<p>information@baystatelearning.org</p>"],
	["<h3>George Popham: Executive Director/Instructor</h3><p>george@baystatelearning.org</p><h3>Avery Kallas: Program Director/Instructor</h3><p>avery@baystatelearning.org</p><h3>Marjorie Kukstis: Operations Director</h3><p>marjorie@baystatelearning.org</p><h3>Jack Kallas: Instructor</h3><p>jack@baystatelearning.org</p><h3>Paul Barner: Makerspace Instructor</h3><p>pkbarner@gmail.com</p>"],
	["<h3></p>"],
	["<h3>"],
	[""],
	[""],
	[""]
];


for(i=0;i<contactUsOptions.length;i++) {
	(function () {
		var j=i;
		var optionSelected =contactUsOptions[i];
		optionSelected.addEventListener("click", function() {
			console.log("clicked" + (j+1) + "!");
			contactUsView.innerHTML = contactUsContent[j];

			if(hasClass(this,"selected")) {
				console.log("already selected");
			} else {
				var x;
				for(x=0;x<contactUsOptions.length;x++) {
					removeClass(contactUsOptions[x],"selected");
				};
				addClass(this,"selected");

			  }
		})
	})();
}

