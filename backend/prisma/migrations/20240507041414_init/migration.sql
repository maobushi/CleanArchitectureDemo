-- CreateTable
CREATE TABLE "PostType" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "hashtags" TEXT[],
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "entryNumber" INTEGER NOT NULL,
    "companyLogo" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "shareNumber" INTEGER NOT NULL,

    CONSTRAINT "PostType_pkey" PRIMARY KEY ("id")
);
