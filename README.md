<h1 align="center">
  <img alt="Ícone do projeto" title="" src=".github/logo.svg" width="" />
</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=author&message=roger3g&color=8257E5&labelColor=04D361" style="display: inline;"> <img src="https://img.shields.io/static/v1?label=languages&message=4&color=8257E5&labelColor=04D361" style="display: inline;"> <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=04D361" style="display: inline;"> <img src="https://img.shields.io/static/v1?label=version&message=1.0.0&color=8257E5&labelColor=04D361" style="display: inline;"> <img src="https://img.shields.io/static/v1?label=platform&message=web&color=8257E5&labelColor=04D361" style="display: inline;">
</p>

<div align="center">
  <img src=".github/desktop.svg" alt="Exemplo da interface no desktop" style="width: 100%;">  
</div>

## 📌 Table of Contents

- [Technology](#-technology)
- [Project](#-project)
- [Layout](#-layout)
- [Updates](#-updates)
- [Implementation ideas](#-implementation-ideas)
- [Directory structure](#-directory-structure)
- [Installation](#-installation)
- [How to contribute](#-how-to-contribute)
- [License](#-license)

## 🕹 Technology

- **Front-End**
  - [HTML](https://nodejs.org/en/)
  - [CSS](https://nodejs.org/en/)
  - [Javascript](https://nodejs.org/en/)

- **Back-End**
  - [Node.js](https://nodejs.org/en/)
  - [Express.js](https://expressjs.com/)
  - [Nodemon](https://nodemon.io/)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [nunjucks](https://mozilla.github.io/nunjucks/)
  
- **Database**
  - [sqlite-async](https://www.npmjs.com/package/sqlite-async)

## 💻 Project

Web system for hiring online teachers.

## 🔖 Layout

You can view the layout of this project by clicking [here](https://proffy-roger.herokuapp.com/)

## ⬆ Updates

This project is constantly evolving, I am always testing new features on it.

## 💡 Implementation ideas

- [ ] Take the application to [version 2.0](https://www.figma.com/file/XITfkZAiMy8W49eaDSBBXl/Proffy-Web-2.0);
- [ ] Exchange the database, MongoDB, PostgreSQL;
- [ ] Improve responsiveness;
- [ ] Refactor.

## 📂 Directory structure

```
|-- .github/
|-- public/
  |-- assets/
  |-- pages/
  |-- scripts/
  |-- styles/
  |-- index.html
|-- src/
  |-- config/
  |-- controllers/
  |-- database/
  |-- utils/
  |-- routes/
  |-- app.js
  |-- server.js
|-- .env
|-- .gitignore
|-- LICENSE.md
|-- package.json
|-- package-lock.json
|-- README.md
```

## ⬇ Installation

```bash
# Clone this repository
$ git clone https://github.com/roger3g/proffy.git

# Access the project folder in the cmd/terminal
$ cd proffy

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run server

# The server will start at port: 80 - go to http://localhost:80
```

Requirements to run **locally**:

- [ ] [Node.js](https://nodejs.org/en/) ( Required )
- [ ] [GIT](https://git-scm.com/) ( Optional )

## 🤔 How to contribute

1. Fork this repository;
2. Create a branch with your feature: **`git checkout -b my-feature`**;
3. Commit your changes: **`git commit -m 'feat: My new feature'`**;
4. Push to your branch: **`git push origin my-feature`**.

After the merge of your pull request is done, you can delete your branch.

## 📝 License

This project is under the MIT license. See the archive [LICENSE](LICENSE.md) for more details.
