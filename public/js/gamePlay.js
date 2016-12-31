//(function(){

var beenDealt = false; // check to see if "Deal Cards" button has been clicked
var shuffleCards = false; // check to see if "Shuffle Cards" button has been clicked
var thisGameOver = false; //
var deal = 0; //random number variable used for cards
var randomNumLeft = 0; // "left" number
var randomNumCenter = 0; // "center" number
var randomNumRight = 0; // "right" number
var topCardLeft, topCardCenter, topCardRight; // for animating the top cards
var timerId = 0; // for shuffle slideshow animation
var i = 0; //temp value
var player1 = true; // check to see who's turn it is for scoring
var player1score = 0;
var player2score = 0;
var tempScore = 3; // initial score of 3 dollars
var chipDisplayArray = document.getElementsByClassName("chips");
var tempChip = 0;

console.log(chipDisplayArray);

var currentPlayer1 = document.getElementById("player1"); // for CSS styling
var currentPlayer2 = document.getElementById("player2"); // for CSS styling
currentPlayer2.classList.add("inactivePlayer"); // player2 inactive class added

var ImageHome = new Array(28);

for (i = 0; i < 28; i++) {
	ImageHome[i] = new Image();
}

ImageHome[0].src="/images/01_of_clubs_A.png"; //ace
ImageHome[1].src="/images/02_of_diamonds.png";
ImageHome[2].src="/images/03_of_spades.png";
ImageHome[3].src="/images/04_of_diamonds.png";
ImageHome[4].src="/images/05_of_spades.png";
ImageHome[5].src="/images/06_of_diamonds.png";
ImageHome[6].src="/images/07_of_spades.png";
ImageHome[7].src="/images/08_of_hearts.png";
ImageHome[8].src="/images/09_of_spades.png";
ImageHome[9].src="/images/10_of_hearts.png";
ImageHome[10].src="/images/11_Jack_of_clubs.png";
ImageHome[11].src="/images/12_Queen_of_hearts.png";
ImageHome[12].src="/images/13_King_of_spades.png";
ImageHome[13].src="/images/02_of_spades.png";
ImageHome[14].src="/images/03_of_hearts.png";
ImageHome[15].src="/images/04_of_clubs.png";
ImageHome[16].src="/images/05_of_hearts.png";
ImageHome[17].src="/images/06_of_spades.png";
ImageHome[18].src="/images/07_of_diamonds.png";
ImageHome[19].src="/images/08_of_clubs.png";
ImageHome[20].src="/images/09_of_diamonds.png";
ImageHome[21].src="/images/10_of_spades.png";
ImageHome[22].src="/images/11_Jack_of_hearts.png";
ImageHome[23].src="/images/12_Queen_of_spades.png";
ImageHome[24].src="/images/13_King_of_diamonds.png";
ImageHome[25].src="/images/01_of_diamonds_A.png"; //ace
ImageHome[26].src="/images/01_of_hearts_A.png"; //ace
ImageHome[27].src="/images/01_of_spades_A.png"; //ace

// event listener for "deal cards" button:
document.getElementById("dealCards").addEventListener("click", randomCard);

function randomCard(){
	thisGameOver = false;
	resetDisplay(); //set images to original
	beenDealt = true; // deal button has been clicked
	deal = Math.floor((Math.random() * 1000) % 33);
	var deck = 3; // number of cards on table
	console.log("in randomCard(); deal = " + deal);

	if(deal <= 10){
		for (i = 0; i < deck; i++) {
			if(i=== 0){randomNumLeft = Math.floor((Math.random()*11)+1);}
			if(i=== 1){randomNumCenter = Math.floor((Math.random()*12)+12);}
			if(i=== 2){randomNumRight = 0;}
		}
	} else if(deal > 10 && deal <= 20){
		for (i = 0; i < deck; i++) {
			if(i=== 0){randomNumCenter = Math.floor((Math.random()*11)+1);}
			if(i=== 1){randomNumRight = Math.floor((Math.random()*12)+12);}
			if(i=== 2){randomNumLeft = 25;}
		}
	} else if(deal > 20 && deal < 30){
		for (i = 0; i < deck; i++) {
			if(i=== 0){randomNumRight = Math.floor((Math.random()*11)+1);}
			if(i=== 1){randomNumLeft = Math.floor((Math.random()*12)+12);}
			if(i=== 2){randomNumCenter = 0;}
		}
	} else {
		for (i = 0; i < deck; i++){
			if(i=== 0){randomNumLeft = Math.floor((Math.random()*11)+1);}
			if(i=== 1){randomNumCenter = Math.floor((Math.random()*12)+12);}
			if(i=== 2){	randomNumRight = 25;}
		}
	}
}

// event listeners for cards:
document.getElementById("displayLeft").addEventListener("click", function() {
	pickCard(this.name);
});
document.getElementById("displayCenter").addEventListener("click", function() {
	pickCard(this.name);
});
document.getElementById("displayRight").addEventListener("click", function() {
	pickCard(this.name);
});

