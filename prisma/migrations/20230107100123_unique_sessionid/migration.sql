/*
  Warnings:

  - A unique constraint covering the columns `[sesssionid]` on the table `race` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "race_sesssionid_key" ON "race"("sesssionid");
