

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

var learnMoreOptions = document.querySelectorAll(".learnMoreOption");
var learnMoreView = document.querySelector(".learnMoreView");

var learnMoreContent = [
	["<h3>Our Philosophy</h3><p>At Bay State Learning Center we think that the best and most lasting kind of learning is self-directed learning. At BSLC each student has the opportunity to work with a mentor to design a specialized learning program to fit his or her own needs, strengths, and interests. In addition to personalized support and a regular schedule of optional classes, BSLC provides a safe, comfortable environment where students can work, socialize, and thrive free of the coercion and pressure of traditional school. BSLC serves all kinds of students from successful straight A students who are bored or uninspired, to students who struggle with the imposed structure of school, to students who are disengaged and uninterested in standardized course work. Some want a better outlet for their creative ambitions and others have a specific area or discipline they want to focus on but find that the demands of school displace their interests. BSLC is for kids who need an open, flexible environment where they can find the security and freedom to succeed without irrelevant demands, arbitrary standardization, and institutional uniformity. Students like this can learn more and significantly improve their lives by leaving traditional school behind, and BSLC can provide them the opportunity to do so.</p>"],
	["<h3>Our Program</h3><p>Some things about the program...that the best and most lasting kind of learning is self-directed learning. At BSLC each student has the opportunity to work with a mentor to design a specialized learning program to fit his or her own needs, strengths, and interests. In addition to personalized support and a regular schedule of optional classes, BSLC provides a safe, comfortable environment where students can work, socialize, and thrive free of the coercion and pressure of traditional school. BSLC serves all kinds of students from successful straight A students who are bored or uninspired, to students who struggle with the imposed structure of school, to students who are disengaged and uninterested in standardized course work. Some want a better outlet for their creative ambitions and others have a specific area or discipline they want to focus on but find that the demands of school displace their interests. BSLC is for kids who need an open, flexible environment where they can find the security and freedom to succeed without irrelevant demands, arbitrary standardization, and institutional uniformity. Students like this can learn more and significantly improve their lives by leaving traditional school behind, and BSLC can provide them the opportunity to do so.</p>"],
	["<h3>Our Beliefs</h3><p>Some things about the beliefs of the program...At Bay State Learning Center we think that the best and most lasting kind of learning is self-directed learning. At BSLC each student has the opportunity to work with a mentor to design a specialized learning program to fit his or her own needs, strengths, and interests. In addition to personalized support and a regular schedule of optional classes, BSLC provides a safe, comfortable environment where students can work, socialize, and thrive free of the coercion and pressure of traditional school. BSLC serves all kinds of students from successful straight A students who are bored or uninspired, to students who struggle with the imposed structure of school, to students who are disengaged and uninterested in standardized course work. Some want a better outlet for their creative ambitions and others have a specific area or discipline they want to focus on but find that the demands of school displace their interests. BSLC is for kids who need an open, flexible environment where they can find the security and freedom to succeed without irrelevant demands, arbitrary standardization, and institutional uniformity. Students like this can learn more and significantly improve their lives by leaving traditional school behind, and BSLC can provide them the opportunity to do so.</p>"],
	["<h3>After School</h3><p>Some things about after school ends...At Bay State Learning Center we think that the best and most lasting kind of learning is self-directed learning. At BSLC each student has the opportunity to work with a mentor to design a specialized learning program to fit his or her own needs, strengths, and interests. In addition to personalized support and a regular schedule of optional classes, BSLC provides a safe, comfortable environment where students can work, socialize, and thrive free of the coercion and pressure of traditional school. BSLC serves all kinds of students from successful straight A students who are bored or uninspired, to students who struggle with the imposed structure of school, to students who are disengaged and uninterested in standardized course work. Some want a better outlet for their creative ambitions and others have a specific area or discipline they want to focus on but find that the demands of school displace their interests. BSLC is for kids who need an open, flexible environment where they can find the security and freedom to succeed without irrelevant demands, arbitrary standardization, and institutional uniformity. Students like this can learn more and significantly improve their lives by leaving traditional school behind, and BSLC can provide them the opportunity to do so.</p>"]
];


for(i=0;i<learnMoreOptions.length;i++) {
	(function () {
		var j=i;
		var optionSelected =learnMoreOptions[i];
		optionSelected.addEventListener("click", function() {
			console.log("clicked" + (j+1) + "!");
			learnMoreView.innerHTML = learnMoreContent[j];

			if(hasClass(this,"selected")) {
				console.log("already selected");
			} else {
				var x;
				for(x=0;x<learnMoreOptions.length;x++) {
					removeClass(learnMoreOptions[x],"selected");
				};
				addClass(this,"selected");

			  }
		})
	})();
}

