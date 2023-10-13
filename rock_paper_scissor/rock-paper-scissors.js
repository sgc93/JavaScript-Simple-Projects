let manMove = "";
let autoManMove = "";
let computerMove = "";
let isAutoPlayOn = false;
let intervalId;
let score = {
	wins: 0,
	loses: 0,
	ties: 0,
	status: "",
};
let currentMove;

const scoreP = document.querySelector(".js-score");
const statusP = document.querySelector(".js-status");
const moveP = document.querySelector(".js-move");
const resetP = document.querySelector(".js-reset");
const autoBtn = document.querySelector(".btn-auto");

function makeMove(move) {
	manMove = move;
	console.log(`your move: ${manMove}`);
	compMove(manMove);
}

function autoPlay() {
	isAutoPlayOn = !isAutoPlayOn;
	if (isAutoPlayOn === true) {
		autoBtn.innerHTML = "Stop Play";
		intervalId = setInterval(() => {
			const random = Math.random();
			if (random <= 1 / 3) {
				autoManMove = "Rock";
			} else if (1 / 3 < random <= 2 / 3) {
				autoManMove = "Paper";
			} else {
				autoManMove = "Scissors";
			}
			console.log(`auto Man move: ${autoManMove}`);
			compMove(autoManMove);
		}, 2000);
		console.log("auto play started! id: " + intervalId);
	} else {
		clearInterval(intervalId);
		console.log("auto play Stoped!");
		autoBtn.innerHTML = "Auto Play";
	}
}

function compMove(man) {
	const random = Math.random();
	if (random <= 1 / 3) {
		computerMove = "Rock";
	} else if (1 / 3 < random <= 2 / 3) {
		computerMove = "Paper";
	} else {
		computerMove = "Scissors";
	}
	console.log(`computer move: ${computerMove}`);
	showWinner(man, computerMove);
}

// rules of rock paper scissors
// 🤜(rock) beats ✌️(scissors)
// ✋(paper) beats 🤜(rock)
// ✌️(scissors) beats ✋(paper)
// similar throws are tied.

function getScore() {
	return `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function getStatus() {
	return score.status;
}

function setMove(man, computer) {
	currentMove = `You ${man} : ${computer} Computer.`;
}

function displayData() {
	statusP.innerHTML = getStatus();
	moveP.innerHTML = currentMove;
	scoreP.innerHTML = getScore();
	resetP.innerHTML = "";
}

function resetScore() {
	score.wins = 0;
	score.loses = 0;
	score.ties = 0;
	resetP.innerHTML = "scores are reseted successfully.";
	scoreP.innerHTML = getScore();
}

function ties() {
	score.ties++;
	score.status = "Ties.";
	displayData();
}

function win() {
	score.wins++;
	score.status = "You Win.";
	displayData();
}

function lose() {
	score.loses++;
	score.status = "You Lose.";
	displayData();
}

function showWinner(man, comp) {
	if (man == "Rock") {
		if (comp == "Rock") {
			setMove("🤜", "🤜");
			ties();
		} else if (comp == "Scissors") {
			setMove("🤜", "✌️");
			win();
		} else if (comp == "Paper") {
			setMove("🤜", "✋");
			lose();
		}
	} else if (man == "Paper") {
		if (comp == "Rock") {
			setMove("✋", "🤜");
			win();
		} else if (comp == "Scissors") {
			setMove("✋", "✌️");
			lose();
		} else if (comp == "Paper") {
			setMove("✋", "✋");
			ties();
		}
	} else if (man == "Scissors") {
		if (comp == "Rock") {
			setMove("✌️", "🤜");
			lose();
		} else if (comp == "Scissors") {
			setMove("✌️", "✌️");
			ties();
		} else if (comp == "Paper") {
			setMove("✌️", "✋");
			win();
		}
	}
}
