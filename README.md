# Blog

Your task is to implement a REST API for a simple blog application using Node, TypeScript, Express and MySQL.

The project consists of 3 main parts: users, articles and comments.

A user can have multiple articles and multiple comments on different articles.
A user can comment on a different user's article too.

## Properties
### Users
- email

### Articles
- title
- body
- created at
- author

### Comments
- body
- author

## Other Requirements
Use the prepared base files to start the development.

Use mysql via the provided docker-compose.yml.

Create at least 3 migration files for each domain (users, articles, comments).

## Extra Features
If you finish the base task, then add proper validation and error handling with different messages and http codes for each endpoint.


