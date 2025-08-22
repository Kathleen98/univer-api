import z, { string } from "zod";

const createVideoShema = z.object({
    title: z.string().min(1, 'Título é obrigatório'),
    description: z.string().optional(),
    duration: z.number().int().positive('Duração deve ser positiva'),
    category: z.string().min(1, 'Categoria é obrigatória'),
    video_url: z.url('URL do vídeo inválida'),
    thumbnail_url: z.url().optional(),
    resolution: z.string().optional(),
    file_size: z.bigint().optional(),
    format: z.string().optional(),
    status: z.enum(['DRAFT', 'PROCESSING', 'PUBLISHED', 'PRIVATE', 'ARCHIVED']).default('PUBLISHED'),
    is_public: z.boolean().default(true),
    slug: z.string(),
    tags: z.array(z.string()).default([]),
    uploader_id: z.string(),
    published_at: z.date().optional()
})

export type CreateVideoInput = z.infer<typeof createVideoShema>

