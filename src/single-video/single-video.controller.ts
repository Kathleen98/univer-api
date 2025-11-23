import { Body, Controller, Post } from "@nestjs/common";
import { SingleVideoService } from "./single-video.service";
import { CreateSingleVideoDto } from "./dto/create-single-video.dto";


@Controller('single-video')
export class SingleVideoController {
    constructor(private singleVideoService: SingleVideoService) { }

    @Post('create')
    async createSingleVideo(
        @Body() body: {
            createDto: CreateSingleVideoDto
        }
    ) {
        return this.singleVideoService.createSingleVideo(
            {
                title: body.createDto.title,
                slug: body.createDto.slug,
                description: body.createDto.description,
                release_year: body.createDto.release_year,
                duration_minutes: body.createDto.duration_minutes,
                age_rating: body.createDto.age_rating,
                thumbnail_url: body.createDto.thumbnail_url,
                banner_url: body.createDto.banner_url,
                trailer_url: body.createDto.trailer_url,
                is_featured: body.createDto.is_featured,
                type: body.createDto.type
            }

        );
    }

}