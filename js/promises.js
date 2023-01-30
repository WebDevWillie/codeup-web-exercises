
async function getUsers(username){
    let response = await fetch("https://api.github.com/users/$(username)")
    console.log(response);

}

async function lastCommitDate(username) {
    const apiUrl = await fetch('https://api.github.com/users');
    let userList = await apiUrl.json();
    console.log(userList);
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


console.log(lastCommitDate('hilton-chris210'));
