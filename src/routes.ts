import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/create-user-controller'

const router = Router()

router.post('/register-user', new CreateUserController().handle)


export { router }