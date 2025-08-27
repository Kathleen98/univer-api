import { Request, Response } from "express";
import { CreateVideoService } from "../../services/video/create-video-service";

class CreateVideoController {
    async handle(req: Request, res: Response) {

        const { category, title, thumbnail_url, published_at, is_public, tags, slug, status, format, file_size, resolution, video_url, duration, description, uploader_id } = req.body

        const createVideoService = new CreateVideoService()

        const video = await createVideoService.execute({ category, title, thumbnail_url, published_at, is_public, tags, slug, status, format, file_size, resolution, video_url, duration, description, uploader_id })

        return res.json(video)
    }
}

export { CreateVideoController }