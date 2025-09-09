
import { PrismaClient } from '@prisma/client'
import { CreateVideoInput } from '../../@types/zod/create-video-shema'



class CreateVideoService {
    async execute({  title, trailerUrl , duration, description, thumbnailUrl, videoUrl, releaseDate, type, status, isOriginal, ageRating, slug}: CreateVideoInput) {

        const database = PrismaClient

        const video = database.video.create({
            data:{
                title,
                trailerUrl,
                duration,
                description,
                thumbnailUrl,
                videoUrl,
                releaseDate,
                type,
                status,
                isOriginal,
                ageRating,
                slug,

            }
        })

        return video



    }
}

export { CreateVideoService }