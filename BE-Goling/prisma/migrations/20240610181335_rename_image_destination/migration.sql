/*
  Warnings:

  - You are about to drop the `ImageDestionation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ImageDestionation` DROP FOREIGN KEY `ImageDestionation_destination_id_fkey`;

-- DropTable
DROP TABLE `ImageDestionation`;

-- CreateTable
CREATE TABLE `ImageDestination` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image_url` VARCHAR(191) NOT NULL,
    `destination_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImageDestination` ADD CONSTRAINT `ImageDestination_destination_id_fkey` FOREIGN KEY (`destination_id`) REFERENCES `Destination`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
