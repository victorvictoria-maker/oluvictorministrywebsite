/*
  Warnings:

  - You are about to drop the `Admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Devotionals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Admins";

-- DropTable
DROP TABLE "Devotionals";

-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devotionals" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "bibleVerse" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "declaration" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "devotionals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "devotionals_date_key" ON "devotionals"("date");
