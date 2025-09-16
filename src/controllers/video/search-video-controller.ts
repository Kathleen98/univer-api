import { Request, Response } from "express"
import { SearchVideoService } from "../../services/video/search-video-service"

class SearchVideoController {
  async handle(req: Request, res: Response) {

    const { query } = req.query

    if (typeof query !== 'string' || query?.length === 0) {
      return res.status(400).json({ message: 'Parêmetro não aceito, envie uma string' })
    } else {

      const service = new SearchVideoService()

      const data = await service.execute({ query })

      return res.status(200).json(data)
    }

  }
}

export { SearchVideoController }