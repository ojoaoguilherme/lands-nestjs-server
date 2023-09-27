/*
  Warnings:

  - The primary key for the `parcels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `parcels` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "parcels" DROP CONSTRAINT "parcels_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "parcels_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "parcels_id_key" ON "parcels"("id");
