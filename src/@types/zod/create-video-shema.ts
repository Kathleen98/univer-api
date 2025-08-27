import z, { string } from "zod";

const VideoStatus = z.enum(['DRAFT', 'PROCESSING', 'PUBLISHED', 'PRIVATE', 'ARCHIVED'])

const createVideoSchema = z.object({
    title: z.string().min(1, 'Título é obrigatório'),
    description: z.string().optional(),
    duration: z.number().int().positive('Duração deve ser positiva'),
    category: z.string().min(1, 'Categoria é obrigatória'),

    // URLs e arquivos
    video_url: z.url('URL do vídeo inválida'),
    thumbnail_url: z.url().optional(),

    // Metadados técnicos
    resolution: z.string().optional(),
    file_size: z.bigint().optional(),
    format: z.string().optional(),

    // Status e visibilidade
    status: VideoStatus.default('DRAFT'), // Alinhado com o default do Prisma
    is_public: z.boolean().default(false), // Alinhado com o default do Prisma

    // SEO e busca
    slug: z.string().min(1, 'Slug é obrigatório'),
    tags: z.array(z.string()).default([]),

    // Relacionamentos
    uploader_id: z.string().min(1, 'ID do uploader é obrigatório'),

    // Timestamps opcionais para criação
    published_at: z.date().optional()
})

// Schema para atualização (todos os campos opcionais exceto ID)
const updateVideoSchema = z.object({
    id: z.uuid('ID deve ser um UUID válido'),
    title: z.string().min(1, 'Título é obrigatório').optional(),
    description: z.string().optional(),
    duration: z.number().int().positive('Duração deve ser positiva').optional(),
    category: z.string().min(1, 'Categoria é obrigatória').optional(),

    // URLs e arquivos
    video_url: z.url('URL do vídeo inválida').optional(),
    thumbnail_url: z.url().optional(),

    // Metadados técnicos
    resolution: z.string().optional(),
    file_size: z.bigint().optional(),
    format: z.string().optional(),

    // Status e visibilidade
    status: VideoStatus.optional(),
    is_public: z.boolean().optional(),

    // SEO e busca
    slug: z.string().min(1, 'Slug é obrigatório').optional(),
    tags: z.array(z.string()).optional(),

    // Timestamps
    published_at: z.date().optional()
})

// Schema para busca/filtros
const videoFilterSchema = z.object({
    category: z.string().optional(),
    status: VideoStatus.optional(),
    is_public: z.boolean().optional(),
    uploader_id: z.string().optional(),
    tags: z.array(z.string()).optional(),
    created_after: z.date().optional(),
    created_before: z.date().optional()
})

// Tipos TypeScript derivados

type UpdateVideoInput = z.infer<typeof updateVideoSchema>
type VideoFilterInput = z.infer<typeof videoFilterSchema>

export {
    createVideoSchema,
    updateVideoSchema,
    videoFilterSchema,
    VideoStatus,
    type UpdateVideoInput,
    type VideoFilterInput
}

export type CreateVideoInput = z.infer<typeof createVideoSchema>

