/*
  Warnings:

  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "updated_at",
ALTER COLUMN "plan_type" SET DEFAULT 'free',
ALTER COLUMN "payment" SET DEFAULT false;
