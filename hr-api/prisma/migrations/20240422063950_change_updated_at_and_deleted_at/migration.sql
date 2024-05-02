-- AlterTable
ALTER TABLE `attendance` ALTER COLUMN `updatedAt` DROP DEFAULT,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `employee` ALTER COLUMN `updatedAt` DROP DEFAULT,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `leaverequest` ALTER COLUMN `updatedAt` DROP DEFAULT,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `monthlypayroll` ALTER COLUMN `updatedAt` DROP DEFAULT,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `position` ALTER COLUMN `updatedAt` DROP DEFAULT,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `shift` ALTER COLUMN `updatedAt` DROP DEFAULT,
    MODIFY `deletedAt` DATETIME(3) NULL;
