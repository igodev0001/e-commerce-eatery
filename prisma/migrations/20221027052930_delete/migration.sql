/*
  Warnings:

  - You are about to drop the `Product_Ingredient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product_Ingredient" DROP CONSTRAINT "Product_Ingredient_ingredient_id_fkey";

-- DropForeignKey
ALTER TABLE "Product_Ingredient" DROP CONSTRAINT "Product_Ingredient_product_id_fkey";

-- DropTable
DROP TABLE "Product_Ingredient";
