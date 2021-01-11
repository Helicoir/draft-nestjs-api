/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[email]` on the table `User`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN     `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    MODIFY `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Organizations` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191),
    `owner_user_id` INT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
UNIQUE INDEX `Organizations.title_unique`(`title`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Licenses` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `org_id` INT NOT NULL,
    `patched_user_id` INT,
    `role` ENUM('USER', 'EDITOR', 'ADMIN') NOT NULL DEFAULT 'USER',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User.email_unique` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Licenses` ADD FOREIGN KEY (`org_id`) REFERENCES `Organizations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Licenses` ADD FOREIGN KEY (`patched_user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
