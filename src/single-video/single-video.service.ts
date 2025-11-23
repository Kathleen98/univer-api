import { BadRequestException, Body, Injectable } from "@nestjs/common";
import { SupabaseService } from "src/auth/supabase.service";
import { CreateSingleVideoDto } from "./dto/create-single-video.dto";


@Injectable()
export class SingleVideoService {
    constructor(private supabaseService: SupabaseService) { }

    async createSingleVideo(
        createDto: CreateSingleVideoDto
    ) {
        const supabase = this.supabaseService.getClient();

        try {
            const { data: content, error: contentError } = await supabase.from('contents').insert({
                title: createDto.title,
                slug: createDto.slug,
                description: createDto.description,
                release_year: createDto.release_year,
                duration_minutes: createDto.duration_minutes,
                age_rating: createDto.age_rating,
                thumbnail_url: createDto.thumbnail_url,
                banner_url: createDto.banner_url,
                trailer_url: createDto.trailer_url,
                is_featured: createDto.is_featured || false,
                type: createDto.type
            })
            .select().single();

            if(contentError){
                throw new BadRequestException('Create single video failed: ' + contentError.message);
            }

        } catch (error) {

        }
    }
}