import { Module } from "@nestjs/common";
import { CreateContentController } from "./create-content.controller";


@Module({
    controllers: [CreateContentController],
})
export class CreateContentoModule { }