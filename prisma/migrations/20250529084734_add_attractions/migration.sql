-- CreateTable
CREATE TABLE `Attraction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `shortDescription` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `waitTime` INTEGER NOT NULL,
    `minHeight` INTEGER NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `intensity` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `popularity` DOUBLE NOT NULL,
    `tags` JSON NOT NULL,
    `features` JSON NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `badgeColor` VARCHAR(191) NOT NULL,
    `stats` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
