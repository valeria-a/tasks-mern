import * as z from 'zod';

export const createTaskBodySchema = z.object({
    title: z.string().max(128).min(1),
    description: z.string().optional(),
    isDone: z.boolean(),
    user_id: z.string()
})

export const signuupBodySchema = z.object({
    email: z.string(),
    password: z.string()
})