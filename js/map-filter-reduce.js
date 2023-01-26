const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let threeSpeak = users.filter(function(user){
//     return user.languages.length >= 3;
// })

let threeSpeak = users.filter(user => user.languages.length >= 3)
console.log(threeSpeak)

// let emailArray = users.map(function(user){
//     return user.email;
// })

let emailArray = users.map(user => user.email)

console.log(emailArray);


let yearsXp = users.reduce((totalYears, person) =>{
    return totalYears + person.yearsOfExperience;
}, 0)

console.log(yearsXp);

let longestEmail = users.reduce((longest, user) => {
    return user.email.length > longest.length ? user.email : longest;
}, "");
console.log(longestEmail);

// let userNames = users.reduce((stringStart, userName) =>{
//     return stringStart + userName.name + ", ";
// }, "Your instructors are: ")
let usersNames = users.reduce(function(sentence, user, index) {
    if(index === users.length - 1) return sentence + ` and ${user.name}.`;
    if(index === 0) return sentence + user.name;
    return sentence + `, ${user.name}`;
}, "Your instructors are: ");

console.log(usersNames);

