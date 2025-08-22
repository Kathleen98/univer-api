import prismaClient from "../../prisma"
import { CreateVideoInput } from '../../@types/zod/create-video-shema'

// { category, title, thumbnail_url, published_at, is_public, tags, slug, status, format, file_size, resolution, video_url, duration, description }: CreateVideoInput

class CreateVideoService {
    async execute() {

        const database = prismaClient

        // const video = await database.video.create({
        //     data:{
        //         category: category,
        //         title: title,
        //         thumbnail_url,
        //         published_at,
        //         is_public,
        //         tags,
        //         slug,
        //         status,
        //         format,
        //         file_size,
        //         resolution,
        //         video_url,
        //         duration,
        //         description
        //     }
        // })

        return { ok: true }



    }
}

export { CreateVideoService }