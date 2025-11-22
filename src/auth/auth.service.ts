import { Injectable, UnauthorizedException } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";


@Injectable()
export class AuthService {
    constructor(private supabaseService: SupabaseService) { }

    async signUp(email: string, password: string) {
        const { data, error } = await this.supabaseService.getClient().auth.signUp({
            email,
            password
        });

        if (error) throw new UnauthorizedException(error.message);

        return data;
    }

    async signIn(email: string, password: string) {
        const { data, error } = await this.supabaseService.getClient().auth.signInWithPassword({
            email,
            password,
        })

        if (error) throw new UnauthorizedException(error.message);

        return data;
    }

    async signOut(accessToken: string) {
        const { error } = await this.supabaseService.getClient().auth.signOut();

        if (error) throw new UnauthorizedException(error.message);

        return { message: 'Signed out successfully' };
    }

    async getUser(accessToken: string) {
        const { data, error } = await this.supabaseService.getClient().auth.getUser(accessToken);

        if (error) throw new UnauthorizedException(error.message);

        return data.user
    }

    async refreshToken(refreshToken: string) {

        const { data, error } = await this.supabaseService.getClient().auth.refreshSession({ refresh_token: refreshToken });

        if (error) throw new UnauthorizedException(error.message);

        return data;
    }
}

