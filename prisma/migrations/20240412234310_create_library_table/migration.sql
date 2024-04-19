/*
  Warnings:

  - Added the required column `library_id` to the `shelfs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shelfs` ADD COLUMN `library_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `librarys` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `shelfs` ADD CONSTRAINT `shelfs_library_id_fkey` FOREIGN KEY (`library_id`) REFERENCES `librarys`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
