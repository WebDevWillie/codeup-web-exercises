//
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.
//
//
// const soda = {
//     brandName: "pepsi",
//     type: "cola",
//     volumeInLiters: 1,
//     priceInCents: 120,
//     expirationDate: "04AUG2023",
//     datesOfPreviousSips: ["01NOV", "02NOV", "03NOV"]
// }
//
// console.log(soda);
//
// const juice = {};
//
// juice.brandName = "Tropicalia";
// juice.type = "orange";
//
// console.log(juice);

// -- Mini Exercise 2
const users = [
    {
        givenName: "Sam",
            age: 21
},
{
        givenName: "Cathy",
        age: 34
},
{
     givenName: "Karen",
        age: 43
}
];

// 0. Log each given name
// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”
// 2. Change the names of all users to “John Doe”
// 3. Increase the current age of all users by 1
// Can you accomplish each step using iteration?




    // users[0].givenName = "John Doe"
    // users[1].givenName = "John Doe"
    // users[2].givenName = "John Doe"

console.log(users[0].givenName + " " + users[1].givenName + " " + users[2].givenName);

users.forEach(function(user){
    console.log(user.givenName = "John Doe");
})


    users.forEach(function(user){
        console.log(user.age + 1);
    })
















