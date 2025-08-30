import { Request, Response } from "express";
import { QueryVideoService } from "../../services/video/query-video-service";

class QueryVideoController{
  async handle(req: Request, res: Response){
    try{

      const service = new QueryVideoService()

      const response = await service.execute()

      return res.json(response)
      
    }catch(e){
      return console.error(`Não foi possível trazer a lista de vídeos, error ${e}`)
    }
  }
}

export {QueryVideoController}