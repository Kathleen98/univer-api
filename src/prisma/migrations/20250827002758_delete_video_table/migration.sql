/*
  Warnings:

  - You are about to drop the `videos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."videos" DROP CONSTRAINT "videos_uploader_id_fkey";

-- DropTable
DROP TABLE "public"."videos";

-- DropEnum
DROP TYPE "public"."VideoStatus";
