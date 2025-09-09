
import { PrismaClient } from '@prisma/client';
import { ParamsDictionary } from 'express-serve-static-core';

interface FilterVideoServiceProps{
  slug: ParamsDictionary
}

class FilterVideoService{
    async execute({slug} : FilterVideoServiceProps){

      const database = PrismaClient

      const findVideo = database.video.findUnique({
        where:{
          slug: slug.slug
        }
      })

      return findVideo
  
    }
}

export {FilterVideoService}