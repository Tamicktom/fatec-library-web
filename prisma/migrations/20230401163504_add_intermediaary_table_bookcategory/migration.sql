/*
  Warnings:

  - You are about to drop the column `bookId` on the `Categorie` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "BookCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bookId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "BookCategory_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BookCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categorie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);
INSERT INTO "new_Categorie" ("createdAt", "deletedAt", "description", "id", "image", "name", "updatedAt") SELECT "createdAt", "deletedAt", "description", "id", "image", "name", "updatedAt" FROM "Categorie";
DROP TABLE "Categorie";
ALTER TABLE "new_Categorie" RENAME TO "Categorie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "BookCategory_bookId_categoryId_key" ON "BookCategory"("bookId", "categoryId");
