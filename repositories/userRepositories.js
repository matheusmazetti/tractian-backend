import database from "../config/database.js";

async function getUserByEmail(email) {
    let result = await database.collection('users').findOne({
        email: email
    });
    return result;
}

async function insertUser(userData) {
    await database.collection('users').insertOne({
        email: userData.email,
        password: userData.password
    });
}

async function getAllUsers(company) {
    let result = await database.collection('users').findMany({
        company: company
    });
    return result;
}

export { getUserByEmail, getAllUsers, insertUser };