//Everything below, until "//end-sucky-code" is sucky, and MUST be refactored when out of time-boxed mode.

var input0 = document.getElementsByTagName("input")[0];
var input1 = document.getElementsByTagName("input")[1];
var input2 = document.getElementsByTagName("input")[2];
var input3 = document.getElementsByTagName("input")[3];

//Delete default values

var updateText0 = function () {
	console.log("clicked first");
	input0.className += " activeValue";
	 if(input0.value="First Name") {input0.value = ''};
};

var updateText1 = function () {
	console.log("clicked second");
	 if(input1.value="Last Name") {input1.value = ''};
};

var updateText2 = function () {
	console.log("clicked third");
	 if(input2.value="Age") {input2.value = ''};
};

var updateText3 = function () {
	console.log("clicked fourth");
	 if(input3.value="Grade") 	 {input3.value = ''};
};

//Re-fill blank values
var updateText10 = function () {
	console.log("off focus first");

	 if(input0.value=" ") {input0.value = 'First Name'; input0.className = "";};
};

var updateText11 = function () {
	console.log("off focus second");
	 if(input1.value=" ") {input1.value = 'Last Name'};
};

var updateText12 = function () {
	console.log("off focus third");
	 if(input2.value=" ") {input2.value = 'Age'};
};

var updateText13 = function () {
	console.log("off focus fourth");
	 if(input3.value=" ") {input3.value = 'Grade'};
};


input0.addEventListener('onfocus',updateText0);
input1.addEventListener('onfocus',updateText1);
input2.addEventListener('onfocus',updateText2);
input3.addEventListener('onfocus',updateText3);
input0.addEventListener('blur',updateText10);
input1.addEventListener('blur',updateText11);
input2.addEventListener('blur',updateText12);
input3.addEventListener('blur',updateText13);

//end-sucky

