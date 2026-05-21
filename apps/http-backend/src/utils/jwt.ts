import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/commonbackend/config";

export const signintoken = (userId: string) => {
    return jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "1d",
    });
}

export const verifytoken = (token: string) => {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
}