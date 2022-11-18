/*
  Warnings:

  - You are about to drop the column `country` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `customer` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[OrderNr]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[FaktNr]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `FaktDat` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FaktNr` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ForetagKod` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `KundRef2` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LandsKod` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OhOrdSum` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OhOrdSumInklMoms` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OrdBokningsStatus` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OrdDatum` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OrdLevAdr1` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OrdLevAdr3` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OrdLevAdr4` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OrdLevDat` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OrderNr` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OrderNrAlfa` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Saljare` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `VRef` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ValKod` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `country`,
    DROP COLUMN `currency`,
    DROP COLUMN `customer`,
    DROP COLUMN `date`,
    DROP COLUMN `number`,
    DROP COLUMN `status`,
    DROP COLUMN `value`,
    ADD COLUMN `FaktDat` DATETIME(3) NOT NULL,
    ADD COLUMN `FaktNr` INTEGER NOT NULL,
    ADD COLUMN `ForetagKod` INTEGER NOT NULL,
    ADD COLUMN `KundRef2` VARCHAR(191) NOT NULL,
    ADD COLUMN `LandsKod` VARCHAR(191) NOT NULL,
    ADD COLUMN `OhOrdSum` DOUBLE NOT NULL,
    ADD COLUMN `OhOrdSumInklMoms` DOUBLE NOT NULL,
    ADD COLUMN `OrdBokningsStatus` INTEGER NOT NULL,
    ADD COLUMN `OrdDatum` DATETIME(3) NOT NULL,
    ADD COLUMN `OrdLevAdr1` VARCHAR(191) NOT NULL,
    ADD COLUMN `OrdLevAdr3` VARCHAR(191) NOT NULL,
    ADD COLUMN `OrdLevAdr4` VARCHAR(191) NOT NULL,
    ADD COLUMN `OrdLevDat` DATETIME(3) NOT NULL,
    ADD COLUMN `OrderNr` INTEGER NOT NULL,
    ADD COLUMN `OrderNrAlfa` VARCHAR(191) NOT NULL,
    ADD COLUMN `Saljare` VARCHAR(191) NOT NULL,
    ADD COLUMN `VRef` VARCHAR(191) NOT NULL,
    ADD COLUMN `ValKod` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Order_OrderNr_key` ON `Order`(`OrderNr`);

-- CreateIndex
CREATE UNIQUE INDEX `Order_FaktNr_key` ON `Order`(`FaktNr`);
