
import { CreateVideoInput } from '../../@types/zod/create-video-shema'
import prisma from '../../lib/prisma'




class CreateVideoService {
    async execute({  title, trailerUrl , duration, description, thumbnailUrl, videoUrl, releaseDate, type, status, isOriginal, ageRating, slug}: CreateVideoInput) {

        const database = prisma

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