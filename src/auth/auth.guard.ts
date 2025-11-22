import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private supabaseService: SupabaseService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('Authorization header missing');
        }

        const token = authHeader.replace('Bearer', '');

        try {
            const { data, error, } = await this.supabaseService.getClient().auth.getUser(token);

            if (error || !data.user) {
                throw new UnauthorizedException('Invalid token');
            }

            request.user = data.user;
            return true;
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}