import { Request, Response } from "express";
import { CreateVideoService } from "../../services/video/create-video-service";

class CreateVideoController {
    async handle(req: Request, res: Response) {

        const createVideoService = new CreateVideoService()

        const video = await createVideoService.execute()

        return res.json(video)
    }
}

export { CreateVideoController }