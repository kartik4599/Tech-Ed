/*
  Warnings:

  - A unique constraint covering the columns `[userId,courseId]` on the table `User_Courses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_Courses_userId_key";

-- AlterTable
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("orderId");

-- AlterTable
ALTER TABLE "User_Courses" ADD CONSTRAINT "User_Courses_pkey" PRIMARY KEY ("userId", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "User_Courses_userId_courseId_key" ON "User_Courses"("userId", "courseId");
