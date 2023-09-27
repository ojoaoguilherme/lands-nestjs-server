-- CreateTable
CREATE TABLE "parcels" (
    "id" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "rotation" TEXT NOT NULL,
    "object_model_id" INTEGER,

    CONSTRAINT "parcels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lands" (
    "token_id" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "rotation" TEXT NOT NULL,
    "image" TEXT,
    "object_model_id" INTEGER,
    "building_model_id" INTEGER,

    CONSTRAINT "lands_pkey" PRIMARY KEY ("token_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "parcels_id_key" ON "parcels"("id");

-- CreateIndex
CREATE UNIQUE INDEX "lands_token_id_key" ON "lands"("token_id");
