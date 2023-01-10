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

// function returnLastCharsReversed (input1, input2) {
//     let num = input2;
//     let chars = input1.slice(-num);
//     let split = chars.split("");
//     let reverse = split.reverse();
//     let join = reverse.join("");
//     console.log(join);
//
// }
//
// returnLastCharsReversed("william", 3);

// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
// iBeforeE(‘ei’) // returns ‘ie’
// iBeforeE(‘height’) // returns ‘hieght’
// iBeforeE(‘heist’) // returns ‘hiest’
// iBeforeE(‘their’) // returns ‘thier’
// iBeforeE(‘theirtheir’) // returns ‘thierthier’

// function iBeforeE (input) {
//     return input.replace("ei", "ie");
// }
//
// console.log(iBeforeE("theirtheir"));

// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]

// function filterList(input) {
//     let filt = input.filter(function (x){
//         if (typeof x === "number") {
//             return x
//         }
//         console.log(filt);
//     })
// }
//
// console.log(filterList([1,2,"a","b"]))

// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.
//
//
// zipArrays([], []) // returns []
// zipArrays([1], [2]) // returns [1, 2]
// zipArrays(['a', 'b'], ['c', 'd']) // returns... ['a', 'c', 'b', 'd']
// zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) // returns...
//
//     [
//     1,
//         'bob',
//         2,
//         null,
//         'a',
//         'sally',
//         'b',
//         25
//     ]
// white_check_mark
// +1
// raised_hands
// function zipArrays(first, second) {
//     const zipped = [];
//
//     for (let i = 0; i < first.length; i++) {
//         zipped.push(first[i]);
//         zipped.push(second[i]);
//     }
//
//     return zipped;
// }
// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.


    const users = [
    {
        firstName: 'Justin',
        lastName: 'Reich',
        dob: '1923-01-01',
        username: 'jreich',
        password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        dob: '1935-03-11',
        username: 'ssmith',
        password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        dob: '1999-01-21',
        username: 'fsmith',
        password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
    },
]

function getUserCredentials(users) {
    const credentials = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        credentials.push({ username: user.username, password: user.password });
    }
    return credentials;
}
/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/















