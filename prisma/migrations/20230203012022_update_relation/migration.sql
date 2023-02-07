/*
  Warnings:

  - You are about to drop the column `rolesId` on the `plans` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `domains` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[natural_or_legal_person]` on the table `organizations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `organizations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf_or_cnpj]` on the table `organizations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `permissions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `plans` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `data_of_registration` on the `organizations` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "organizations" DROP COLUMN "data_of_registration",
ADD COLUMN     "data_of_registration" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "plans" DROP COLUMN "rolesId";

-- CreateIndex
CREATE UNIQUE INDEX "domains_name_key" ON "domains"("name");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_natural_or_legal_person_key" ON "organizations"("natural_or_legal_person");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_email_key" ON "organizations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_cpf_or_cnpj_key" ON "organizations"("cpf_or_cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_name_key" ON "permissions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "plans_name_key" ON "plans"("name");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- AddForeignKey
ALTER TABLE "licenses" ADD CONSTRAINT "licenses_plansId_fkey" FOREIGN KEY ("plansId") REFERENCES "plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
