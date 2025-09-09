/*
  Warnings:

  - You are about to drop the column `userId` on the `user_watch_history` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user_watchlist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId,videoId]` on the table `user_watchlist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `user_watch_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `user_watchlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."user_watch_history" DROP CONSTRAINT "user_watch_history_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_watchlist" DROP CONSTRAINT "user_watchlist_userId_fkey";

-- DropIndex
DROP INDEX "public"."user_watchlist_userId_videoId_key";

-- AlterTable
ALTER TABLE "public"."episodes" ADD COLUMN     "introEndTime" INTEGER,
ADD COLUMN     "introStartTime" INTEGER;

-- AlterTable
ALTER TABLE "public"."user_watch_history" DROP COLUMN "userId",
ADD COLUMN     "episodeId" TEXT,
ADD COLUMN     "profileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."user_watchlist" DROP COLUMN "userId",
ADD COLUMN     "profileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."videos" ADD COLUMN     "introEndTime" INTEGER,
ADD COLUMN     "introStartTime" INTEGER;

-- CreateTable
CREATE TABLE "public"."profiles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_name_key" ON "public"."profiles"("userId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "user_watchlist_profileId_videoId_key" ON "public"."user_watchlist"("profileId", "videoId");

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_watchlist" ADD CONSTRAINT "user_watchlist_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_watch_history" ADD CONSTRAINT "user_watch_history_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
