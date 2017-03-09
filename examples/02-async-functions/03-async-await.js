// support à partir de ES2016

// permets une meilleure syntaxe plus claire

async function getUser() {
    const response = await fetch("http://echo.jsontest.com/username/johndoe/id/123");
    return response.json();
}

function getGroup() {
    const response = await fetch("http://echo.jsontest.com/name/admins/id/1");
    return response.json();
}

async function getUserAndGroup() {
    const user = await getUser();
    const group = await getGroup();

    console.log(`${user.name} is part of ${group.name}`);
}

