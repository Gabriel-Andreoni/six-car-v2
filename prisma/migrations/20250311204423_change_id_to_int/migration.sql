/*
  Warnings:

  - The primary key for the `Carros` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Carros` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Carros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
INSERT INTO "new_Carros" ("description", "exchange", "gear", "id", "images", "km", "location", "name", "price", "taxes", "year") SELECT "description", "exchange", "gear", "id", "images", "km", "location", "name", "price", "taxes", "year" FROM "Carros";
DROP TABLE "Carros";
ALTER TABLE "new_Carros" RENAME TO "Carros";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
