"use strict";

console.log("Hello from external JS");

alert("Welcome to my website!");

let userInput = prompt("What is your favorite color?");
let message = "Great, " + userInput + " is my favorite color too!"
alert(message);



// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.
// returnLastTwoChars(‘cat’) // returns ‘at’
// returnLastTwoChars(‘hello’) // returns ‘lo’
// returnLastTwoChars(‘hi’) // returns ‘hi’

function returnLastTwoChars (input) {
    let chars = input.slice(-2);
    console.log(chars);
}

returnLastTwoChars("william");

// Create a function, returnLastCharsReversed that takes in two arguments:
//     1. a string of characters
// 2. an integer that represents how many characters should be returned
// The function should return a string of characters, equal to the number specified
// by the second argument, in reverse order. If 0 is passed as a second argument,
// return an empty string. Assume only valid inputs and that the second argument
// will NOT exceed the length of the input string.
//     Examples:
// returnLastCharsReversed(‘cat’, 0) // returns ‘’
// returnLastCharsReversed(‘cat’, 1) // returns ‘t’
// returnLastCharsReversed(‘cat’, 2) // returns ‘ta’
// returnLastCharsReversed(‘cat’, 3) // returns ‘tac’
// returnLastCharsReversed(‘codeup’, 1) // returns ‘p’
// returnLastCharsReversed(‘codeup’, 3) // returns ‘pue’
// returnLastCharsReversed(‘codeup’, 4) // returns ‘pued’

function returnLastCharsReversed (input1, input2) {
    let num = input2;
    let chars = input1.slice(-num);
    let split = chars.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    console.log(join);

}

returnLastCharsReversed("william", 3);







