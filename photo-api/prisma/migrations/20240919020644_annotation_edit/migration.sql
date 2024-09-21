/*
  Warnings:

  - You are about to drop the column `height` on the `Annotation` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `Annotation` table. All the data in the column will be lost.
  - You are about to drop the column `x` on the `Annotation` table. All the data in the column will be lost.
  - You are about to drop the column `y` on the `Annotation` table. All the data in the column will be lost.
  - Added the required column `xend` to the `Annotation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xstart` to the `Annotation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yend` to the `Annotation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ystart` to the `Annotation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Annotation" DROP COLUMN "height",
DROP COLUMN "width",
DROP COLUMN "x",
DROP COLUMN "y",
ADD COLUMN     "xend" INTEGER NOT NULL,
ADD COLUMN     "xstart" INTEGER NOT NULL,
ADD COLUMN     "yend" INTEGER NOT NULL,
ADD COLUMN     "ystart" INTEGER NOT NULL;
