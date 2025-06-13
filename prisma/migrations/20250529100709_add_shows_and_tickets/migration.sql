/*
  Warnings:

  - You are about to drop the column `badgeColor` on the `attraction` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `attraction` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `attraction` table. All the data in the column will be lost.
  - You are about to drop the column `stats` on the `attraction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `attraction` DROP COLUMN `badgeColor`,
    DROP COLUMN `color`,
    DROP COLUMN `icon`,
    DROP COLUMN `stats`;

-- CreateTable
CREATE TABLE `Show` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `shortDescription` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `times` JSON NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `popular` BOOLEAN NOT NULL DEFAULT false,
    `capacity` VARCHAR(191) NOT NULL,
    `features` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `price` DOUBLE NOT NULL,
    `features` JSON NOT NULL,
    `badge` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TicketOption` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `price` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
