SET NAMES UTF8;
DROP DATABASE IF EXISTS atz;
CREATE DATABASE atz CHARSET=UTF8;
USE atz;

/**插入用户信息**/
CREATE TABLE atz_usery(
   uid INT PRIMARY KEY AUTO_INCREMENT,
 
  phone VARCHAR(16)  

);

INSERT INTO atz_usery VALUES
( NULL,'13501234567'),
(  NULL,'13501234568'),
(  NULL,'13501234569'),
(  NULL,'13501234560');




/**用户信息**/
CREATE TABLE atz_userr(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
   phone VARCHAR(16),
   foreign key(phone) references
    atz_usery(phone) on update cascade on delete cascade);

  
  -- user_name VARCHAR(32),      #用户名，如王小明
  -- gender INT                  #性别  0-女  1-男
);
/**用户信息**/
INSERT INTO atz_userr VALUES
(NULL, 'doufdou', '1234756', 'doyu@qq.com', '13501234569'),
(NULL, 'doufrdou', '123456', 'dou@qq.com', '13501234567'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560');


