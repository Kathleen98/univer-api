import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/create-user-service";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, role } = req.body

        const createUserService = new CreateUserService()
        const user = await createUserService.execute({ name, email, password, role })

        return res.json(user)
    }
}

export { CreateUserController }