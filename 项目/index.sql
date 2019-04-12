/****首页商品

 xmgm TINYINT,//项目规模
  hkfs VARCHAR(128),//还款方式
****/
CREATE TABLE atz_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),  //项目名称
   subtitle VARCHAR(64),  //项目名称副标题
  hkfs VARCHAR(128),//还款方式
  xynlv VARCHAR(128),//协议年利率
  xmqx VARCHAR(128),//项目期限
  sykjr VARCHAR(64),//剩余可加入
 hkz VARCHAR(64)//还款中
);
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201901264','到期一次性还本付息','7.00%','2个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'消费贷','阳光智选I-201904343','到期一次性还本付息','8.00%','6个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201901252','到期一次性还本付息','7.50%','3个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201900543','到期一次性还本付息','7.00%','2个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201961262','到期一次性还本付息','7.50%','7个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'消费','阳光智选I-201901262','到期一次性还本付息','7.00%','2个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201901262','到期一次性还本付息','7.00%','2个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201901262','到期一次性还本付息','7.00%','9个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201909898','按月付款，等额本息','8.50%','2个月','0.00元','还款中');

INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201981234','按月付款，等额本息','7.00%','2个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'消费贷','阳光智选I-201937343','按月付款，等额本息','8.00%','6个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201961252','按月付款，等额本息','7.50%','3个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201951543','按月付款，等额本息','6.00%','2个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201961462','按月付款，等额本息','7.50%','7个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'消费','阳光智选I-201901232','按月付款，等额本息','7.00%','6个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-20198122','按月付款，等额本息','7.00%','2个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201947262','按月付款，等额本息','7.00%','1个月','0.00元','还款中');
INSERT INTO atz_index_pro VALUES(NULL,'车商贷','阳光智选I-201909098','按月付款，等额本息','8.50%','2个月','0.00元','还款中');