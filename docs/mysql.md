<h1>MySQL Database</h1>
<hr>

If you don't understand what the following commands do, please refer to [the guide from Pterodactyl](https://pterodactyl.io/tutorials/mysql_setup.html).

```sql
mysql -u root -p
USE mysql;
CREATE DATABASE billing;
CREATE USER 'pterobilling'@'127.0.0.1' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON billing.* TO 'pterobilling'@'127.0.0.1' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EXIT;
```
