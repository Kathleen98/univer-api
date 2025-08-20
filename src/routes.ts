import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/create-user-controller'
import { AuthUserController } from './controllers/user/auth-user-controller'

const router = Router()

router.post('/register-user', new CreateUserController().handle)
router.post('/sign-in', new AuthUserController().handle)

export { router }