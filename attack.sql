-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: halloween_queens
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attack`
--

DROP TABLE IF EXISTS `attack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attack` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `sound` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attack`
--

LOCK TABLES `attack` WRITE;
/*!40000 ALTER TABLE `attack` DISABLE KEYS */;
INSERT INTO `attack` VALUES (1,'Coup de sac à main','handbackstroke.mp3'),(2,'Shame on tweet','shameontweet.mp3'),(3,'Crêpage de chignon','chignon.mp3'),(4,'Attaque PHP','phpattack.mp3'),(5,'Cri','cri.mp3'),(6,'Morsure','morsure.mp3'),(7,'Coup de pelle','pelle.mp3'),(8,'Coup de talon aiguille','aiguille.mp3'),(9,'Prout discret','prout.mp3'),(10,'Langue de pute','snake.mp3');
/*!40000 ALTER TABLE `attack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attackmonster`
--

DROP TABLE IF EXISTS `attackmonster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attackmonster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `monster_id` int(11) NOT NULL,
  `attack_id` int(11) NOT NULL,
  `limitstroke` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_attackmonster_monster` (`monster_id`),
  KEY `fk_attackmonster_attack` (`attack_id`),
  CONSTRAINT `fk_attackmonster_attack` FOREIGN KEY (`attack_id`) REFERENCES `attack` (`id`),
  CONSTRAINT `fk_attackmonster_monster` FOREIGN KEY (`monster_id`) REFERENCES `monster` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attackmonster`
--

LOCK TABLES `attackmonster` WRITE;
/*!40000 ALTER TABLE `attackmonster` DISABLE KEYS */;
/*!40000 ALTER TABLE `attackmonster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monster`
--

DROP TABLE IF EXISTS `monster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `level` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `picture_legend` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monster`
--

LOCK TABLES `monster` WRITE;
/*!40000 ALTER TABLE `monster` DISABLE KEYS */;
/*!40000 ALTER TABLE `monster` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-30 20:36:50
