-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "sessionid" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "race" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "sesssionid" TEXT NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL,
    "wpm" INTEGER NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "race_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "session_sessionid_key" ON "session"("sessionid");

-- AddForeignKey
ALTER TABLE "race" ADD CONSTRAINT "race_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "race" ADD CONSTRAINT "race_sesssionid_fkey" FOREIGN KEY ("sesssionid") REFERENCES "session"("sessionid") ON DELETE RESTRICT ON UPDATE CASCADE;
