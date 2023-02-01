const username = "WebDevWillie";
async function lastCommitDate(username) {
    const users = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.promises}`}})
    console.log(users);
    try {
        let response = users;
        console.log(response);
        let data = await response.json();
        for (let event of data) {
            if (event.type === "PushEvent") {
                return event.created_at;
            }
        }
    } catch (error) {
        console.error(error);
    }
}

(async ()=> {
    let newV = await lastCommitDate(username)
    console.log(`The last push the loser known as ${username} did was at ${newV}`);
})();

