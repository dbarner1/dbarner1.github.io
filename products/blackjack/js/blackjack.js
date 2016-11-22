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
var your_card_1
	, your_card_2
	, your_sum
	, dealer_card_1
	, dealer_card_2
	, dealer_sum
	, first_hit_or_stay
	, hit_or_stay
	, your_new_card
	, dealer_new_card
	, i, win_message
	, lose_message;

var win_count = 0;
var lose_count = 0;

var deal_button = document.getElementById('deal_me');
var user_msg = document.getElementById('user_msg');
var actiondiv = document.getElementById('actions');

 /*******************************************************
 ***MESSAGES*********************************************
 ********************************************************/


 /*******************************************************
 ***BUTTONS**********************************************
 ********************************************************/

var hit_button = document.createElement("button");
hit_button.className = "hit";
hit_button.innerHTML = "Hit Me!";

var stay_button = document.createElement("button");
stay_button.className = "stay";
stay_button.innerHTML = "I'll Stay";

 /*******************************************************
 ***FUNCTIONS********************************************
 ********************************************************/

//Welcomes the user, and asks them if they want to hit or stay.
var deal_first = function () {
	//Log that the game began.
	console.log("Clicked 'Deal me in!'");

    stay_button.style.visibility = 'visible';
    hit_button.style.visibility = 'visible';

	//Deal all cards for the user, and the dealer.
	your_card_1 = Math.floor(11*Math.random())+1;
	your_card_2 = Math.floor(11*Math.random())+1;
	your_card_3 = Math.floor(11*Math.random())+1;
	dealer_card_1 = Math.floor(11*Math.random())+1;
	dealer_card_2 =  Math.floor(11*Math.random())+1;

	//Caculate card totals for the user and dealer
	your_sum = your_card_1 + your_card_2;
	dealer_sum = dealer_card_1 + dealer_card_2;

	//Log the user's card total after first deal to the console.
	console.log("The user's cards total " + your_sum);
	
	//Run script to see if user hit 21, went over, or should play (before we ask them to hit or stay.)
	validate_first();
}

	
//Checks user's total, and responds with relevant message.
function validate_first() {

		//Log that this function ran.
		console.log("validate_first()")

		//If 21, tell the user they won!
		if(your_sum===21) {
			console.log("Initial user count is 21");
			win();
			console.log("win 1");
		}
		//If under 21, tell the user they can hit or stay via the "deal" function.
		if(your_sum<21) {
			console.log("Initial user count <21");
			deal();
		}
		//This should never happen, but if the cards are over 21, the user will lose, and we log an error to the console.
		else {
			console.log("Error: User lost.  Please contact the developer of this app at http://dbarner.me");
			lose();
			console.log("lose 1");
			;
		}
}

/*If there initial cards are less than 21, deal them a new card and ask them
if they want to hit or stay.  If they hit, they go into the "hit" cycle.  If they stay,
they go to the "stay" cycle.*/

function deal() {
	console.log("deal()");

	document.getElementById("user_msg").innerHTML = "<p>The cards hit the table.</p><br><p>You show<p>" + your_card_1 + " and " + your_card_2 + "</p><br><p> The dealer is showing</p><p>" + dealer_card_1 + "</p>";

	actiondiv.appendChild(hit_button);
	actiondiv.appendChild(stay_button);

	console.log("Dealer sum is " + dealer_sum);
	hit_button.onclick = hit;
	stay_button.onclick = hit_dealer;
}

var hit = function () {
	your_new_card = Math.floor(11*Math.random())+1;
	your_sum += your_new_card;
	console.log("User's new sum is " + your_sum);
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
			deal_again();
		}

		else {
			console.log("deal();");	
			lose();
		}
}

/*If the user wins, they get this message*/
function win () {
		console.log("user wins");
		user_msg =  "<b>You win!</b> <br>  You had<br>" + your_sum + "<br> The dealer had<br>" + dealer_sum + "<br>This e-coffee is on us!";
		document.getElementById("user_msg").innerHTML = user_msg;	

		win_count+=1;
		document.getElementById("user_win_msg").innerHTML = "<p>You won " + win_count + " games";

		stay_button.style.visibility = 'hidden';
        hit_button.style.visibility = 'hidden';
}

/*If the user loses, they get this message:*/
function lose () {
		console.log("dealer wins");
		user_msg = "You lost this game. Bummer.<br>You had<br>" + your_sum + "<br>The dealer had<br>" + dealer_sum + "<br><br>Thankfully, the only losers are those who call other players losers.";
		document.getElementById("user_msg").innerHTML = user_msg;

		lose_count+=1;
		document.getElementById("user_lose_msg").innerHTML = "You lost: " + lose_count + " games";

        stay_button.style.visibility = 'hidden';
        hit_button.style.visibility = 'hidden';
}


/*If the user hits again, they get this*/

var deal_again = function () {
	document.getElementById("user_msg").innerHTML = "Your cards now total " + your_sum + ".  The dealer is still showing a " + dealer_card_1 + ".";
	hit_button.onclick = hit;
	stay_button.onclick = hit_dealer;
}

/*If the user stays, we verify the dealer is over 16, and if not, keep giving them cards until they are.
Then, when they're over 16, we see if they have 21 or not.*/

var final_result = function () {
	console.log("Final Results");
	
	if(dealer_sum===21) {
		console.log("user_value is " + your_sum);
		console.log("lose-1");
		lose();
	}
	else

	if(dealer_sum>21) {
		console.log("user_value is " + your_sum);
		console.log("win-1");
		win();
	}

	else

	if(your_sum===dealer_sum) {
		console.log("user_value is " + your_sum);
		console.log("lose-2");
		lose();
	}

	else

	if(your_sum<dealer_sum) {
		console.log("user_value is " + your_sum);
		console.log("lose-3");
		lose();		
	}

	else

	if(your_sum>dealer_sum) {
		console.log("user_value is " + your_sum);
		console.log("win-2");
		win();		
	}
}

var hit_dealer = function () {

	for (dealer_sum;dealer_sum<16;dealer_sum+=dealer_new_card) {
		dealer_new_card = Math.floor(11*Math.random())+1;
		dealer_sum+=dealer_new_card;
		console.log(dealer_new_card + " is your new dealer card");
		console.log(dealer_sum + " is new dealer total");
		if(dealer_sum>=16) break;
	}	
	
	final_result();
}

/*Events*/
deal_button.onclick = deal_first;

