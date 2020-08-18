// start game
// create a mystery guess
// take in user input for a guess
// place the guess in the UI
// check the guess against the actual mystery
// place the visual matches
// 

const SECRETCODE = ["P","P","B","Y"];
const testCode = ["P","B","P","Y"];



// check for exact matches
// return the array of colors left to check
function checkExactMatch(arrGuess, arrSecretCode) {
    let exactMatch = {
        numMatches: 0,
        guessColorsLeft: [],
        codeColorsLeft: [],
    };
    for(let i =0;i<arrGuess.length;i++) {
        if(arrGuess[i] == arrSecretCode[i]) {
            exactMatch[numMatches]++;
        } else {
            exactMatch[guessColorsLeft].push(arrGuess[i]);
            exactMatch[codeColorsLeft].push(arrSecretCode[i]);
        }
    }
}

// check for color matches
function checkColorMatches(arrGuess,arrSecretCode) {
    let whiteMatches = 0;
    for(let i=0;i<arrGuess.length;i++) {
        for(let j =0;j<arrSecretCode.length;j++) {
            if(arrGuess[i] == arrSecretCode[j]) {
                whiteMatches++;
            }
        }
    }
    return whiteMatches;
}
