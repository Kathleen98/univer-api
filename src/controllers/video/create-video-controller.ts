import { Request, Response } from "express";
import { CreateVideoService } from "../../services/video/create-video-service";
import { CreateVideoInput, createVideoSchema } from "../../@types/zod/create-video-shema";
import z from "zod";


class CreateVideoController {
    async handle(req: Request, res: Response) {

        try {
            const validatedData = createVideoSchema.parse(req.body);

            const createVideoService = new CreateVideoService();

            const video = await createVideoService.execute(validatedData);

            return res.status(201).json(video);

        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    error: "Dados inválidos",
                    details: error.message
                });
            }

            console.error("Erro ao criar vídeo:", error);
            return res.status(500).json({
                error: "Erro interno do servidor"
            });
        }
    }
}

export { CreateVideoController }