import { Request, Response, NextFunction } from "express";
import { verifytoken } from "../utils/jwt";

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message:"missing token"
        })
    }

    const token = authHeader?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
           message: "invalid token"
        })
    }

    try {
        const payload = verifytoken(token);
        req.userId = payload.userId;
        next();
    } catch {
        return res.status(401).json({
            message:"invalid token"
        })
    }
}