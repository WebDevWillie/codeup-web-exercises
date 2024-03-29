// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.
// //
//
//     const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]
//
// function getUserCredentials(users) {
//     const credentials = [];
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         credentials.push({ username: user.username, password: user.password });
//     }
//     return credentials;
// }
//
//
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

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...

// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 6},
//         {name: "High School", rating: 8}
//     ]
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 9},
//         {name: "Middle School", rating: 9},
//         {name: "High School", rating: 9}
//     ]
// }

// fn(neighborhood1) // returns false due to school rating
// fn(neighborhood2) // returns false due to crime rate
// fn(neighborhood3) // returns true
// fn(neighborhood4) // returns false due to median home price
// white_check_mark
// +1
// raised_hands
// console.log(neighborhood1.schools.rating);
// function isDesirable(neighborhood) {
//     // let totalRating = neighborhood.schools.rating.reduce(function (a, b) {
//     let totalRating = 0
//  for (let i = 0; i < neighborhood.schools.length; i++) {
//      totalRating += neighborhood.schools[i].rating;
//     }
//     console.log(totalRating);
//     if (neighborhood.medianHomePrice < 300000 && neighborhood.crimeRate === "low" && totalRating >= 24) {
//         return true;
//     }
// }
//
// console.log(isDesirable(neighborhood3));


// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//
// encodeStr(‘apple’) // returns ‘@pple’
// encodeStr(‘codeup’) // returns ‘codeup’
// encodeStr(‘SASS’) // returns ‘$@$$’
// encodeStr(‘bike’) // returns ‘b1ke’

// function encodeStr (input){
//     let output = "";
//     for (let i = 0; i < input.length; i++){
//         if (input[i] === "a" || input[i] === "A"){
//             output += "@";
//         } else if (input[i] === "i" || input[i] === "I"){
//             output += "1";
//         } else if (input[i] === "s" || input[i] === "S"){
//             output += "$";
//         } else {
//             output += input[i];
//         }
//     }
//     return output;
// }
//
// console.log(encodeStr("apple"));

// function getAverageItemPrice (input){
//     let average = 0
//     for (let i = 0; i < input.items.length; i++) {
//         average += input.items[i].price;
//     }
//     return average / input.items.length;
// }


// function getAverageSpentPerItem (input){
//     let sum = 0
//     let totalQuantity = 0
//     for(let i = 0; i < shoppingCart.items.length; i++){
//         sum += (shoppingCart.items[i].quantity * shoppingCart.items[i].price)
//         totalQuantity += input.items[i].quantity
//     }
//     return sum / totalQuantity;
// }


// function mostSpentOnItem(shoppingCart) {
//     let mostExpensive = shoppingCart.items[0];
//     for (let i = 1; i < shoppingCart.items.length; i++) {
//         if (shoppingCart.items[i].price * shoppingCart.items[i].quantity >
//             mostExpensive.price * mostExpensive.quantity) {
//             mostExpensive = shoppingCart.items[i];
//         }
//     }
//     return mostExpensive;
// }

// let cars = [
//     {
//         make: "ford",
//         model: "explorer",
//         year: "1999"
//     },
//     {
//         make: "toyota",
//         model: "corola",
//         year: "2010"
//     },
//     {
//         make: "jeep",
//         model: "wrangler",
//         year: "2013"
//     }
//
//
//
// ]
//
// function models (inputs){
//     let newObj = []
//     inputs.forEach(function (input){
//         newObj.push(input.model);
//     })
//     return newObj;
// }
//
// console.log(models(cars));

// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.


    const strs = [
    {
        id: 1,
        str: 'hello'
    },
    {
        id: 2,
        str: 'world'
    },
    {
        id: 3,
        str: 'codeup'
    },
    {
        id: 4,
        str: 'x'
    }
]

function reverseStrings(arr) {
    arr.forEach(function(obj) {
        if (obj.hasOwnProperty('str')) {
            obj.str = obj.str.split('').reverse().join('');
        }
    });
    return arr;
}

console.log(reverseStrings(strs));