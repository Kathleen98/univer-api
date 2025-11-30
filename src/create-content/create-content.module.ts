import { Module } from "@nestjs/common";
import { CreateContentController } from "./create-content.controller";
import { CreateContentService } from "./create-content.service";
import { SupabaseService } from "src/auth/supabase.service";


@Module({
    imports: [],
    controllers: [CreateContentController],
    providers: [CreateContentService, SupabaseService]
})
export class CreateContentoModule { }