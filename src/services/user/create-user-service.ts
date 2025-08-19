import prismaClient from "../../prisma";


interface CreateUserProps {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: CreateUserProps) {

        const dataBase = prismaClient

        const checkAlreadyEmail = await dataBase.user.findFirst({
            where: {
                email
            }
        })

        if (checkAlreadyEmail) {
            throw new Error("Email already registered")
        }

        const user = await dataBase.user.create({
            data: {
                name: name,
                email: email,
                password: password
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