# projet-7

Projet 7 sur le site OpenClassrooms:

Le projet consiste à construire un réseau social interne pour les employés de Groupomania.

- Gérer un stockage de données à l'aide de SQL
- Personnaliser le contenu envoyé à un client web
- Implémenter un stockage de données sécurisé en utilisant SQL
- Authentifier un utilisateur et maintenir sa session


# Installation

1 - Create a folder with the name of your choice and get into it

 ```mkdire "name_of_your_choice"```
 
 ```cd "name_of_your_choice"```

2 - Clone the backend repository (into the folder you named).

```git clone https://github.com/StephaneChimy/groupomania.git```

(You'll now have a groupomania folder into the folder you named)

3 - Install the backend:

Go back into the folder you named and this time get into the backend folder then run:
```npm install```
```npx sequelize```

4 - Install the frontend:

Get into the frontend folder and run:
```npm install```

5 - Install the database:

##### Make sure you have mysql installed.

The database is configured to work with a user named groupomania and password: groupomania.
We will work on a database named: groupomania_development.

Connect to MySQL,
First let's create a new user named groupomania:

```CREATE USER 'groupomania'@'localhost' IDENTIFIED BY 'groupomania';```

Next we need to grant him privileges on the database: 

```GRANT ALL PRIVILEGES ON groupomania_development.* TO 'groupomania'@'localhost';```

Next, create databases with sequelize-cli:

```sequelize-cli db:create```
```sequelize-cli db:migrate```

(By default with sequelize it will add 2 more databases we will not use, it's for test and production)

Then we restore the database with a dump from backend/mysql/groupomania_dump.sql:

```cd groupomania/backend/mysql```

```mysql --user="your_MySQL_user" --password="your_password" groupomania_development < groupomania_dump.sql```

6 - Run npm start from the backend folder

```npm start```

(node server should run on port 3000)

7 - Run npm start from the frontend folder.

```npm start```

(react-app should run on port 3001)

5 - You can start playing with the API on http://localhost:3001/

Already two users have been added :
```
test@test.com : test4
admin@test.com : admin4
```