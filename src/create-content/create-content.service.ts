import { BadRequestException, Injectable } from "@nestjs/common";
import { SupabaseService } from "src/auth/supabase.service";
import { CreateSingleVideoDto } from "./dto/create-single-video.dto";
import { success } from "zod";
import { CreateContentBodySchema } from "./create-content.controller";


@Injectable()
export class CreateContentService {
    constructor(private supabaseService: SupabaseService) { }

    async createSingleVideo(
        createDto: CreateContentBodySchema
    ) {
        const supabase = this.supabaseService.getClient();

        try {
            
            const { data: content, error: contentError } = await supabase
                .from('contents')
                .insert({
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
                .select()
                .single();

            if (contentError) {
                throw new BadRequestException(
                    `Failed to create content: ${contentError.message}`
                );
            }

           
            let video = null;
            if (createDto.type === 'movie' && createDto.video_url) {
                const { data: videoData, error: videoError } = await supabase
                    .from('videos')
                    .insert({
                        content_id: content.id,
                        video_url: createDto.video_url,
                        start_time: createDto.start_time,
                        end_time: createDto.end_time,
                    })
                    .select()
                    .single();

                if (videoError) {
                 
                    await supabase.from('contents').delete().eq('id', content.id);

                    throw new BadRequestException(
                        `Failed to create video: ${videoError.message}`
                    );
                }

                video = videoData;
            }

      
            return {
                success: true,
                data: {
                    ...content,
                    video: video || null
                },
                message: `${createDto.type} created successfully`
            };

        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            }

            console.error('Unexpected error:', error);
            throw new BadRequestException('Failed to create content');
        }
    }
}