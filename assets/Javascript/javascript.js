$(document).ready(function() {
    
    // declaring variables
    var choices = ["honda", "chevrolet", "ford", "dodge", "jeep", "toyota", "chrysler", "lincoln", "cadillac", "nissan", "renault", "hyundai", "kia", "bugatti", "bentley", "ferrari", "mclaren", "lexus", "infiniti", "genesis"];
    var answer = choices[Math.floor(Math.random() * choices.length)];
    var guess = ""
    var win = 0;
    var loss = 0;
    var lives = 10;
    var wrongArray = [];
    var newAnswer = answer.split("");
    var emptyWord = [];
    var countBlank = answer.length;
    var letterInWord = false;

    // Logging the answer to the console
    console.log(answer);
    console.log(countBlank);
    console.log(newAnswer);

    // function to reset and start the gamme
    function resetGame() {
        answer = choices[Math.floor(Math.random() * choices.length)];
        lives = 10;
        wrongArray = [];
        emptyWord = [];
        countBlank = answer.length;
        console.log(answer);
        createWord();
    }

    // setting wins and losses HTML
    function winsAndLosses() {
        document.getElementById("winning").innerHTML = "You've won " + win + " times";
        document.getElementById("losing").innerHTML = "You've lost " + loss + " times";
    }

    // setting 'lives' HTML
    function livesLeft() {
        document.getElementById("lives-left").innerHTML = "You have " + lives + " guesses left";
    }

    // setting 'wrongArray' HTML
    function wrong() {
        document.getElementById("wrongs").innerHTML = "Letters Used: " + wrongArray.join("   ");
    }

    // create "li" elements of each letter in the answer
    function createWord() {
        console.log(newAnswer);
        for (i = 0; i < newAnswer.length; i++) {
            emptyWord.push("_");
            document.getElementById("empty-word").innerHTML = emptyWord.join(" ");
        }
        console.log(emptyWord);
    }

    //checks for blanks in the word and counts down for each one that goes away
    function checkWord() {
        for (i = 0; i < answer.length; i++) {
            if (guess === answer[i] && letterInWord === false) {
                emptyWord[i] = String.fromCharCode(event.keyCode).toLowerCase();
                document.getElementById("empty-word").innerHTML = emptyWord.join(" ");
                countBlank -= 1;
            }
        }
        if (guess != answer[i]) {
            lives -= 1;
        }
        console.log(countBlank);
    }

    //on key function for imput and win/loss condition
    document.onkeyup = function(event) {
        guess = String.fromCharCode(event.keyCode).toLowerCase();
        document.getElementById("hide").style.display = "none";
        wrongArray.push(guess);
        console.log(guess);
        console.log(wrongArray);
        checkWord();
        if (countBlank === 0) {
            alert("You Win!");
            win++;
            resetGame();
        } else if (lives === 0) {
            alert("You lose!");
            loss++;
            resetGame();
        }
        winsAndLosses();
        wrong();
        livesLeft();
    }
    createWord();
    winsAndLosses();
    wrong();
    livesLeft();
});