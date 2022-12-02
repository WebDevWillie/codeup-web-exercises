"use strict";

function userInputOddNum () {
    let askUser;
    let userInput;
    while(true) {
        askUser = prompt('enter an odd number between 1 and 50');
         userInput = parseFloat(askUser);
        if(userInput % 2 !== 0 || userInput <= 50 || userInput >= 1) {
            console.log(`The number to skip is ${userInput}`);
            break;
        }
    }
    for(let i = 1 ; i <= 50 ; i += 2) {
        if (i === userInput){
            console.log(`Skipping number ${userInput}`)
            continue;
        }
            console.log(i);

    }
}
userInputOddNum();






