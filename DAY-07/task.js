
/**
 * 
 * DAY -7 Number guessing game
 * 
 */


function startGame() {
    const min = 1;
    const max = 10;

    while (true) {

        // Generate secret number for this round
        const secret = Math.floor(Math.random() * (max - min + 1)) + min;

        let attempts = 0;

        let input = prompt(`Guess a number between ${min} and ${max}`);

        // Cancel at start
        if (input === null) {
            console.log('Game cancelled.');
            return;
        }

        let guess = Number(input);

        while (true) {

            // Invalid input
            if (!Number.isInteger(guess) || guess < min || guess > max) {
                console.log(`Invalid! Please enter a whole number between ${min} and ${max}.`);
            } else {
                attempts++;

                if (guess < secret) {
                    console.log(`${guess} is too low.`);
                } else if (guess > secret) {
                    console.log(`${guess} is too high.`);
                } else {
                    console.log(`🎉 Correct! The number was ${secret}.`);
                    console.log(`Attempts: ${attempts}`);
                    break;
                }
            }

            input = prompt(`Guess again (${min}-${max})`);

            // Cancel while guessing
            if (input === null) {
                console.log('Game cancelled.');
                    console.log(`Attempts: ${attempts}`);

                return;
            }

            guess = Number(input);
        }

        // asking to play again
        const playAgain = prompt('Play again? (yes/no)');

       
        if (playAgain === null) {
            console.log('Game ended.');
            return;
        }

        const answer = playAgain.trim().toLowerCase();

        if (answer !== 'yes') {
            console.log('Thanks for playing!');
            return;
        }
    }
}

startGame();








