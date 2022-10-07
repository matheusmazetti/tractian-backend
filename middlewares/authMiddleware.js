import * as authServices from '../services/authServices.js';

export async function checkToken(req, res, next){
    let token = req.header('Authorization');
    if(!token){
        throw {code: 401, message: 'without token'}
    }
    let userId = await authServices.verifyToken(token);
    req.locals.id = userId;
    next();
}
