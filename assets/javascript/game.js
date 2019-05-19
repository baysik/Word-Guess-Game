// array of Overwatch Heroes
var heroes = ["ana", "ashe", "baptiste", "bastion", "brigitte", "d.va", "doomfist", "genji", "hanzo", "junkrat", "lucio", "mccree", "mei", "mercy", "moira", "orisa", "pharah", "reaper", "reinhardt", "roadhog", "solider:76", "sombra", "symmetra", "torbjorn", "tracer", "widowmaker", "winston", "wrecking ball", "zarya", "zenyatta"]

// Randomly choose a hero
console.log("If you're looking here, then you're cheating!");
var letterCount = Math.floor(Math.random() * heroes.length);
var chosenWord = heroes[letterCount];
var underScore = []
console.log(chosenWord);

// Place underscores according to the word length
var underscores = () => {
    for (var i=0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}

console.log(underscores());

// User input
