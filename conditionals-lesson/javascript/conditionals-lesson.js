// "use strict";
// let city = "San Antonio"
// if (city === "Boston"){
//     console.log("The city is Boston.");
// } else if (city === "Atlanta"){
//     console.log("The condition is false.");
// } else if (city === "San Antonio") {
//     console.log("The city is San Antonio");
// } else {
//     console.log("We don't know where this is");
// }
// console.log(addNumbers(2))


// function addNumbers(num1) {
//     let number;
//    if (typeof num1 == "string") {
//        return "This is not a number stupid";
//    } else {
//        return num1 + 2;
//    }
//
// }

let pizzaPreference = prompt("What is your favorite pizza?");
// if (pizzaPreference.toLocaleLowerCase() == "cheese") {
//     console.log("Thanks, you're boring")
// } else if (pizzaPreference.toLocaleLowerCase() == "pineapple") {
//     console.log("You are a terrible human");
// } else {
//     console.log("Okay weirdo...")
// }
//Switch statements are for specific cases, but cannot run comparables and are case sensitive.
switch (pizzaPreference){
    case "cheese":
        console.log("You are very boring");
        break;
    case "pineapple":
        console.log("That is sacriligeous");
        break;
    default:
        console.log("Okay...weirdo");
}
//
// let success = true;
// let message;
// if (success) {
//     message = "The operation was successful";
// } else {
//     message = "The oepration was not successful";
// }

// let message = success ? "The operations was successful" : "The operation was not successful";
//
// console.log(message);