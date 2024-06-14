/*
  Warnings:

  - The primary key for the `Destination` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `ImageDestionation` DROP FOREIGN KEY `ImageDestionation_destination_id_fkey`;

-- DropForeignKey
ALTER TABLE `Transaction` DROP FOREIGN KEY `Transaction_destination_id_fkey`;

-- AlterTable
ALTER TABLE `Destination` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `ImageDestionation` MODIFY `destination_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Transaction` MODIFY `destination_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ImageDestionation` ADD CONSTRAINT `ImageDestionation_destination_id_fkey` FOREIGN KEY (`destination_id`) REFERENCES `Destination`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_destination_id_fkey` FOREIGN KEY (`destination_id`) REFERENCES `Destination`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
