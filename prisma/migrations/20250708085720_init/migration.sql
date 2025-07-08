-- CreateTable
CREATE TABLE "InterestedDoctor" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "contactno" TEXT,
    "country" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalcode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InterestedDoctor_pkey" PRIMARY KEY ("id")
);
