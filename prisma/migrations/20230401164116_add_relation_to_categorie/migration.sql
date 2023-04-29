/*
  Warnings:

  - You are about to drop the `BookCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BookCategory";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_BookToCategorie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_BookToCategorie_A_fkey" FOREIGN KEY ("A") REFERENCES "Book" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BookToCategorie_B_fkey" FOREIGN KEY ("B") REFERENCES "Categorie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToCategorie_AB_unique" ON "_BookToCategorie"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToCategorie_B_index" ON "_BookToCategorie"("B");
