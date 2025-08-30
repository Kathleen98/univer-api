import z from "zod";

// Enums que devem corresponder ao seu schema.prisma
const AgeRating = z.enum(['G', 'PG', 'PG13', 'R', 'NC17']);
const VideoType = z.enum(['MOVIE', 'SERIES', 'DOCUMENTARY', 'ANIMATION']);
const VideoStatus = z.enum([ 'ARCHIVED', 'ACTIVE', 'INACTIVE', 'COMING_SOON']);

// Schema para criação - DEVE corresponder exatamente ao modelo Prisma
const createVideoSchema = z.object({
    title: z.string().min(1, 'Título é obrigatório'),
    description: z.string().optional(),
    duration: z.number().int().positive('Duração deve ser positiva'),
    releaseDate: z.coerce.date(), // coerce para aceitar string e converter para Date
    
    // URLs - thumbnailUrl é OBRIGATÓRIO no Prisma
    videoUrl: z.url('URL do vídeo inválida'),
    thumbnailUrl: z.url('URL do thumbnail inválida'), // OBRIGATÓRIO
    trailerUrl: z.url('URL do trailer inválida').optional(),
    
    // Classificação e metadados - OBRIGATÓRIOS no Prisma
    ageRating: AgeRating,
    type: VideoType,
    status: VideoStatus.optional().default('ACTIVE'), // tem default no Prisma
    isOriginal: z.boolean().optional().default(false), // tem default no Prisma
});

// // Schema para atualização (todos os campos opcionais exceto ID)
// const updateVideoSchema = z.object({
//     id: z.string().cuid('ID deve ser um CUID válido'), // Prisma usa CUID, não UUID
//     title: z.string().min(1, 'Título é obrigatório').optional(),
//     description: z.string().optional(),
//     duration: z.number().int().positive('Duração deve ser positiva').optional(),
//     releaseDate: z.coerce.date().optional(),
    
//     // URLs
//     videoUrl: z.string().url('URL do vídeo inválida').optional(),
//     thumbnailUrl: z.string().url('URL do thumbnail inválida').optional(),
//     trailerUrl: z.string().url('URL do trailer inválida').optional(),
    
//     // Classificação e metadados
//     ageRating: AgeRating.optional(),
//     type: VideoType.optional(),
//     status: VideoStatus.optional(),
//     isOriginal: z.boolean().optional(),
// });

// // Schema para busca/filtros
// const videoFilterSchema = z.object({
//     ageRating: AgeRating.optional(),
//     type: VideoType.optional(),
//     status: VideoStatus.optional(),
//     isOriginal: z.boolean().optional(),
//     createdAfter: z.coerce.date().optional(),
//     createdBefore: z.coerce.date().optional(),
//     title: z.string().optional(),
// });

// Tipos TypeScript derivados
export type CreateVideoInput = z.infer<typeof createVideoSchema>;
// export type UpdateVideoInput = z.infer<typeof updateVideoSchema>;
// export type VideoFilterInput = z.infer<typeof videoFilterSchema>;

export {
    createVideoSchema,
    // updateVideoSchema,
    // videoFilterSchema,
    AgeRating,
    VideoType,
    VideoStatus,
};