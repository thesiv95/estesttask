# Test task

This is a socket that pulls 10 last users from DB.

## Mock data
You can find it in `mock.sql`

## Env variables
- **DB_NAME** - database name, `users` if not set
- **DB_LOGIN** - database server login, `root` if not set
- **DB_PASSWORD** - database server password, blank if not set;
- **DB_HOST** - database server endpoint, `localhost` if not set;
- **DB_PORT** - database server port, `3306` if not set (this is a standard one for MySQL).

## Endpoints
- *GET /last10* - test and debug this user pull function.
- *POST /addUser* - add a new user. Fields: `name`, `email` (all of them are required).


## Install and run
```
npm i
```
Production mode:
```
npm run start
```
Development mode (server will be reloaded authomatically after each code modification):
```
npm run dev
```
Do a GET / query (or open `http://localhost:{PORT}` in a browser).


## Estimate
1.5 hours (Express setup, DB setup, Websocket fine tune, Readme).