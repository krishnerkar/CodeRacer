-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "githubid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "topspeed" INTEGER NOT NULL,
    "races" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_githubid_key" ON "user"("githubid");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
