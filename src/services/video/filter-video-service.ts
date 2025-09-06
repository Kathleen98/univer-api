import prismaClient from "../../prisma"

interface FilterVideoServiceProps{
  slug: string
}

class FilterVideoService{
    async execute({slug} : FilterVideoServiceProps){

      const database = prismaClient

      const findVideo = database.video.findUnique({
        where:{
          slug: slug
        }
      })

      return findVideo
  
    }
}

export {FilterVideoService}