-- CreateEnum
CREATE TYPE "DoctorStatus" AS ENUM ('VERIFIED', 'IN_PROGRESS', 'DECLINED');

-- CreateEnum
CREATE TYPE "InteractionMode" AS ENUM ('ONLINE', 'INCLINIC', 'HOME', 'HOSPITAL');

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" "DoctorStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "interactionMode" "InteractionMode" NOT NULL DEFAULT 'ONLINE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_phone_key" ON "Doctor"("phone");
