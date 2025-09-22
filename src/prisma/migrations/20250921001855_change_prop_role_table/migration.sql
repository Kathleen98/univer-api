/*
  Warnings:

  - You are about to drop the column `role` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."profiles" DROP COLUMN "role";

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "role" TEXT;
