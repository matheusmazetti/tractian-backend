import * as userServices from '../services/userServices.js';

export async function createNewUser(req, res){
    let body = req.body;
    await userServices.checkUserExists(body.email);
    await userServices.insertNewUser(body);
    res.sendStatus(201);
}