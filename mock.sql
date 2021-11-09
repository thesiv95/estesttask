-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for users
CREATE DATABASE IF NOT EXISTS `users` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `users`;

-- Dumping structure for table users.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table users.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `createdAt`, `updatedAt`) VALUES
	(1, 'Moshe Ivanov', 'mivanov@gov.co.il', '2021-11-08 22:35:36', '2021-11-08 22:35:36'),
	(2, 'Maya Ivanova', 'mivanov@gov.com', '2021-11-09 07:44:44', '2021-11-09 07:44:44'),
	(3, 'Kirsten Danst', 'kdanst@gov.com', '2021-11-09 07:44:58', '2021-11-09 07:44:58'),
	(4, 'Kirsten Krow', 'kkrow@gov.com', '2021-11-09 07:51:57', '2021-11-09 07:51:57'),
	(5, 'Peter Peter', 'pp12@gov.com', '2021-11-09 07:52:15', '2021-11-09 07:52:15'),
	(6, 'Green Grey', 'ggrey@gov.com', '2021-11-09 07:55:35', '2021-11-09 07:55:35'),
	(7, 'Mitchell Iskowitch', 'misk222@gov.com', '2021-11-09 07:56:07', '2021-11-09 07:56:07'),
	(8, 'Gilon Mazar', 'gmazar@gov.co.il', '2021-11-09 07:56:26', '2021-11-09 07:56:26'),
	(9, 'Iaokim Moses', 'i_moses@gov.co.il', '2021-11-09 07:56:51', '2021-11-09 07:56:51'),
	(10, 'Tohy Wassermann', 't.wassermann.1989@gov.co.il', '2021-11-09 07:57:10', '2021-11-09 07:57:10'),
	(11, 'Tohy Dayan', 't.dayan.1989@gov.co.il', '2021-11-09 07:57:22', '2021-11-09 07:57:22'),
	(12, 'Kron Kron', 'kronnie9@gov.co.il', '2021-11-09 08:01:21', '2021-11-09 08:01:21');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
