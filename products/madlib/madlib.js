console.log("Begin Program");


					console.log("Game Started");	

					var prompt_accept = prompt("Would you like to play a Madlib game? A: Yes B: No");

					if 	(prompt_accept === 'A') 
						{
							alert('Awesome!  Click "OK" to play');						
											var color1 = prompt("What's your favorite color?");
											var phrase1 = prompt("What's your favorite phrase?");
											var music1 = prompt("What's your favorite type of music?");
											document.write("<h3>The lizard says:<br><br><br>	 Hey man, got any " + color1 + " headphones so I can listen to " + music1 + " while saying the dopest phrase '" + phrase1 + "'?</h3>")
											document.write("<style>body h3 {color:white;} body {background:url(../../images/lizard.jpg); body background-position:center background-size:auto;</style>")
											console.log("Answered A");/*A answer*/
											var game = color1;
						}

					if (prompt_accept === 'a') 
						{
							alert("Awesome!");
							console.log("Answered A");
											var color1 = prompt("What's your favorite color?");
											var phrase1 = prompt("What's your favorite phrase?");
											var music1 = prompt("What's your favorite type of music?");
											document.write("<h3>The lizard says:<br><br><br>	 Hey man, got any " + color1 + " headphones so I can listen to " + music1 + " while saying the dopest phrase '" + phrase1 + "'?</h3>")
											document.write("<style>body {background:red;}</style>")
											console.log("Answered A");/*A answer*/
											var game = color1;
						};/*a answer*/

					if (prompt_accept === 'B') 
						{
							alert("Well, maybe next time!");
							console.log("Answered B");
						};/*B answer*/

					if (prompt_accept === 'b') 
						{
							alert("Well, maybe next time!");
							console.log("Answered B");
						};/*B answer*/
				/*
					else {
						alert("Hmmm...we didn't understand that.  Can you reload this page and try again?");
						}/*All other answers*/
			    




