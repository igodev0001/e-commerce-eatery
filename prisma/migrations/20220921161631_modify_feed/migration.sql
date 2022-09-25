/*
  Warnings:

  - Added the required column `size` to the `Feed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usedFor` to the `Feed` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feed" ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "usedFor" TEXT NOT NULL;
