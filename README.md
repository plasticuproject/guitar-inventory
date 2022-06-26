# Example Node.js API using Express, TypeScript, Vue, and PostgreSQL

## Requirements

* Install [Node.js](https://nodejs.org) version 8+
* Install [Docker](https://www.docker.com/) (or some other instance of [PostgreSQL](https://www.postgresql.org/))

## Development setup

* Clone or download this repository
* Install modules using `npm install`
* Copy `.env.sample` to `.env`
* Set up [PostgreSQL with Docker](https://docs.docker.com/samples/library/postgres/). With docker installed, use the following two commands to create an instance of PostgreSQL for the application. Feel free to change the name and password for the database.

```bash
docker pull postgres:latest
docker run -d --name guitar-db -p 5432:5432 -e 'POSTGRES_PASSWORD=p@ssw0rd42' postgres
```

* Modify `.env` to match your PostgreSQL server connection and credentials
* Initialize the PostgreSQL database by running `npm run initdb`
* Install the [Okta CLI](https://cli.okta.com/) and run `okta register` to sign up for a new account, or if you already have an account, run `okta login`.
* Set up a new Okta application

    1. Run `okta apps create`. Select the default app name, or change it as you see fit.
    2. Choose **Web** and press **Enter**.
    3. Select **Other**. Then, change the Redirect URI to `http://localhost:8080/authorization-code/callback` and accept the default Logout Redirect URI of `http://localhost:8080`.

* Copy and paste your `OKTA_CLIENT_ID`, `OKTA_CLIENT_SECRET`, and `OKTA_ORG_URL` into the `.env` file as such.
```
# Okta configuration
OKTA_ORG_URL=https://{yourOktaDomain}
OKTA_CLIENT_ID={yourClientId}
OKTA_CLIENT_SECRET={yourClientSecret}
```

## Launching application

To run the application in development mode:

```bash
npm run dev
```

By default, the web application should now be running at [http://localhost:8080](http://localhost:8080).

## Links

This example application uses: 

* [Node.js](https://nodejs.org)
* [TypeScript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [EJS](https://github.com/mde/ejs)
* [Okta's Node.js OIDC Middleware](https://www.npmjs.com/package/@okta/oidc-middleware)
* [Vue](https://vuejs.org/)
* [Materialize](https://materializecss.com/)
* [Axios](https://github.com/axios/axios)

## License

Apache 2.0, see [LICENSE](LICENSE).

