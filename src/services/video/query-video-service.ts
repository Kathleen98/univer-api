import { PrismaClient } from "@prisma/client"


class QueryVideoService {
  async execute() {
    try {
      const data = await PrismaClient.video.findMany()

      return data

    } catch (e){
      return console.error(`Não foi possível acessar o banco de dados, erro ${e}`)
     }

  }
}

export { QueryVideoService }