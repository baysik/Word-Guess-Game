// array of Overwatch Heroes
var possibleWords = ["ana", "ashe", "baptiste", "bastion", "brigitte", "d.va", "doomfist", "genji", "hanzo", "junkrat", "lucio", "mccree", "mei", "mercy", "moira", "orisa", "pharah", "reaper", "reinhardt", "roadhog", "solider:76", "sombra", "symmetra", "torbjorn", "tracer", "widowmaker", "winston", "wrecking ball", "zarya", "zenyatta"]

// Randomly chooses a hero
// var hero = heroes[Math.floor(Math.random() * heroes.length)];
var currentWord = "ana";
var wins = 0;
var guessesRemaining = 6;
var lettersGuessed = [];

function initGame() {
    assignCurrentWord()
    setEventListeners()
    updateDOM()
}

initGame()

function wordHasBeenGuessed(){
    for (var i = 0; i < currentWord.length; i++){
        if(lettersGuessed.includes(currentWord[i])){

        }else{
            return false
        }
    }
    return true
}

function assignCurrentWord() {
    const index = Math.floor(Math.random() * ((possibleWords.length -1) -0 +1)) + 0;
    currentWord = possibleWords[index];
}

function setEventListeners(){
    document.onkeyup = function(e){
        lettersGuessed.push(e.key)
        if(wordHasBeenGuessed()){
            wins++
            document.getElementById("wins").textContent = "Wins:" + " " + wins
            initGame()
        }
        shouldGuessesGoDown(e.key)
        console.log(currentWord, lettersGuessed, guessesRemaining);
        updateDOM()
        checkIfUserLost()
    }
}

function checkIfUserLost(){
    if(guessesRemaining <= 0){
        alert("you lost")
    }
}

function shouldGuessesGoDown(letterGuessed){
    if(!currentWord.includes(letterGuessed)){
        guessesRemaining = guessesRemaining - 1
    }
}

function updateDOM(){
    document.getElementById("remaining-guesses").textContent = "remaining guesses" + " " + guessesRemaining;
    document.getElementById("letters-guessed").textContent = "letters guessed:" + " " + lettersGuessed;
    showLettersOrDashes()
}

function showLettersOrDashes() {
    var displayWord = ""
    for (var i = 0; i < currentWord.length; i ++){
        if(lettersGuessed.includes(currentWord[i])){
            displayWord = displayWord + currentWord[i] + " "
        }else {
            displayWord = displayWord + "_" + " "
        }
    }
    document.getElementById("display-word").textContent = displayWord;
}


