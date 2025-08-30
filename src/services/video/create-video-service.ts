import prismaClient from "../../prisma"
import { CreateVideoInput } from '../../@types/zod/create-video-shema'



class CreateVideoService {
    async execute({  title, trailerUrl , duration, description, thumbnailUrl, videoUrl, releaseDate, type, status, isOriginal, ageRating}: CreateVideoInput) {

        const database = prismaClient

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
            }
        })

        return video



    }
}

export { CreateVideoService }