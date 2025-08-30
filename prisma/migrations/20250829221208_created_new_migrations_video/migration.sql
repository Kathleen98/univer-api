/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."AgeRating" AS ENUM ('G', 'PG', 'PG13', 'R', 'NC17');

-- CreateEnum
CREATE TYPE "public"."VideoType" AS ENUM ('MOVIE', 'SERIES', 'DOCUMENTARY', 'ANIMATION');

-- CreateEnum
CREATE TYPE "public"."VideoStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'COMING_SOON', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "public"."CastRole" AS ENUM ('ACTOR', 'DIRECTOR', 'PRODUCER', 'WRITER', 'CINEMATOGRAPHER', 'COMPOSER');

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "updated_at" DROP DEFAULT;

-- CreateTable
CREATE TABLE "public"."videos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "trailerUrl" TEXT,
    "ageRating" "public"."AgeRating" NOT NULL,
    "type" "public"."VideoType" NOT NULL,
    "status" "public"."VideoStatus" NOT NULL DEFAULT 'ACTIVE',
    "isOriginal" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."genres" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."video_genres" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "video_genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."people" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "biography" TEXT,
    "birthDate" TIMESTAMP(3),
    "photoUrl" TEXT,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."video_cast" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "role" "public"."CastRole" NOT NULL,
    "character" TEXT,

    CONSTRAINT "video_cast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."seasons" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "seasonNumber" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "releaseDate" TIMESTAMP(3),

    CONSTRAINT "seasons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."episodes" (
    "id" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "episodeNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "episodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reviews" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_watchlist" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_watch_history" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "watchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_watch_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "public"."genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "genres_slug_key" ON "public"."genres"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "video_genres_videoId_genreId_key" ON "public"."video_genres"("videoId", "genreId");

-- CreateIndex
CREATE UNIQUE INDEX "video_cast_videoId_personId_role_key" ON "public"."video_cast"("videoId", "personId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "seasons_videoId_seasonNumber_key" ON "public"."seasons"("videoId", "seasonNumber");

-- CreateIndex
CREATE UNIQUE INDEX "episodes_seasonId_episodeNumber_key" ON "public"."episodes"("seasonId", "episodeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_userId_videoId_key" ON "public"."reviews"("userId", "videoId");

-- CreateIndex
CREATE UNIQUE INDEX "user_watchlist_userId_videoId_key" ON "public"."user_watchlist"("userId", "videoId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."video_genres" ADD CONSTRAINT "video_genres_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."videos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."video_genres" ADD CONSTRAINT "video_genres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "public"."genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."video_cast" ADD CONSTRAINT "video_cast_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."videos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."video_cast" ADD CONSTRAINT "video_cast_personId_fkey" FOREIGN KEY ("personId") REFERENCES "public"."people"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."seasons" ADD CONSTRAINT "seasons_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."videos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."episodes" ADD CONSTRAINT "episodes_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "public"."seasons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."videos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_watchlist" ADD CONSTRAINT "user_watchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_watchlist" ADD CONSTRAINT "user_watchlist_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."videos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_watch_history" ADD CONSTRAINT "user_watch_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_watch_history" ADD CONSTRAINT "user_watch_history_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."videos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
