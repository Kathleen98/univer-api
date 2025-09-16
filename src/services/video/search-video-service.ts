import prisma from '../../lib/prisma'

interface SearchVideoServiceProsp{
  query: string 
}

class SearchVideoService{
  async execute({query} : SearchVideoServiceProsp ){

    try {
      
      const database = prisma 

      const queryVideo = await database.video.findMany({
        where:{
          OR: [
            {
              title: {
                contains: query,
                mode: 'insensitive'
              },
            },
            {
              description: {
                contains: query,
                mode: 'insensitive'
              }
            }
          ]
        }
      })

      return queryVideo

    } catch (error) {
        console.error(`Erro ao realizar o filtro, ${error}`)
    }
   
  }
}

export {SearchVideoService}