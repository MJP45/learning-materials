CREATE DATABASE  IF NOT EXISTS `nology_staff`;
USE `nology_staff`;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `animal`;

CREATE TABLE `animal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `species` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Data for table `animal`
--

INSERT INTO `employee` VALUES 
	(1,'Rolo','Dog','Lead Companion'),
	(2,'Daisy','Cat','Sass Queen'),
	(3,'Midnight','Rabbit','Head of Evil Doings'),
	(4,'Chestnut','Gerbil','Wrongful Deaths Investigator'),
	(5,'Charles','Stick Insect','Chief of Espionage');