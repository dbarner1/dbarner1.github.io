  /*******************************************************
 ***Author: Dave Barner***********************************
 ***Other Code Used: None*********************************
 ***Other Frameworks Used: None***************************
 ***Description: A simple blackjack game I believed would
 best display key Javascript concepts.  Note: This version
 has some caveats: (1) Aces are always 'high' (11) and (2)
 There are no face cards.*********************************
 *********************************************************
 ********************************************************/



 /*******************************************************
 ***VARIABLES********************************************
 ********************************************************/

/*Note: Shown in a way that's hard to understand when coding, but mirrors and sass compression.*/
var your_card_1, your_card_2, your_sum, dealer_card_1, dealer_card_2, dealer_sum, first_hit_or_stay, hit_or_stay, your_new_card, dealer_new_card, i, win_message, lose_message;




 /*******************************************************
 ***FUNCTIONS********************************************
 ********************************************************/

/*Welcome the user, and invite them to play.
  Also, deal them their cards, so if they hit 
  21 we can let them know in the event they play.*/
function welcome() {
	console.log("Ran: welcome()");
	welcome_msg = prompt("Welcome to JS Blackjack!  If you'd like to play, enter 'play'.");
	console.log("Responded:" + welcome_msg);
	your_card_1 = Math.floor(11*Math.random())+1;
	your_card_2 = Math.floor(11*Math.random())+1;
	your_card_3 = Math.floor(11*Math.random())+1;
	dealer_card_1 = Math.floor(11*Math.random())+1;
	dealer_card_2 =  Math.floor(11*Math.random())+1;
	your_sum = your_card_1 + your_card_2;
	dealer_sum = dealer_card_1 + dealer_card_2;
	console.log("The user's cards total " + your_sum);

	if(welcome_msg.toLowerCase() === "play") {
		console.log("wants to play");
		validate_first();
	}

	else{
		bye();
		console.log("doesn't want to play");
	}
}	

/*Understand if their cards are 21.  If they are, they 
get notified right away that they won, and the game
is over.  If they're over 21 initially (should never happen) they're told the game is over (this would be a bug!).
Otherwise, they're dealt cards.*/

function validate_first() {
	console.log("validate first()")
		if(your_sum===21) {
			console.log("win();");
			win();
		console.log("win 1");
		}

		if(your_sum<21) {
			console.log("running deal();");
			deal();
		}

		else {
			console.log("Error: Lost.");
			lose();
		console.log("lose 1");
			;
		}
}

/*If there initial cards are less than 21, deal them a new card and ask them
if they want to hit or stay.  If they hit, they go into the "hit" cycle.  If they stay,
they go to the "stay" cycle.*/

function deal_first() {
	first_hit_or_stay = prompt("The cards hit the table.  You have a " + your_card_1 + " and a " + your_card_2 + ".  The dealer is showing a " + dealer_card_1 + ".  Type 'hit' to hit.  'stay' to stay.");
	if(first_hit_or_stay.toLowerCase() === "hit") {
		hit();
		console.log("hit()");
	}
	else {
		hit_dealer();
				console.log("hit_dealer()");
	}
}

/*If they hit, we'll give them another card, and validate their total to see if its over 21, 21, or less than*/

function hit() {
	your_new_card = Math.floor(11*Math.random())+1;
	your_sum += your_new_card;
	validate();
}

/*This is the function to validate their total.  It's like validate_first, but a different message.
Refactor this later*/
function validate() {
	console.log("validate()");

		if(your_sum===21) {
			console.log("win();");
			win();
		}

		if(your_sum<21) {
			console.log("deal();");
			deal();
		}

		else {
			console.log("deal();");	
			lose();
		}
}

/*If the user wins, they get this message*/
function win() {
		win_message =  "You win.  You had " + your_sum + ". The dealer had " + dealer_sum + ".  This e-coffee is on us!";
		document.getElementById("answer").innerHTML = win_message;	
}

/*If the user loses, they get this message:*/
function lose() {
		lose_message = "You lost this game. You had " + your_sum + ".  The dealer had " + dealer_sum + ". Thankfully, the only losers are those who call other players losers.";
		document.getElementById("answer").innerHTML = lose_message;	
}

/*If the user doesn't want to play, they get this message:*/
function bye () {
		bye_message =  "Thanks for stopping bye.  Refresh this page if you change your mind, and would like to play.";
		document.getElementById("answer").innerHTML = bye_message;	
}


/*If the user hits again, they get this*/

function deal() {
	hit_or_stay = prompt("Your cards now total " + your_sum + ".  The dealer is still showing a " + dealer_card_1 + ".");
	if(hit_or_stay==="hit") {
		hit();
	}
	if(hit_or_stay==="stay") {
		hit_dealer();
	}
}

/*If the user stays, we verify the dealer is over 16, and if not, keep giving them cards until they are.
Then, when they're over 16, we see if they have 21 or not.*/

function stay() {

	if(dealer_sum>21) {
		win();
		console.log("win 5 - dealer bust")
	}

	else {
		if(your_sum===dealer_sum) {
		lose();
		console.log("lose 3");
		}

		if(your_sum<dealer_sum) {
		lose();

		console.log("lose 4");	
		}

		if(your_sum>dealer_sum) {
		win();
		console.log("win 2");		
		}
	}
}

function hit_dealer () {

	if (dealer_sum<16) {
		for (dealer_sum;dealer_sum<15;dealer_sum+=dealer_new_card) {
			dealer_new_card = Math.floor(11*Math.random())+1;
			dealer_sum+=dealer_new_card;
			console.log(dealer_new_card + " is your new dealer card");
			console.log(dealer_sum + " is new dealer total");
		}
	stay();
	}
}

/*Run Welcome*/
welcome();





