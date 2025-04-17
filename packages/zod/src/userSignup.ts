import { z } from "zod";


const userSignUp = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    terms: z.boolean()
})


export default userSignUp