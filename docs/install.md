<h1>Installation</h1>
<hr>

**PteroBilling has not been released yet. Make sure to watch our repo and not to miss the pre-release!**

First, go to the directory where the website files are stored, for example:

```shell
cd /var/www
```

Next, run the following commands and a new folder named ‘pterobilling’ will be created automatically in your current working directory:

```shell
composer create-project pterobilling/pterobilling pterobilling --no-dev --stability=beta
chmod -R 755 /var/www/pterobilling
chown -R www-data:www-data /var/www/pterobilling
```

Please make sure you have already [set up a MySQL database](mysql.md) and [edited the .env file](config.md) before continuing the installation.

After editing the .env file, run the following commands.
The first command will migrate all tables to the database. The others will cache the configurations, routes, and views to optimize the performance.

```shell
php artisan migrate --seed --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Then, let's set up a cron job and a queue worker. Run the following command to open the crontab configuration.

```shell
crontab -e
```

Copy and paste the following lines to the file.

```shell
* * * * * php /var/www/pterobilling/artisan schedule:run >> /dev/null 2>&1
* * * * * php /var/www/pterobilling/artisan queue:work --sansdaemon --tries=3 --queue=high,low >> /dev/null 2>&1
```

After that, you should [create an SSL certificate and set up your web server](web_server_config.md). You may also [make some changes to the .env file of Pterodactyl panel](pterodactyl_config.md) (optional).

Finally, log into the admin area with the default account `admin@example.com` and the password is `password`. **Remember to change the default email address and password!**
