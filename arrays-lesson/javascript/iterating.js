(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    const names = ["chris", "borat", "bruno", "morty", "rick"];
    console.log(names);
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log(names[4]);

    console.log("next TODO");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    console.log("next TODO")
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (name){
        console.log(name);
    })

    console.log("new TODO");
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function returnFirst (array) {
        console.log(array[0]);
    }
returnFirst(names);

    console.log("new TODO")

    function returnSecond (array) {
        console.log(array[1]);
    }
    returnSecond(names);

    console.log('New todo');

    function returnLast (array) {
        console.log(array.slice(-1));
    }
    returnLast(names);

    console.log("new TODO");

//     1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.

    const foods = ["beef", "chicken", "turkey", "bacon", "cheese", "eggs", "pizza", "biscuits", "empenadas", "ice cream"];

    // for (let i = 0; i < foods.length; i++) {
    //     if(foods[i][0] === "a" ||
    //         foods[i][0] === "e" ||
    //         foods[i][0] === "i" ||
    //         foods[i][0] === "o" ||
    //         foods[i][0] === "u") {
    //
    //         console.log(`${foods[i]} starts with a vowel`);
    //     } else {
    //         console.log(`${foods[i]} does not start with a vowel`);
    //     }
    // }

    foods.forEach(function(food){
        if(foods[food][0] === "a" ||
            foods[food][0] === "e" ||
            foods[food][0] === "i" ||
            foods[food][0] === "o" ||
            foods[food][0] === "u") {

            console.log(`${foods[food]} starts with a vowel`);
        } else {
            console.log(`${foods[food]} does not start with a vowel`);
        }
    })
    console.log(food);

//     2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.
const nums = [1,2,3,4,5,6];
    function addEvenNums (array) {
        for (let i = 0; i < array.length; i++){
            if(i % 2 === 0) {
                i = i + i;
                console.log(i);
            }
        }
    }
addEvenNums(nums);
//     3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
//     otherwise, the function should return the string ‘input num NOT in input array’ (edited)





})();