
import { ParamsDictionary } from 'express-serve-static-core';
import prisma from '../../lib/prisma';


interface FilterVideoServiceProps{
  slug: ParamsDictionary
}

class FilterVideoService{
    async execute({slug} : FilterVideoServiceProps){

      const database = prisma

      const findVideo = database.video.findUnique({
        where:{
          slug: slug.slug
        }
      })

      return findVideo
  
    }
}

export {FilterVideoService}