import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { CreateContentService } from "./create-content.service";
import { CreateSingleVideoDto } from "./dto/create-single-video.dto";
import z from "zod";
import { title } from "process";
import { ZodValidationPipe } from "nestjs-zod";


const createContent = z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    description: z.string().optional(),
    release_year: z.number().min(1800).max(new Date().getFullYear()),
    duration_minutes: z.number().min(1),
    age_rating: z.string().min(1),
    thumbnail_url: z.string(),
    banner_url: z.string(),
    trailer_url: z.string(),
    is_featured: z.boolean().optional(),
    type: z.enum(['movie', 'documentary', 'series', 'meeting']),

})

type CreateContentBodySchema = z.infer<typeof createContent>;


@Controller('create-content')
export class CreateContentController {
    constructor(private createContentService: CreateContentService) { }

    @Post()
    @UsePipes(new ZodValidationPipe(createContent))
    async createSingleVideo(
        @Body() body: CreateContentBodySchema
    ) {
        return this.createContentService.createSingleVideo(
            {
                title: body.title,
                slug: body.slug,
                description: body.description,
                release_year: body.release_year,
                duration_minutes: body.duration_minutes,
                age_rating: body.age_rating,
                thumbnail_url: body.thumbnail_url,
                banner_url: body.banner_url,
                trailer_url: body.trailer_url,
                is_featured: body.is_featured,
                type: body.type
            }

        );
    }

}