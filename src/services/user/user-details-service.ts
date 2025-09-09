import { PrismaClient } from "@prisma/client"



interface UserDetailsServiceProps {
    user_id: string
}

class UserDetailsService {
    async execute({ user_id }: UserDetailsServiceProps) {

        const database = PrismaClient

        const findUser = await database.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true,
                plan_type: true,
                payment: true
            }
        })

        return findUser
    }
}

export { UserDetailsService }