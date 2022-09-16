-- CreateTable
CREATE TABLE "Feed" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "legal" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "linkName" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "Feed_pkey" PRIMARY KEY ("id")
);
