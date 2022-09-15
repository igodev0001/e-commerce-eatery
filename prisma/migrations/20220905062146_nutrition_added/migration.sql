-- CreateTable
CREATE TABLE "Product_nutrition" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL,
    "totalFat" INTEGER NOT NULL,
    "totalCarb" INTEGER NOT NULL,
    "protein" INTEGER NOT NULL,

    CONSTRAINT "Product_nutrition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_nutrition_product_id_key" ON "Product_nutrition"("product_id");

-- AddForeignKey
ALTER TABLE "Product_nutrition" ADD CONSTRAINT "Product_nutrition_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
