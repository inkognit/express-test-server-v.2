/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Airplain` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nickname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "nickname" TEXT NOT NULL;

-- DropTable
DROP TABLE "Airplain";

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
