<h1>Pterodactyl Configuration</h1>
<hr>

The following steps are completely optional. If you want to prevent PteroBilling from failing to communicate with Pterodactyl panel, please add the following lines to the end of the **.env file of Pterodactyl panel**.

```
APP_API_CLIENT_RATELIMIT=1440
APP_API_APPLICATION_RATELIMIT=480
```

The above lines tell Pterodactyl to accept more API requests. If there are more than 300 users using PteroBilling at the same time, consider increase both values to avoid reaching the limit.

To apply the changes we just made, run the following command **where Pterodactyl panel is installed**:

```shell
php artisan config:cache
```
