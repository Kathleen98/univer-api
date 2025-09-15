import { Request, Response } from "express";
import { CategoryVideoService } from "../../services/video/category-video-service";

class CategoryVideoController{
  async handle(req: Request, res: Response){

    const category = req.params 

    const start = new CategoryVideoService()

    const servive = await start.execute({category})

    return res.json(servive)

  }
}

export {CategoryVideoController}