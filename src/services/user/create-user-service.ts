import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";



interface CreateUserProps {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: CreateUserProps) {

        const dataBase = PrismaClient

        const checkAlreadyEmail = await dataBase.user.findFirst({
            where: {
                email
            }
        })

        if (checkAlreadyEmail) {
            throw new Error("Email already registered")
        }

        const passwordCripto = await hash(password, 8)

        const user = await dataBase.user.create({
            data: {
                name: name,
                email: email,
                password: passwordCripto
            },
            select: {
                id: true,
                name: true,
                email: true,
                plan_type: true,
                payment: true
            }
        })

        return user
    }
}

export { CreateUserService }