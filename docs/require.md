<h1>Requirements</h1>
<hr>

Before installing PteroBilling, make sure you have the following installed on your server:

- Pterodactyl panel **v1.2 or above** already installed on the same or different server
- **PHP >= 7.3** and the following extensions: `BCMath`, `Ctype`, `Fileinfo`, `JSON`, `Mbstring`, `OpenSSL`, `PDO`, `MySQL`, `Tokenizer`, `XML`, `GD`, `cURL`, and `Zip` (`FPM` if using nginx)
- Composer 2
- Web server (**nginx** is recommended)
- MySQL >= 5.7 or **MariaDB >= 10.2** (MariaDB is recommended)
- Redis server

## Example Dependencies Installation
If you have already installed Pterodactyl panel on the same server, you usually need not install the dependencies again as PteroBilling requires the same dependencies as it does.

### Update apt
```bash
apt update -y
```

### MariaDB

```bash
apt install -y mariadb-common mariadb-server mariadb-client
systemctl start mariadb
systemctl enable mariadb
```

### PHP (8.0)

```bash
apt -y install php8.0 php8.0-common php8.0-bcmath php8.0-ctype php8.0-fileinfo php8.0-json php8.0-mbstring openssl php8.0-pdo php8.0-mysql php8.0-tokenizer php8.0-xml php8.0-gd php8.0-curl php8.0-zip php8.0-fpm
```

#### Composer

```bash
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
```

### Nginx

```bash
apt install -y nginx
```

### Redis

```bash
apt install -y redis-server

systemctl start redis-server
systemctl enable redis-server
```

#### Certbot

```bash
apt install -y certbot
```

### Set up MariaDB

```bash
mysql_secure_installation
```

Change to your own secure password  
`Set root password? [Y/n] Y`

Get rid of users that could access the db by default  
`Remove anonymous users? [Y/n] Y`

Keep root off the external interfaces  
`Disallow root login remotely? [Y/n] Y`

Extra databases that aren't needed  
`Remove test database and access to it? [Y/n] Y`

Clears and sets all the changes made  
`Reload privilege tables now? [Y/n] Y`

All done! If you've completed all of the above steps, your MariaDB installation should now be secure.

### Set up PHP

```bash
systemctl enable php8.0-fpm
systemctl start php8.0-fpm
```