//----------------------------Pick Card------------------------------------
function pickCard(form) {
	console.log("in pickCard(); deal = " + deal);

	if (thisGameOver) {
		alert("This game is over. Deal cards again.");
		return;
	}

	if(beenDealt === true && shuffleCards === false){
		if (deal <= 10){
			if (form === "displayRight"){
				document.images["displayRight"].src = ImageHome[randomNumRight].src;
				alert("You have found the Ace!");
				tallyScore();
			}
			if (form === "displayLeft"){
				document.images["displayLeft"].src = ImageHome[randomNumLeft].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if (form === "displayCenter"){
				document.images["displayCenter"].src = ImageHome[randomNumCenter].src;
				tempScore -= 1;
				alert("Try another card.");
			}
		} else if (deal > 10 && deal <= 20) {
			if (form === "displayRight"){
				document.images["displayRight"].src = ImageHome[randomNumRight].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if (form === "displayLeft"){
				document.images["displayLeft"].src = ImageHome[randomNumLeft].src;
				alert("You have found the Ace!");
				tallyScore();
			}
			if (form === "displayCenter"){
				document.images["displayCenter"].src = ImageHome[randomNumCenter].src;
				tempScore -= 1;
				alert("Try another card.");
			}
		} else if (deal > 20 && deal < 30) {
			if (form === "displayRight"){
				document.images["displayRight"].src = ImageHome[randomNumRight].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if (form === "displayLeft") {
				document.images["displayLeft"].src = ImageHome[randomNumLeft].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if (form === "displayCenter") {
				document.images["displayCenter"].src = ImageHome[randomNumCenter].src;
				alert("You have found the Ace!");
				tallyScore();
			}
		} else {
			if (form === "displayRight") {
				document.images["displayRight"].src = ImageHome[randomNumRight].src;
				alert("You have found the Ace!");
				tallyScore();
			}
			if (form === "displayLeft") {
				document.images["displayLeft"].src = ImageHome[randomNumLeft].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if (form === "displayCenter") {
				document.images["displayCenter"].src = ImageHome[randomNumCenter].src;
				tempScore -= 1;
				alert("Try another card.");
			}
		}
	} else {
		if (shuffleCards === true) {
			alert("You must stop shuffling the cards first");
		} else {
			alert("You must click the \"Deal Cards\" button first");
		}
	}
}
//----------------------------Pick Card------------------------------------
//-------------------------------------------------------------------------

function resetDisplay() {
	document.images["displayLeft"].src = "/images/cardBlue.jpg";
	document.images["displayCenter"].src = "/images/cardRed.jpg";
	document.images["displayRight"].src = "/images/cardBlue.jpg";
	stopSlideShow();
}

function animateCards(whichCard){
	console.log("whichCard = " + whichCard);
	whichCard %= topCardLeft.length;
	document.images["displayLeft"].src=topCardLeft[whichCard];
	document.images["displayCenter"].src=topCardCenter[whichCard];
	document.images["displayRight"].src=topCardRight[whichCard];
	timerId = window.setTimeout("animateCards(" + (whichCard + 1)+");", 60);
}

document.getElementById("shuffleDeck").addEventListener("click", startSlideShow);

function startSlideShow() {
	if(shuffleCards === false) {
		shuffleCards = true;
		beenDealt = false;
		topCardLeft = new Array( "/images/cardRed.jpg","/images/cardBlue.jpg",
			"/images/cardBlue.jpg","/images/cardRed.jpg");
		topCardCenter = new Array( "/images/cardBlue.jpg","/images/cardRed.jpg",
			"/images/cardBlue.jpg","/images/cardRed.jpg");
		topCardRight = new Array( "/images/cardRed.jpg","/images/cardBlue.jpg",
			"/images/cardRed.jpg","/images/cardBlue.jpg");
		animateCards(0);
	} else {
		shuffleCards = false;
		stopSlideShow();
	}
}

function stopSlideShow() {
	console.log("timerId = " + timerId);
	shuffleCards = false;
	clearTimeout(timerId);
}

function instructions() {
	alert("Instructions:\nThe game is to Find The Ace of the three cards.\n" +
	"Click the \"Deal Cards\" button before selecting a card.\n" +
	"You can Shuffle the cards if you like BUT the \"Deal Cards\" must \n" +
	"be clicked before proceeding to a new game. \n" +
	"Have fun! (the chips have no real value.)");
}

function tallyScore() {

	thisGameOver = true;

	currentPlayer1.classList.remove("inactivePlayer");
	currentPlayer2.classList.remove("inactivePlayer");

	tempChip = Math.floor(Math.random() * 8);
	chipDisplayArray[tempChip].className += " animated bounceIn";
	console.log("tempChip = " + tempChip);

	if (player1 === true) {
		player1score += tempScore;
		player1 = false;
		document.getElementById("player1score").innerHTML = "$" + player1score;
		tempScore = 3;
		playAudio(); // coin sound fx
		currentPlayer1.classList.add("inactivePlayer");

	} else {
		player2score += tempScore;
		player1 = true;
		document.getElementById("player2score").innerHTML = "$" + player2score;
		tempScore = 3;
		playAudio(); // coin sound fx
		currentPlayer2.classList.add("inactivePlayer");
	}

	if ((player1score >= 10) && (player2score < 10)){
		document.getElementById("player1score").innerHTML = "Wins $" + player1score;
		document.getElementById("winnerText").innerHTML = "Player 1 Wins!";
		removeChips();
	} else if ((player2score >= 10) && (player1score < 10)) {
		document.getElementById("player2score").innerHTML = "Wins $" + player2score;
		document.getElementById("winnerText").innerHTML = "Player 2 Wins!";
		removeChips();
	} else if ((player2score >= 10) && (player1score >= 10)) {
		document.getElementById("player1score").innerHTML = "$" + player1score +
		" Tied!";
		document.getElementById("player2score").innerHTML = "$" + player2score +
		" Tied!";
	}
}

function removeChips() {
	for(i = 0; i < chipDisplayArray.length; i++) {
		console.log("chipsArray i = " + i);
		chipDisplayArray[i].className = "chips";
		console.log("chipDisplayArray[tempChip].className = " + chipDisplayArray[tempChip].className);
	}
}

function playAudio() {
	var audio = new Audio('/audio/cash-register-05.mp3');
	audio.play();
}

//})();
