import prismaClient from "../../prisma"
import { CreateVideoInput } from '../../@types/zod/create-video-shema'



class CreateVideoService {
    async execute({ category, title, thumbnail_url, published_at, is_public, tags, slug, status, format, file_size, resolution, video_url, duration, description, uploader_id }: CreateVideoInput) {

        const database = prismaClient

        const video = await database.video.create({
            data: {
                category: category,
                title: title,
                thumbnail_url: thumbnail_url || null,
                published_at: published_at || null,
                is_public,
                tags,
                slug,
                status,
                format: format || null,
                file_size: file_size || null,
                resolution: resolution || null,
                video_url,
                duration,
                description: description || null,
                uploader_id,
            }
        })

        return { ok: true }



    }
}

export { CreateVideoService }