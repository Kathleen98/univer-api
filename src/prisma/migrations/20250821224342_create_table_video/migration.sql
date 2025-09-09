-- CreateEnum
CREATE TYPE "public"."VideoStatus" AS ENUM ('DRAFT', 'PROCESSING', 'PUBLISHED', 'PRIVATE', 'ARCHIVED');

-- CreateTable
CREATE TABLE "public"."videos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "video_url" TEXT NOT NULL,
    "thumbnail_url" TEXT,
    "resolution" TEXT,
    "file_size" BIGINT,
    "format" TEXT,
    "status" "public"."VideoStatus" NOT NULL DEFAULT 'DRAFT',
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "slug" TEXT NOT NULL,
    "tags" TEXT[],
    "uploader_id" TEXT NOT NULL,
    "view_count" INTEGER NOT NULL DEFAULT 0,
    "like_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published_at" TIMESTAMP(3),

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "videos_slug_key" ON "public"."videos"("slug");

-- CreateIndex
CREATE INDEX "videos_status_idx" ON "public"."videos"("status");

-- CreateIndex
CREATE INDEX "videos_category_idx" ON "public"."videos"("category");

-- CreateIndex
CREATE INDEX "videos_created_at_idx" ON "public"."videos"("created_at");

-- CreateIndex
CREATE INDEX "videos_view_count_idx" ON "public"."videos"("view_count");

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_uploader_id_fkey" FOREIGN KEY ("uploader_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
