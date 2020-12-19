# Restaurant-api-server

API server about restaurants for webapp backend.

## Prerequisite

1. Install Mysql

```bash
$ brew instasll mysql@8.0.22
```

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

### Prerequisite

Make sure mysql was started.

```bash
$ brew services start mysql
```

Set up for test.

```bash
$ mysql -u root < scripts/setTest.sql
```

Run test.

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
