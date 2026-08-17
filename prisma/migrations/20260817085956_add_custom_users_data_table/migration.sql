-- CreateTable
CREATE TABLE "users_data" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "supabase_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_data_supabase_id_key" ON "users_data"("supabase_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_data_email_key" ON "users_data"("email");

-- CreateIndex
CREATE INDEX "users_data_email_idx" ON "users_data"("email");
