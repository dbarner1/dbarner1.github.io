

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
	["<h3>By Phone</h3><p>617-817-1823</p><h3>By Email<p>information@baystatelearning.org</p>"],
	["<h3></h3><p><h3>The Individualized Learning Plan</h3><p>Every mind is different, which means every education will be different. At BSLC we will work with each student to devise an individual education plan. Working with a staff mentor, each student will evolve their own plan based on their interests, passions, and abilities. BSLC staff will assist with discussion, advising, research and brainstorming to help find the best way to pursue the plan. BSLC will also provide the space, resources and support necessary to carry out the plan.</p><h3>Advising Meetings</h3><p>Each student will have a staff mentor who will help the student to achieve their goals. Staff mentors provide a variety of support services like arranging tutorials, tracking progress, and facilitating necessary community connections.</p><h3>Classes, Workshops, and Tutorials</h3><p>BSLC will offer a variety of courses, workshops, and tutorials from Monday - Thursday from 9:00 - 4:00. Look for our calendar page for initial offerings soon. Our core staff will teach many classes and workshops, but we will also draw on our extended staff of work-study students, volunteers, and interns. We have access to work-study students from Boston's many universities and colleges and have many flexible resources to meet student’s needs.  All classes are either conducted in small groups or individually.  Courses and workshops are based on the interests of our students and will change based on demand.</p><h3>Outings</h3><p>One of our core beliefs at BSLC is that learning doesn't just happen in a classroom. Field trips, outings and excursions of all kinds are a part of the BSLC experience. Boston is one of the most culturally rich places on earth and we take advantage of that.  When the weather permits, hikes, camping trips, rock climbing, bird watching, and volunteer conservation projects will also be among the activities students can choose to participate in. We think that engagement with our community and the world are a crucial part of the learning process.</p><h3>An Alternative Approach</h3><p>BSLC is a non-coercive environment for members aged 10-19; we think any learning of consequence must be self-motivated. There is a great deal of research to support this conclusion. We support and advise but we do not try to force or control. All of us in the core staff of BSLC have seen firsthand the negative impact coercive methods have on learning. Attendance at BSLC is voluntary and members are free to come and go throughout the day. The only requirements at BSLC are attendance at the weekly community meeting and to preserve the safe and welcoming environment by treating all staff and students with courtesy and respect.</p>"],
	["<h3>What About College</h3><p>There is a huge population of students in the United States that get into college without going to middle school or high school. In fact, most students who pursue non-traditional education get into college. There are many ways to get accepted to colleges and college admissions officers value home schoolers and students from non-traditional educational backgrounds for their initiative and self-motivation. Colleges have admissions procedures for students who have not attended high school. Colleges want intelligent, passionate, self-confident students, who can do college work regardless of whether or not they have been to high school. BSLC will provide support and all necessary assistance with the college application process.</p><h3>Ways to Transition</h3><p>Portfolio Keeping a well-documented portfolio of your work to present to college admissions officers is usually a successful method. Sometimes colleges will require the student to take a standardized test. At BSLC we can help with all aspects of this process. Community College   Many students at self-directed programs take community college courses as college freshmen and sophomores and then transition to a four year school for their final two years. This is an affordable and common way to transition to college. Often students take community college courses or audit university courses while also attending a self-directed learning center. They can draw on the support of the staff and community of the learning center while they get used to doing college level work and document their work for college admissions purposes. Other Sometimes students are accepted on the basis of interviews, entrance essays, and test scores. There are a variety of ways that non-traditional students have gained admission to college. We are in contact with admissions officers at local universities and consult them regularly. We will consider all options for those students who intend to go to college.</p>"],
	["<h3>Our Staff and Board</h3><h3>George Popham, Executive Director</h3><p>George Popham has been in education for over 13 years. He holds a Master of Liberal Arts from St. John's College, in Santa Fe, NM and a Master of Religious Studies from Boston University. He has taught at community colleges, Boston University's MET college, and at a wide variety of high schools and middle schools. He is licensed to teach English in the state of Massachusetts and has taught at a variety of schools across a wide socioeconomic spectrum. George is interested in gardening, beekeeping, outdoor activities, literature, philosophy and world religions.</p><h3>Avery Kallas, Program Director</h3><p>Avery Kallas is an artist and educator who loves baking, nature, and working with kids.  She spent 5 years working as a counselor at a New Hampshire YMCA Summer Camp while getting her teaching license, and 8 years teaching in public schools- including 4 years working in inner-city Los Angeles, and teaching in a variety of schools around eastern Massachusetts.  She holds a Bachelors of Fine Arts in Arts Educations from Tufts University and The School of The Museum of Fine Arts, Boston.  Avery is licensed to teach 5-12 Art in Massachusetts. </p><h3>Jack Kallas, Instructor</h3><p>Jack attended University of Massachusetts Lowell, where he earned his B.S. in Computer Science and also completed a minor in the French language. Having grown up with a passion for video games, Jack is an avid lover of tech and the arts; he is also a guitar player. Jack often spends his spare time skateboarding or out and about enjoying the serenity of nature. He looks forward to all future adventures and endeavors with the BSLC community!</p><h3>Marjorie Kukstis, Operations Manager</h3><p>Marjorie Kukstis received a Bachelor of Arts in English from Harvard University’s Extension School and is currently studying for her Masters in English Literature there.  She spent 20+ years in the private sector at PricewaterhouseCoopers and now works as a business writer and teaching assistant, in addition to her work at BSLC.  Marjorie works with BSLC’s staff, board, and volunteers to ensure the smooth running of the organization on a day to day basis helping out with everything from important paperwork and recordkeeping to ensuring there is baking soda and flour for the cooking class.  She is an additional resource for both members and their parents and is committed to the educational principles of BSLC.  Marjorie is a fervent sports fan who also loves Shakespeare, the theater and ballet.</p><h3>Abigail Henrich</h3><p>Abby is a pastor of Grace Community Boston (a progressive faith community that meets at Paradise Cafe in Dedham) and the mother of three (her oldest is a Bay State Member). But mostly she is just a fellow traveler wondering how to live in the world as a perpetual learner.  Abby spends a great deal of time doing dishes and folding laundry. She is a collector of stories, a baker, and a terrible knitter. Abby is a graduate of Princeton Theological Seminary and Colgate University.</p><h3>Alexia Pizziferri</h3><h3>Adam Tierney-Eliot, Humanities</h3><h3>Joey Garofalo, Makerspace</h3><h3>Paul Barner, Makerspace</h3><h3>Jonathan Moore</h3><p>Jonathan Moore was born and raised in Massachusetts. He obtained a Bachelor of Arts in Social Thought and Political Economy from the University of Massachusetts at Amherst. Beginning as an undergraduate and continuing for a few years post, he was a campus coordinator for the student funded alternative spring break program. He is an Eagle Scout and has great enthusiasm for outdoor adventure. He has logged a respectable queue of trips sea kayaking, backpacking, mountaineering, and bicycling. He is thrilled to be a part of BSLC.</p><h3>Jared Sweeney, President, Board of Directors</h3><p>Jared is a Vice President at Contravisory Investment Management. He received his BS in Economics from Rensselaer Polytechnic Institute, lived and worked in New York City for almost ten years until relocating both his practice and family back home to Boston. Jared is a native to the Boston area, growing up in Westwood and currently resides in Walpole with his wife and adorable son. Jared's interest in BSLC and selfdirected learning comes from his own educational experience, finding his passion for finance in college.  </p><h3>Dave Barner, Board of Directors, Web Developer</h3><p>Dave is a Full Stack Js Web Developer in Boston.  He received his Bachelors and Masters in Accounting from Babson College.  During the day, he optimizes websites by mixing user discussions and analytics to better empathize and understand what to change.  He hopes self-directed learning soon takes center stage in the Massachusetts educational system.  Dave lives in the Fenway area, and enjoys gardening, building websites, and DJing on occasion.</p><h3>Mary Miller, Board of Directors</h3><h3>Jon Ireland, Board of Directors</h3><h3>Jeff Klaus</h3>"],
	["<h3>After School</h3><p>Physical & Mailing Address: 45 Bullard Street Dedham, MA 02026.  We have been very lucky to develop a strong relationship with the Unitarian Community of Dedham and will be sharing their campus for our fall session.</p>"],
	["<h3>After School</h3><p>Physical & Mailing Address: 45 Bullard Street Dedham, MA 02026.  We have been very lucky to develop a strong relationship with the Unitarian Community of Dedham and will be sharing their campus for our fall session.</p>"],
	["<h3>After School</h3><p>Physical & Mailing Address: 45 Bullard Street Dedham, MA 02026.  We have been very lucky to develop a strong relationship with the Unitarian Community of Dedham and will be sharing their campus for our fall session.</p>"]
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

