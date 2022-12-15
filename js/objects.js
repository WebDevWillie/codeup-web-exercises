(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // const person = {
    //     firstName: "hugh",
    //     lastName: "Mungus"
    //
    // };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    const person = {
        firstName: "hugh",
        lastName: "Mungus"

    };

    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    }
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        if(shopper.amount > 200){
            console.log(shopper.name + `, your amount before discount is ${shopper.amount}, your discount is ${shopper.amount * .12}, and your total after discount is ${shopper.amount - (shopper.amount * .12)}`);
        } else {
            console.log(`${shopper.name}, your total is ${shopper.amount}, you did not spend enough for a discount, your total is ${shopper.amount}`);
        }
    })




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    const books = [

        {
            title: "It",
            author: {
                firstName: "Steven",
                lastName: "King"
            }
        },
        {
            title: "12 Rules for Life",
            author: {
                firstName: "Jordan",
                lastName: "Peterson"
            }
        },
        {
            title: "Lord of the Rings",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkein"
            }
        },
        {
            title: "Galaxy's Edge",
            author: {
                firstName: "Nicolas",
                lastName: "Cole"
            }
        },
        {
            title: "Expeditionary Force",
            author: {
                firstName: "R.C.",
                lastName: "Bray"
            }
        }

    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book, index){
        console.log(`Book # ${index + 1}\n
         Title: ${book.title}\n
         Author: ${book.author.firstName} ${book.author.lastName}`)
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function makeBook (title, author){
        let authorArray = author.split(" ")
        let bookObject = {
            title: title,
            author: {
                firstName: authorArray[0],
                lastName: authorArray[1]
            }
        };

        return bookObject;
    }
    // Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.

        const pets = [
        {
            name: 'Sparky',
            type: 'Fish',
            age: 4
        },
        {
            name: 'Mr. Pig',
            type: 'Cat',
            age: 4
        },
        {
            name: 'Bubba',
            type: 'Dog',
            age: 5
        },
        {
            name: 'Pickles',
            type: 'Dog',
            age: 10
        }

    ];

    function findAverageDogAge (){
        pets.forEach(function (pet ,index){
            console.log(pet.age);
        })
    }


})();