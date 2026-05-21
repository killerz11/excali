import { z } from "zod";
export const signupSchema = z.object({
    name: z.string().max(10),
    email: z.email(),
    password: z.string().min(6)
})

export const signinSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
})

export const roomSchema = z.object({
    
})
