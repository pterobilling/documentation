<h1>Configurations</h1>
<hr>

If the `.env` file does not exist, you may need to copy it from `.env.example`.

```shell
cp .env.example .env
```

If you does not have an `app_key`, generate one now. **Remember to backup your new `app_key`!**

```shell
php artisan key:generate --force
```

Next, open the .env file and edit the configurations.

- Change `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` to the value you have set when setting up MySQL database. If you haven't set up your database, please go through [this guide](mysql.md).
- Change `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`, and `MAIL_ENCRYPTION` to the setting provided by your SMTP server provider.
- Change `MAIL_FROM_ADDRESS` and `MAIL_FROM_NAME` to your company email address and name.
- If you are not using the default Redis settings, change the values of `REDIS_HOST`, `REDIS_PASSWORD`, and `REDIS_PORT`.
