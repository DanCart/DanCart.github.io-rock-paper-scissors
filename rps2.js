let rocker = document.getElementById('rock');
rocker.addEventListener('click', rockChoice);

function rockChoice() {
	playerChoice = 'rock';
	playRound2(playerChoice, computerPlay());
}

let paperer = document.getElementById('paper');
paperer.addEventListener('click', paperChoice);

function paperChoice() {
	playerChoice = 'paper';
	playRound2(playerChoice, computerPlay());
}

let scissorer = document.getElementById('scissors');
scissorer.addEventListener('click', scissorsChoice);

function scissorsChoice() {
	playerChoice = 'scissors';
	playRound2(playerChoice, computerPlay());
}

let computerMove = computerPlay();

let win = 0;
let lose = 0;
let draw = 0;

function computerPlay() {
	let cMove;
	let choice = Math.floor(Math.random() * 3);
	if (choice == 0) {
		cMove = 'rock';
	} else if (choice == 1) {
		cMove = 'paper';
	} else {
		cMove = 'scissors';
	}
	return cMove;
}

function playRound2(playerChoice, computerMove) {
	let all = [];
	let statement = '';
	let result = '';

	if (playerChoice == 'rock' && computerMove == 'paper') {
		statement += 'You lose! Paper beats Rock!';
		lose++;
		result += `You have ${win} wins, ${lose} losses, and ${draw} draws.`;
	} else if (playerChoice == 'rock' && computerMove == 'rock') {
		statement += "It's a draw!";
		draw++;
		result += `You have ${win} wins, ${lose} losses, and ${draw} draws.`;
	} else if (playerChoice == 'rock' && computerMove == 'scissors') {
		statement += 'You win! Rock beats Scissors!';
		win++;
		result += `You have ${win} wins, ${lose} losses, and ${draw} draws.`;
	} else if (playerChoice == 'scissors' && computerMove == 'rock') {
		statement += 'You lose! Rock beats Scissors';
		lose++;
		result += `You have ${win} wins, ${lose} losses, and ${draw} draws.`;
	} else if (playerChoice == 'scissors' && computerMove == 'paper') {
		statement += 'You win! Scissors beats Paper!';
		win++;
		result += `You have ${win} wins, ${lose} losses, and ${draw} draws.`;
	} else if (playerChoice == 'scissors' && computerMove == 'scissors') {
		statement += "It's a draw!";
		draw++;
		result += `You have ${win} wins, ${lose} losses, and ${draw} draws.`;
	} else if (playerChoice == 'paper' && computerMove == 'scissors') {
		statement += 'You lose! Scissors beats Paper!';
		lose++;
		result += `You have ${win} wins, ${lose} losses, and ${draw} draws.`;
	} else if (playerChoice == 'paper' && computerMove == 'paper') {
		statement += "It's a draw!";
		draw++;
		result += `You have ${win} wins, ${lose} losses, and ${draw} draws.`;
	} else if (playerChoice == 'paper' && computerMove == 'rock') {
		statement += 'You win! Paper beats Rock!';
		win++;
		result += `You have ${win} wins, ${lose} losses, and ${draw} draws.`;
	}
	all.push(result);
	all.push(statement);
	all.push(win);
	all.push(lose);
	all.push(draw);
	all.push(computerMove);

	console.log(all);
	console.log('wins ' + all[0]);
	updater(all);
	return;
}

function updater(all) {
	let compDisp = document.getElementById('compDisplay');
	compDisp.textContent = `The computer choose...${all[5]}`;
	let resDisp = document.getElementById('resultsDisplay');
	resDisp.textContent = `${all[1]}`;
	let winDisp = document.getElementById('winDisplay');
	winDisp.textContent = `Your wins: ${all[2]}`;
	let lossDisp = document.getElementById('lossDisplay');
	lossDisp.textContent = `Your losses: ${all[3]}`;
	let drawDisp = document.getElementById('drawDisplay');
	drawDisp.textContent = `Your draws: ${all[4]}`;
}
//playRound2(playerChoice, computerMove);
/*
function game(num) {
	for (let i = 0; i <= num; i++) {
		playRound2(playerChoice, computerPlay());

		//checkWin();
	}
	return result;
}

game(10);
*/
