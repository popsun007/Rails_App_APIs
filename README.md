##Configuration

- version:
Rails 4.2.1
Ruby 2.2.1
MySQL 5.7(brew update, then brew install mysql)

```
bundle install
```
```
brew services start mysql 
```

create mysql user 'dev'
import the seed data to db


##User API endpoint:

| METHOD| ENDPOINT           | RETURN | OAUTH |
| ------|:------------------:| -----: | -----:|
| GET   | /api/v1/users/{id} | user   |       |
| POST  | /api/v1/users/     | user   |       |
| PATCH | /api/v1/users/{id} | user   |       |
| DETELE| /api/v1/users/{id} | user   |       |

