"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// let userInput = prompt("What is your favorite color");
// function analyzeColor(color) {
//     if (color === "blue") {
//         alert("Blue is my favorite color.");
//     } else if (color === "red") {
//         alert("Red is too bright for me");
//     } else {
//         alert("I do not know anything about this color");
//     }
// }
// console.log(analyzeColor(userInput))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// switch(userInput) {
//     case "blue":
//         alert("Blue is my favorite color.");
//         break;
//     case "red":
//         alert("Red is too bright for me.");
//         break;
//     default:
//         alert("I do not like this color");
//         break;
// }




/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let colorPrompt = prompt("Input a random color");
// alert(analyzeColor(colorPrompt));



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// let 0 = 1
// let 1 = .1
// let 2 = .25
// let 3 = .35
// let 4 = .50
// let 5 = 0
// let luckyNumber = Math.floor(Math.random() * 6);
// let randomTotal = Math.floor(Math.random(1) * 101);
// function calculateTotal(ln, ta){
//     console.log(ta);
//     if (ln === 0) {
//         return alert("Sorry, no discount. Your total is $" + ta);
//     } else if (ln === 1) {
//         return alert("Congrats! You got a 10% discount! Your new total is $" + (ta - (ta * .1)));
//     } else if (ln === 2) {
//         return alert("Congrats! You got a 25% discount! Your new total is $" + (ta - (ta * .25)));
//     } else if (ln === 3) {
//         return alert("Congrats! You got a 35% discount! Your new total is $" + (ta - (ta * .35)));
//     } else if (ln === 4) {
//         return alert("Congrats! You got a 50% discount! Your new total is $" + (ta - (ta * .50)));
//     } else if (ln === 5) {
//         return alert("Congrats! You got a 100% discount! Your new total is $" + (0) +"!");
//     } else {
//         return("You did not get a discount");
//     }
//
// }
//
// console.log(calculateTotal(luckyNumber, randomTotal));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt("What is your total bill?");
//
// alert("Your lucky number was " + luckyNumber);
// alert("Your total before discount is " + totalBill);
// alert("Your price after discount is " + calculateTotal(luckyNumber, totalBill));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function numberInput () {
   confirm("Would you like to enter a number?")
       let userInput = prompt("please enter a number.");
       console.log(userInput);
   if (userInput % 2 === 0) {
        alert("your number is even");
   } else if (userInput % 2 !==0) {
        alert("your number is odd");

   }
     alert("your number plus 100 is " + (parseFloat(userInput) + 100));

   if (Math.sign(parseFloat(userInput)) === 1) {
       alert("Your number is positive");
   } else  {
       alert("Your number is negative");
   }

}

console.log(numberInput());