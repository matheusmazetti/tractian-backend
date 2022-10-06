import { newUserSchema } from "../schemas/userSchema.js";


export async function checkNewUserObject(req, res, next){
    let body = req.body;
    let { error } = newUserSchema.validate(body);
    if(error){
        throw {code: 422, message: 'invalid object'}
    }
    next();
}