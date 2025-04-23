/*
  Warnings:

  - You are about to drop the `Carro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Carro";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Carros" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "km" REAL NOT NULL,
    "year" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "gear" TEXT NOT NULL,
    "exchange" TEXT NOT NULL,
    "taxes" TEXT NOT NULL,
    "images" TEXT NOT NULL
);
