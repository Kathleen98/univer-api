import { Module } from "@nestjs/common";
import { SingleVideoController } from "./single-video.controller";


@Module({
    controllers: [SingleVideoController],
})
export class SingleVideoModule { }