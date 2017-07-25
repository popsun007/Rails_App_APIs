# Errands_runner

A new way for online abroad shopping.

## Configuration

- Versions:
Rails 4.2.1
Ruby 2.2.1
MySQL 5.7(brew update, then brew install mysql)

- Setup local environment

```
bundle install
```
```
brew services start mysql 
```

Create mysql user 'dev'

Import the seed data to db

Or 
```
rake db:create
```
```
rake db:migrate
```

Start the server
```
rails server
```


## User API endpoint:

| METHOD| ENDPOINT           | RETURN | OAUTH |
| ------|:------------------:| -----: | -----:|
| GET   | /api/v1/users/{id} | user   | OAUTH2|
| POST  | /api/v1/users/     | user   | OAUTH2|
| PATCH | /api/v1/users/{id} | user   | OAUTH2|
| DETELE| /api/v1/users/{id} | user   | OAUTH2|

