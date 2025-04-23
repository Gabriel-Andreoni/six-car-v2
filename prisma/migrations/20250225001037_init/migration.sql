-- CreateTable
CREATE TABLE "Carro" (
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
