-- CreateTable
CREATE TABLE "Admins" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devotionals" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "bibleVerse" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "declaration" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Devotionals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admins_email_key" ON "Admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Devotionals_date_key" ON "Devotionals"("date");
