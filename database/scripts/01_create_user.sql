alter session set "_ORACLE_SCRIPT"=true;
ALTER SESSION SET CONTAINER=ORCLPDB1;

-- This will be MOCK_IWPS in mocked environment intranet SIT database
CREATE USER testuser IDENTIFIED BY testuser;
GRANT dba TO testuser WITH ADMIN OPTION;
GRANT CREATE SESSION TO testuser;

COMMIT;
