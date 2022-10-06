import * as userRepositories from '../repositories/userRepositories.js';
import bcrypt from 'bcrypt';

async function checkUserExists(email) {
    let verify = await userRepositories.getUserByEmail(email);
    if(verify){
        return verify;
    }
    return false;
}

async function insertNewUser(userData) {
    let hashedPassword = bcrypt.hashSync(userData.password, 10);
    let userObj = {
        email: userData.email,
        password: hashedPassword
    }
    await userRepositories.insertUser(userObj);
}


