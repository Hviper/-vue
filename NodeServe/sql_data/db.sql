SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `db_table`
-- ----------------------------
DROP TABLE IF EXISTS `db_table`;
CREATE TABLE `db_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(10) NOT NULL,
  `password` char(18) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of db_table
-- ----------------------------
INSERT INTO `db_table` VALUES ('1', 'admainVUE', 'admainVUE');
INSERT INTO `db_table` VALUES ('2', '123456789', '123456789');
INSERT INTO `db_table` VALUES ('3', '8888888', '88888888');
