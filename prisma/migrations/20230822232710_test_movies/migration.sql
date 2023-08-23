-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "movie" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);
