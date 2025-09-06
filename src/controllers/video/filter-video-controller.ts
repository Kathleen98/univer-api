import { Request, Response } from "express";
import { FilterVideoService } from "../../services/video/filter-video-service";

class FilterVideoController {
  async handle(req: Request, res: Response ){

    const slug = req.body.slug

    const service = new FilterVideoService

    const execute = await service.execute({slug})

    return res.json(execute)
  }
}

export {FilterVideoController}