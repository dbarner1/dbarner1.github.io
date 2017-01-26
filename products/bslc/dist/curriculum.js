

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

var curriculumOptions = document.querySelectorAll(".curriculumOption");
var curriculumView = document.querySelector(".curriculumView");

var curriculumContent2 = [
	["Monday",
		["Photography",["10:00-11:00am"],["Avery Kallas"],"We will discover how images and the eye works, and peek into the history of photography and photographers.  Students will learn how to take good still photographs with any device from your smartphone to a fancy camera as well as how to shoot good useful video so you can edit it together for video art."],
		["Public Speaking",["11:00-12:00pm"],["Adam Tierney-Eliot"],"In this course we will explore some of the basic skills necessary for public speaking and set them in the context of Aristotle's Rhetoric.  We will take a look at his three elements of persuasion, ethos (reputation or credibility), pathos (emotional and intuitive connection), and logos (reasoned argument) and put them into practice while considering if there is anything the old guy missed."],
		["Self Defense",["12:00-1:00pm"],["Vivian Pratt"],"Improve all of these powerful traits within yourself by learning, and perhaps someday mastering, the art of self defense. In this class we will explore a variety of styles and traditions including Japanese Shotokan, Kenpo, Japanese Juijitsu, Okinawan and others. The techniques that we will study include various forms, locks, takedowns, grappling and sparring. The practice of self defense will improve your strength, balance, movement control and overall fitness - as well as equip you to fight off the occasional attacker!"],
		["Photoshop & the Digital World",["1:00-2:00pm"],["Avary Kallas"],"Using Adobe Photoshop, students will learn the basics of how the program is structured, how to mange, reformat and enhance digital photos, and how to alter them to make their own art.  At the same time, we will discuss how Photoshop and 'photoshopping' has impacted culture, art, fashion, advertising, the world, and maybe us. "],
		["Self Assessment",["2:00-3:00pm"],["George Popham"],"At BSLC Humanities, History, Literature are all intended to be part of a cluster, each class reinforces and highlights the material from the other classes. However, sometimes this can be overwhelming and self-assessment hour is intended to help with this. We'll spend this hour going over our notes from class and isolating the biggest most important themes and ideas. We'll discuss the ways that history, society and politics influence and inspire the literature we read. In self-assessment hour we'll write summaries, flesh out our notes, and ask ourselves questions that anchor our knowledge and deepen our understanding of the material from other classes."]
	],
	["Tuesday",
		["Cooking",["9:30-11:00pm"],["Abigail Henrich"],"This student driven class will allow teens to gain practical cooking skills.  And eat the results! "],
		["Spanish Study Group",["10-11:00pm"],["George Popham "],"This is a group for BSLC learners who have made speaking Spanish a learning goal. In Spanish study group we will devise self-directed strategies for learning Spanish conversation. We will determine our specific goals for each eight week block and find the most effective ways of reaching our goals with the ultimate intention of being able to converse in Spanish."],
		["Beginning Euclid",["11:00-12:00pm"],["George Popham"],"The Elements of Euclid is one of the oldest, best loved and most influential books in the world. It has been used as a math textbook for 2,300 years, but it is much more than a textbook. People that hate math usually enjoy the magic of working with Euclid's elements, because of its beauty and clarity. Math can be beautiful!"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"]
	],
	["Wednesday",
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"]
	],
	["Thursday",
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"],
		["Title",["Time"],["Teacher"],"Description"]
	],
	["Friday",
		["Outing",["Time"],["George Popham","Avery Kallas"],"Description"],
		["Outing",["Time"],["George Popham","Avery Kallas"],"Description"],
		["Outing",["Time"],["George Popham","Avery Kallas"],"Description"],
		["Outing",["Time"],["George Popham","Avery Kallas"],"Description"],
		["Outing",["Time"],["George Popham","Avery Kallas"],"Description"],
		["Outing",["Time"],["George Popham","Avery Kallas"],"Description"],
		["Outing",["Time"],["George Popham","Avery Kallas"],"Description"],
		["Outing",["Time"],["George Popham","Avery Kallas"],"Description"]
	],
	["Saturday",
		["Makerspace",["Time"],["Paul Barner"],"Description"],
		["Makerspace",["Time"],["Paul Barner"],"Description"],
		["Makerspace",["Time"],["Paul Barner"],"Description"],
		["Makerspace",["Time"],["Paul Barner"],"Description"],
		["Makerspace",["Time"],["Paul Barner"],"Description"],
		["Makerspace",["Time"],["Paul Barner"],"Description"],
		["Makerspace",["Time"],["Paul Barner"],"Description"],
		["Makerspace",["Time"],["Paul Barner"],"Description"],
	]
]

for(i=0;i<curriculumOptions.length;i++) {
	(function () {
		var j=i;
		var optionSelected =curriculumOptions[i];

		optionSelected.addEventListener("click", function() {
			console.log("clicked" + (j+1) + "!");

			var curriculumViewMsg = "<h2>" + curriculumContent2[j][0] + "</h2><h3>" + curriculumContent2[j][1][0] + "</h3><p class='time'>" + curriculumContent2[j][1][1] + ", " + curriculumContent2[j][1][2] + "</p><p>" + curriculumContent2[j][1][3] + "</p><h3>" + curriculumContent2[j][2][0] + "</h3><p class='time'>" + curriculumContent2[j][2][1] + ", " + curriculumContent2[j][2][2] + "</p><p>" + curriculumContent2[j][2][3] + "</p><h3>" + curriculumContent2[j][3][0] + "</h3><p class='time'>" + curriculumContent2[j][3][1] + ", " + curriculumContent2[j][3][2] + "</p><p>" + curriculumContent2[j][3][2] + "</p><h3>" + curriculumContent2[j][4][0] + "</h3><p class='time'>" + curriculumContent2[j][4][1] + ", " + curriculumContent2[j][4][2] + "</p><p>" + curriculumContent2[j][4][3] + "</p><h3>" + curriculumContent2[j][5][0] + "</h3><p class='time'>" + curriculumContent2[j][5][1] + ", " + curriculumContent2[j][5][2] + "</p><p>" + curriculumContent2[j][5][3] + "</p>";


			curriculumView.innerHTML = curriculumViewMsg;
	 		
			if(hasClass(this,"selected")) {
				console.log("already selected");
			} else {
				var x;
				for(x=0;x<curriculumOptions.length;x++) {
					removeClass(curriculumOptions[x],"selected");
				};
				addClass(this,"selected");

			  }
		})
	})();
}

