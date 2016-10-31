/*Variables*/
	var yourcard1 = 5;
	var yourcard2 = 1;
	var yourcard3 = 300;
	var yourcardsum = yourcard1 + yourcard2;

	var dealercard1 = 7;
	var dealercard2 = 8;
	var dealer_sum = dealercard1 + dealercard2;
	var hit_or_stay_initial = "You are dealt a " + yourcard1 + " and a " + yourcard2 + ". \nThe dealer is showing a " + dealercard1;
	var hit_or_stay = "You hit.  You're dealt a " + yourcard3 + ". Your total is " + yourcardsum + "."

/*Functions*/

/*If you win*/
function youwin() 
{
	alert("<br>You win<br>You beat the dealer! Heck ya!");
}

function youlose() 
{
	alert("<br>Bummer. You lose.")
}

/*Begin the Game - initial deal*/
function deal_cards()
{
	var initial_deal = prompt(hit_or_stay_initial);
}

/*If you choose to hit*/

function hit() 
{

	your_card_sum = yourcard1+yourcard2+yourcard3;

		if(your_card_sum=21) 
		{
			youwin();
			console.log("You hit and win.");
			console.log("your card sum is " + your_card_sum);
		}

		else if(your_card_sum>21) 
		{
			youlose();
			console.log("You hit and lost.");
			console.log("your card sum is " + your_card_sum);
		}
		else if(your_card_sum<21) 
		{
			hit_or_stay();
			console.log("You hit and are still under 21.");
			console.log("your card sum is " + your_card_sum);
		}
}

function stay () 
{
	your_card_sum = yourcard1+yourcard2;
	dealer_sum = dealercard1+dealercard2;

		alert("You stayed.  Your total is " + your_card_sum + "." + "The dealer had " + dealer_sum + ". Thanks for playing.");
		console.log("You stayed. The game is over.")
}


/*If you don't input a right answer*/

function invalid_input () 
{
	if((initial_deal!="hit" || deal_cards!="stay"))
	{
		alert("You didn't choose a right answer.  Goodbye.")
	};
}


/*If you choose to hit an additional time*/

function additional_deal()
{
	var additional_deal = prompt(hit_or_stay);
}

function additional_hit() 
{
		if(your_card_sum=21) 
		{
			youwin();
			console.log("You win.");
		}

		else if(your_card_sum>21) 
		{
			youlose();
			console.log("You lose.");
		}
		else if(your_card_sum<21) 
		{
			hit_or_stay();
		}
}

function additional_stay ()
{
	if(additional_deal="stay") 
	{
		alert("You stayed.  Your total is " + your_card_sum + "." + "The dealer had " + dealer_sum + ". Did you win? I don't know.");
	}

	else 
	{
		alert("You didn't choose a right answer.  Goodbye.");
	}
}

/*If you choose to hit again*/

function hit_or_stay() 
{
	var additional_deal = prompt(hit_or_stay);
}

function invalid_input () 
{
	if((additional_deal!="hit" || deal_cards!="stay"))
		{
			alert("You didn't choose a right answer.  Goodbye.");
		}
}

/*Walkthrough

dealcards() Here are your two cards - hit or stay?
	Invalid()
	Hit ()
		Calculate total.
		Is 21
			Game over. You win.
		Is >21
			Game over. You lose.
		Is <21
			Here is another card.  Your total is.  The deal has a X. Hit or stay?
			Hit ()
			Stay ()
	Stay ()
*/

/*Execute*/

alert("It is time to play blackjack"); /*GOOD*/

deal_cards(); /*GOOD*/
hit();
stay();
