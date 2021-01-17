-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: groupomania_development
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `groupomania_development`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `groupomania_development` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `groupomania_development`;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text,
  `likes` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=263 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (31,6,'Lorem ipsum dolor sit amet.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor justo ac ornare varius. Maecenas maximus ex eu metus fermentum pharetra. Duis sit amet malesuada augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus venenatis augue id magna congue varius. Mauris finibus mauris in augue sodales rhoncus. Suspendisse sed arcu nibh. Sed at justo sed eros pellentesque luctus eget eget quam. Quisque non ex id mi bibendum eleifend quis at tortor.',0,'2021-01-02 12:48:09','2021-01-02 12:48:09'),(32,1,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum libero. Nam pulvinar, felis in aliquet porttitor, eros justo venenatis est, vel mattis nibh nisl pharetra sem. Curabitur posuere placerat enim, in tincidunt quam tristique quis. Etiam pellentesque mi ut eros sagittis, sed aliquam massa tempus. Nulla blandit egestas sollicitudin. Nulla suscipit hendrerit est aliquam elementum. Curabitur a dictum nunc, vel pellentesque justo. Curabitur sed augue ut leo vehicula congue eu at leo. Nunc vulputate, orci quis accumsan iaculis, purus sem consequat ligula, eu euismod elit sapien eu nibh. Nullam sed pulvinar velit.\n\nProin ultricies odio quis dictum facilisis. Sed non orci fringilla, eleifend dolor nec, pulvinar lorem. Mauris urna tellus, tempor hendrerit efficitur sit amet, mollis vitae dolor. Duis in felis turpis. Cras venenatis pellentesque lectus non fringilla. Pellentesque nulla lorem, tristique ut nunc convallis, interdum suscipit nunc. Sed convallis nisi nibh. Integer cursus mi est, eu convallis sapien commodo ac. Aliquam erat volutpat. Curabitur a dictum nisi. Donec vel enim sodales, accumsan odio vitae, rhoncus nisi. Integer ac mi vitae magna malesuada porttitor eget at urna.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque ultricies eros, nec eleifend velit feugiat sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas consequat facilisis viverra. Donec imperdiet urna eget elit vehicula, a dapibus ligula mattis. Pellentesque non lacinia enim. Integer gravida orci vel ante ullamcorper elementum a ac nisl. Nunc euismod porta cursus. Sed imperdiet hendrerit sapien, eget tincidunt leo maximus eget. Sed sollicitudin neque nulla, a ullamcorper dolor bibendum nec. Praesent lobortis euismod neque consectetur imperdiet. Morbi ultricies, turpis at accumsan viverra, leo arcu auctor quam, nec luctus massa dui sed nisl. Ut aliquam luctus ex a ullamcorper. Nunc quis cursus metus, a pretium est.\n\nAliquam pellentesque consequat sem in dictum. Vestibulum nec congue tellus. Nullam facilisis dolor sit amet luctus auctor. Ut auctor augue non ligula varius, et aliquet ipsum dignissim. Ut dictum tortor justo, eu aliquet mi molestie ac. Nam vestibulum nisi in massa pulvinar sodales ut eu velit. Sed eu arcu ac libero gravida pulvinar. Sed luctus dictum feugiat. Etiam ut rutrum mi, eget maximus augue. Nullam quis gravida libero. Ut vestibulum elit ac egestas lobortis. Sed posuere arcu mattis eleifend consectetur. Phasellus cursus eu nisi nec egestas. Cras dignissim efficitur felis ut cursus.\n\nPellentesque aliquet semper neque at pretium. Sed urna augue, faucibus eget sem sed, fringilla tincidunt augue. Nunc vitae placerat diam. In eget lorem ipsum. Ut sed auctor diam. Phasellus at ligula id massa pretium placerat. Nulla at faucibus elit, vel egestas tellus. Aliquam erat volutpat. Fusce efficitur lorem id enim luctus, sed hendrerit tellus varius. In tempor turpis purus, non fermentum massa posuere vel. Donec eu quam ligula. Vivamus sodales diam nec nibh pretium malesuada. Praesent ut condimentum elit.',0,'2021-01-02 12:49:33','2021-01-02 12:49:33'),(33,6,'Lorem ipsum dolor sit amet, consectetur adipiscing','Proin ultricies odio quis dictum facilisis. Sed non orci fringilla, eleifend dolor nec, pulvinar lorem. Mauris urna tellus, tempor hendrerit efficitur sit amet, mollis vitae dolor. Duis in felis turpis. Cras venenatis pellentesque lectus non fringilla. Pellentesque nulla lorem, tristique ut nunc convallis, interdum suscipit nunc. Sed convallis nisi nibh. Integer cursus mi est, eu convallis sapien commodo ac. Aliquam erat volutpat. Curabitur a dictum nisi. Donec vel enim sodales, accumsan odio vitae, rhoncus nisi. Integer ac mi vitae magna malesuada porttitor eget at urna.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque ultricies eros, nec eleifend velit feugiat sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas consequat facilisis viverra. Donec imperdiet urna eget elit vehicula, a dapibus ligula mattis. Pellentesque non lacinia enim. Integer gravida orci vel ante ullamcorper elementum a ac nisl. Nunc euismod porta cursus. Sed imperdiet hendrerit sapien, eget tincidunt leo maximus eget. Sed sollicitudin neque nulla, a ullamcorper dolor bibendum nec. Praesent lobortis euismod neque consectetur imperdiet. Morbi ultricies, turpis at accumsan viverra, leo arcu auctor quam, nec luctus massa dui sed nisl. Ut aliquam luctus ex a ullamcorper. Nunc quis cursus metus, a pretium est.',0,'2021-01-03 00:26:32','2021-01-03 00:26:32'),(40,6,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum libero.','Proin ultricies odio quis dictum facilisis. Sed non orci fringilla, eleifend dolor nec, pulvinar lorem. Mauris urna tellus, tempor hendrerit efficitur sit amet, mollis vitae dolor. Duis in felis turpis. Cras venenatis pellentesque lectus non fringilla. Pellentesque nulla lorem, tristique ut nunc convallis, interdum suscipit nunc. Sed convallis nisi nibh. Integer cursus mi est, eu convallis sapien commodo ac. Aliquam erat volutpat. Curabitur a dictum nisi. Donec vel enim sodales, accumsan odio vitae, rhoncus nisi. Integer ac mi vitae magna malesuada porttitor eget at urna.\n\n',0,'2021-01-06 12:06:15','2021-01-06 12:06:15'),(41,6,'Lorem ipsum dolor sit amet','Pellentesque aliquet semper neque at pretium. Sed urna augue, faucibus eget sem sed, fringilla tincidunt augue. Nunc vitae placerat diam. In eget lorem ipsum. Ut sed auctor diam. Phasellus at ligula id massa pretium placerat. Nulla at faucibus elit, vel egestas tellus. Aliquam erat volutpat. Fusce efficitur lorem id enim luctus, sed hendrerit tellus varius. In tempor turpis purus, non fermentum massa posuere vel. Donec eu quam ligula. Vivamus sodales diam nec nibh pretium malesuada. Praesent ut condimentum elit.\n\n',0,'2021-01-06 12:06:38','2021-01-06 12:06:38'),(42,6,'Neque porro quisquam est qui dolorem','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum libero. Nam pulvinar, felis in aliquet porttitor, eros justo venenatis est, vel mattis nibh nisl pharetra sem. Curabitur posuere placerat enim, in tincidunt quam tristique quis. Etiam pellentesque mi ut eros sagittis, sed aliquam massa tempus. Nulla blandit egestas sollicitudin. Nulla suscipit hendrerit est aliquam elementum. Curabitur a dictum nunc, vel pellentesque justo. Curabitur sed augue ut leo vehicula congue eu at leo. Nunc vulputate, orci quis accumsan iaculis, purus sem consequat ligula, eu euismod elit sapien eu nibh. Nullam sed pulvinar velit.\n\n',0,'2021-01-06 12:07:01','2021-01-06 12:07:01'),(43,6,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum libero.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum libero. Nam pulvinar, felis in aliquet porttitor, eros justo venenatis est, vel mattis nibh nisl pharetra sem. Curabitur posuere placerat enim, in tincidunt quam tristique quis. Etiam pellentesque mi ut eros sagittis, sed aliquam massa tempus. Nulla blandit egestas sollicitudin. Nulla suscipit hendrerit est aliquam elementum. Curabitur a dictum nunc, vel pellentesque justo. Curabitur sed augue ut leo vehicula congue eu at leo. Nunc vulputate, orci quis accumsan iaculis, purus sem consequat ligula, eu euismod elit sapien eu nibh. Nullam sed pulvinar velit.\n\n',0,'2021-01-06 16:25:19','2021-01-06 16:25:19'),(157,1,'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum libero. Nam pulvinar, felis in aliquet porttitor, eros justo venenatis est, vel mattis nibh nisl pharetra sem. Curabitur posuere placerat enim, in tincidunt quam tristique quis. Etiam pellentesque mi ut eros sagittis, sed aliquam massa tempus. Nulla blandit egestas sollicitudin. Nulla suscipit hendrerit est aliquam elementum. Curabitur a dictum nunc, vel pellentesque justo. Curabitur sed augue ut leo vehicula congue eu at leo. Nunc vulputate, orci quis accumsan iaculis, purus sem consequat ligula, eu euismod elit sapien eu nibh. Nullam sed pulvinar velit.\n\nProin ultricies odio quis dictum facilisis. Sed non orci fringilla, eleifend dolor nec, pulvinar lorem. Mauris urna tellus, tempor hendrerit efficitur sit amet, mollis vitae dolor. Duis in felis turpis. Cras venenatis pellentesque lectus non fringilla. Pellentesque nulla lorem, tristique ut nunc convallis, interdum suscipit nunc. Sed convallis nisi nibh. Integer cursus mi est, eu convallis sapien commodo ac. Aliquam erat volutpat. Curabitur a dictum nisi. Donec vel enim sodales, accumsan odio vitae, rhoncus nisi. Integer ac mi vitae magna malesuada porttitor eget at urna.',0,'2021-01-11 18:18:49','2021-01-11 18:18:49');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20201217182426-create-user.js'),('20201217182657-create-message.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `emailHash` varchar(255) NOT NULL,
  `lock_until` varchar(255) DEFAULT NULL,
  `login_attempts` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `emailHash` (`emailHash`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'U2FsdGVkX19DKFvNg5OBpy0VvMLeTaihEzlKPMQGZGE=','test','test','$2b$10$39xkZZzA91PWXOq096AFGeFVijM2vJuN6m0fAjtebcCjWRjsdYF7C',0,'b642b4217b34b1e8d3bd915fc65c4452',NULL,0,'2020-12-20 22:15:57','2021-01-14 11:51:52'),(6,'U2FsdGVkX18rjDg7u6LdLT+wVi9watQ7tw+PIWkrI9k=','admin','admin','$2b$10$FyPi8jpFTXvFAOXGpGaYVeulRO5F0Ts1matzmM1IrMzofbt2FSFX2',1,'5b37040e6200edb3c7f409e994076872','NULL',0,'2020-12-29 18:30:05','2021-01-17 00:09:34'),(67,'U2FsdGVkX18Ul63l+qY3g/Ayic5Bvy2Vy9Wyoo03q6o=','test2','test2','$2b$10$P9cprYCBYSLyfigmdOevL.e2.VcQeZyf3whAqb6QzWNtR/k9.VLiW',0,'f2c97b1f2d2898cd2d6466ce95d4ba33',NULL,0,'2021-01-17 00:14:49','2021-01-17 00:14:49');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-17  1:25:28
