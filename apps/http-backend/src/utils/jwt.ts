import jwt from "jsonwebtoken";

const JWT_SECRET = "123456789";

export const signintoken = (userId: string) => {
    return jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "1d",
    });
}

export const verifytoken = (token: string) => {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
}