import { Request, Response } from "express";
import { signinSchema, signupSchema } from "../schemas/auth.schema";
import { signintoken } from "../utils/jwt";

export function signup(req: Request, res: Response) {
    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({ message: "Invalid input" });
    }

    const { email, password, name } = result.data;
    const userId = "1";
    const token = signintoken(userId);

    return res.status(201).json({
        message: "user created",
        token
    })
}

export function signin(req: Request, res: Response) {
    const result = signinSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({ message: "Invalid input" });
    }
}

export function room(req: Request, res: Response) {
    return res.json({
        message:"room"
    })
}