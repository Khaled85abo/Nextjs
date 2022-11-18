-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` INTEGER NOT NULL,
    `currency` VARCHAR(255) NOT NULL,
    `value` INTEGER NOT NULL,
    `customer` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `status` ENUM('Done', 'Pending', 'Processing', 'Shipping', 'Delivering') NOT NULL DEFAULT 'Done',
    `country` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
