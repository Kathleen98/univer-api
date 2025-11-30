import { Body, Controller, Get, Headers, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async signUp(
        @Body() body: { email: string; password: string }
    ) {
        return this.authService.signUp(body.email, body.password);
    }

    @Post('signin')
    async signIn(
        @Body() body: { email: string; password: string },
    ) {
        return this.authService.signIn(body.email, body.password);
    }

    @Post('signout')
    async signOut(
        @Headers('authorization') auth: string,
    ) {
        const token = auth?.replace('Bearer', '');
        return this.authService.signOut(token);
    }

    @Get('me')
    async getProfile(
        @Headers('authorization') auth: string
    ) {
        const token = auth?.replace('Bearer', '');
        return this.authService.getUser(token)
    }

    @Post('refresh')
    async refreshToken(@Body() body: { refreshToken: string }) {
        return this.authService.refreshToken(body.refreshToken);
    }


}