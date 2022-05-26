create database essp_db;
use essp_db

CREATE TABLE USERS (
 id            VARCHAR(100) NOT NULL,
 password      VARCHAR(10)  NOT NULL,
 name          VARCHAR(100) NOT NULL,
 department    VARCHAR(100) NOT NULL,
 PRIMARY KEY (id));

insert into USERS values('test001','test001','testname','testdepartment');

