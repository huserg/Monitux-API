
--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `load` varchar(45) NOT NULL DEFAULT 'unknown',
  `status` varchar(45) NOT NULL DEFAULT 'unknown',
  `monitoring` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

DELIMITER ;;
CREATE PROCEDURE `save_services`(IN p_name VARCHAR(255), IN p_load VARCHAR(45), IN p_status VARCHAR(45))
BEGIN

SET @v_count = 0;

SELECT Count(*)
	INTO @v_count
	FROM services 
	WHERE name = p_name;

IF @v_count > 0
	THEN
	UPDATE services SET `load` = p_load, status = p_status WHERE name = p_name;
ELSE 
	INSERT INTO services (name, `load`, status, monitoring) VALUES (p_name, p_load, p_status, 0);
END IF;

END ;;
DELIMITER ;


DELIMITER ;;
CREATE PROCEDURE `switchMonitoringStatus`(IN p_name VARCHAR(255))
BEGIN
SET @v_monit = 0;

SELECT `monitoring` INTO @v_monit
	FROM services 
	WHERE name = p_name;
    
IF @v_monit = 1
THEN 
    SET @v_monit = 0;
ELSE
	SET @v_monit = 1;
END IF;    

UPDATE services SET `monitoring` = @v_monit WHERE name = p_name;

END ;;
DELIMITER ;
