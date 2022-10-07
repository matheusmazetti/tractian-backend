import * as userServices from '../services/userServices.js';
import * as authServices from '../services/authServices.js';

export async function createNewUser(req, res){
    let body = req.body;
    await userServices.checkUserExists(body.email);
    await userServices.insertNewUser(body);
    res.sendStatus(201);
}

export async function login(req, res){
    let body = req.body;
    let user = await userServices.loginByEmail(body);
    let token = await authServices.generateToken(user._id);
    res.status(200).send(token);
}