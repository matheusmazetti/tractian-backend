import { jwt } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
let secret = process.env.JWT_SECRET;

async function generateToken(userId) {
    let token = jwt.sign({userId: userId}, secret);
    return token;
}

async function verifyToken(token) {
    let result = jwt.verify(token, secret);
    return result.userId;
}

export { generateToken, verifyToken };
