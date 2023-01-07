/*
  Warnings:

  - You are about to drop the column `sesssionid` on the `race` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sessionid]` on the table `race` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sessionid` to the `race` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "race" DROP CONSTRAINT "race_sesssionid_fkey";

-- DropIndex
DROP INDEX "race_sesssionid_key";

-- AlterTable
ALTER TABLE "race" DROP COLUMN "sesssionid",
ADD COLUMN     "sessionid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "race_sessionid_key" ON "race"("sessionid");

-- AddForeignKey
ALTER TABLE "race" ADD CONSTRAINT "race_sessionid_fkey" FOREIGN KEY ("sessionid") REFERENCES "session"("sessionid") ON DELETE RESTRICT ON UPDATE CASCADE;
