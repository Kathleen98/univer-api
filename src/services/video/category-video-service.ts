import { ParamsDictionary } from 'express-serve-static-core';
import prisma from '../../lib/prisma';
import { VideoType } from '@prisma/client';

interface CategoryVideoServiceProps{
  category : ParamsDictionary
}

class CategoryVideoService{
    async execute({category} : CategoryVideoServiceProps){

      try{
        const database = prisma

      const handleFilter = await database.video.findMany({
        where:{
          type: category.category as VideoType
        }
      })

      return handleFilter
      }catch(e){
        return 'Erro no filtro de categoria'
      }
    }
}

export {CategoryVideoService}