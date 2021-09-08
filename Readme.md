<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/StephaneChimy/groupomania.svg?style=for-the-badge
[contributors-url]: https://github.com/StephaneChimy/groupomania/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/StephaneChimy/groupomania.svg?style=for-the-badge
[forks-url]: https://github.com/StephaneChimy/groupomania/network/members
[stars-shield]: https://img.shields.io/github/stars/StephaneChimy/groupomania.svg?style=for-the-badge
[stars-url]: https://github.com/StephaneChimy/groupomania/stargazers
[issues-shield]: https://img.shields.io/github/issues/StephaneChimy/groupomania.svg?style=for-the-badge
[issues-url]: https://github.com/StephaneChimy/groupomania/issues
[license-shield]: https://img.shields.io/github/license/StephaneChimy/groupomania?style=for-the-badge
[license-url]: https://github.com/StephaneChimy/groupomania/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/stephane-chimy
[product-screenshot]: frontend/src/images/responsive.png



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<div align="center">
 
 [![Contributors][contributors-shield]][contributors-url]
 [![Forks][forks-shield]][forks-url]
 [![Stargazers][stars-shield]][stars-url]
 [![Issues][issues-shield]][issues-url]
 [![MIT License][license-shield]][license-url]
 [![LinkedIn][linkedin-shield]][linkedin-url]
 
</div>


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/StephaneChimy/groupomania">
    <img src="frontend/src/images/icon.png" alt="Logo" width="150">
  </a>

  <h1 align="center">Groupomania</h1>

  <p align="center">
    Création d'un réseau social d'entreprise
    <br />
    <a href="https://github.com/StephaneChimy/groupomania"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/StephaneChimy/groupomania">View Demo</a>
    ·
    <a href="https://github.com/StephaneChimy/groupomania/issues">Report Bug</a>
    ·
    <a href="https://github.com/StephaneChimy/groupomania/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>📝 Table of Contents</summary>
  <ol>
    <li>
    <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#objectives">Objectives</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
   <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
   <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
   <!-- <li><a href="#contact">Contact</a></li> -->
   <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 🧐 About The Project <a name = "about-the-project"></a>

[![Groupomania][product-screenshot]](https://groupomania.stephane-chimy.com/)

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues. Ils veulent que les employés écrivent et / ou partagent des articles avec leurs collègues sur des sujets qui les intéressent.

CONTRAINTES:

* Le client utilise une base de données relationnelles qui se manipule avec le langage SQL pour le stockage de données.
* La web app puisse se connecter et se déconnecter à l’application et que la session de l’utilisateur persiste pendant qu’il est connecté.
* Le projet doit être codé en Javascript
* Les pages devront respecter les standards WCAG.
* La présentation des fonctionnalités doit être simple.
* La création d’un compte doit être simple et possible depuis un téléphone mobile.
* Le profil doit contenir très peu d’informations pour que sa complétion soit rapide ; la suppression du compte doit être possible.
* L’accès à un forum où les salariés publient des textes doit être présent.
* Les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés.
* Le ou la chargé-e de communication Groupomania doit pouvoir modérer les interactions entre le ou la chargé-e de communication Groupomania doit pouvoir afficher les dernières participations des employés salariés .



### 🎯 Objectives <a name = "objectives"></a>

* Gérer un stockage de données à l'aide de SQL
* Personnaliser le contenu envoyé à un client web
* Implémenter un stockage de données sécurisé en utilisant SQL
* Authentifier un utilisateur et maintenir sa session



### ⛏️ Built With <a name = "built-with"></a>

-Backend

* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/fr/)
* [Mysql](https://www.mysql.com/fr/)
* [Sequelize](http://sequelize.org/)


-Frontend

* [ReactJS](https://fr.reactjs.org/)
* [Bootstrap](https://getbootstrap.com)




<!-- GETTING STARTED -->
## 🏁 Getting Started <a name = "getting-started"></a>

### Prerequisites

Make sure you have [Mysql](https://www.mysql.com/fr/) installed.


### Installation

1 - Create a folder with the name of your choice and get into it

 ```
 mkdir "name_of_your_choice"
 
 cd "name_you_chose"
 ```

2 - Clone the backend repository (into the folder you named).

```
git clone https://github.com/StephaneChimy/groupomania.git
```

(You'll now have a groupomania folder into the folder you named)

3 - Install the backend:

Go back into the folder you named and this time get into the backend folder then run:
```
npm install
npx sequelize
```

4 - Install the frontend:

Get into the frontend folder and run:
```
npm install
```

5 - Install the database:

The database is configured to work with a user named groupomania and password: groupomania.
We will work on a database named: `groupomania_development`.

Connect to MySQL,
First let's create a new user named groupomania:

```sql
CREATE USER 'groupomania'@'localhost' IDENTIFIED BY 'groupomania';
```

Next we need to grant him privileges on the database: 

```sql
GRANT ALL PRIVILEGES ON groupomania_development.* TO 'groupomania'@'localhost';
```

Next, create databases with sequelize-cli from the backend folder:

```
sequelize-cli db:create

sequelize-cli db:migrate
```

(By default with sequelize it will add 2 more databases we will not use, it's for test and production)

Then we restore the database with a dump from ```backend/mysql/groupomania_dump.sql```:

```
cd groupomania/backend/mysql
```

```sql
mysql --user="your_MySQL_user" --password="your_password" groupomania_development < groupomania_development_dump.sql
```

6 - Run npm start from the backend folder

```
npm start
```

(node server should run on port 3000)

7 - Run npm start from the frontend folder.

```
npm start
```

(react-app should run on port 3001)

5 - You can start playing with the API on http://localhost:3001/

Already two users have been added :
```sh
test@test.com : test4
admin@test.com : admin4
```


<!--
## 🚀 Deployment <a name = "deployment"></a>
Add additional notes about how to deploy this on a live system.
-->


<!-- USAGE EXAMPLES
## 🎈 Usage <a name = "usage"></a>

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.
-->

<!--
_For more examples, please refer to the [Documentation](https://example.com)_
-->


<!-- ROADMAP -->
## 🗺 Roadmap <a name = "roadmap"></a>

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING 
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

-->


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT
## ✍️ Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
-->



## ✍️ Authors <a name = "authors"></a>
- [@stephanechimy](https://github.com/StephaneChimy) - Initial work



<!-- ACKNOWLEDGEMENTS 
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)

-->




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: frontend/src/images/responsive.png
