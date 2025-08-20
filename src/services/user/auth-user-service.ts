import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

interface SignInProps {
    email: string;
    password: string
}

class AuthUserService {
    async execute({ email, password }: SignInProps) {

        const user = await prismaClient.user.findFirst({
            where: {
                email
            },

        })

        if (!user) {
            throw new Error("email/password incorrect");
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("email/password incorrect");
        }

        const token = sign({
            name: user.name,
            email: user.email,
        },
            process.env.JWT_SECRET!,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            plan_type: user.plan_type,
            payment: user.payment,
            toke: token
        }
    }
}

export { AuthUserService }