import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/create-user-controller'
import { AuthUserController } from './controllers/user/auth-user-controller'
import { UserDetailsController } from './controllers/user/user-details.controller'
import { isAuthenticated } from './middlewares/is-authenticated'
import { CreateVideoController } from './controllers/video/create-video-controller'
import { QueryVideoController } from './controllers/video/all-video-controller'
import { FilterVideoController } from './controllers/video/filter-video-controller'
import { CategoryVideoController } from './controllers/video/category-video-controller'

const router = Router()

router.post('/register-user', new CreateUserController().handle)
router.post('/sign-in', new AuthUserController().handle)
router.get('/user-info', isAuthenticated, new UserDetailsController().handle)

// videos routes
router.post('/movie-create', isAuthenticated, new CreateVideoController().handle)
router.get('/movie', isAuthenticated, new QueryVideoController().handle)
router.post('/movie/filter/:slug', isAuthenticated, new FilterVideoController().handle)
router.post('/movie/category/:category', new CategoryVideoController().handle)

export { router }