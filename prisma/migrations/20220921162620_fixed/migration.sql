/*
  Warnings:

  - You are about to drop the column `size` on the `Feed` table. All the data in the column will be lost.
  - You are about to drop the column `usedFor` on the `Feed` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feed" DROP COLUMN "size",
DROP COLUMN "usedFor";
