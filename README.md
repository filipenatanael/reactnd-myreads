<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://image.flaticon.com/icons/png/512/201/201614.png" alt="My Reads"></a></p>

<p align="center">
  <a href="https://travis-ci.org/filipenatanael/reactnd-myreads"><img src="https://travis-ci.org/filipenatanael/reactnd-myreads.svg?branch=master" alt="Build Status"></a>
  <a href="###"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://github.com/filipenatanael/reactnd-myreads"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://my-reads-udacity-nanodegree.herokuapp.com"><img src="https://img.shields.io/uptimerobot/ratio/m778918918-3e92c097147760ee39d02d36.svg" alt="Uptime"></a>
  <a href="https://discordapp.com/invite/reactiflux"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
</p>



<h1 align="center">MyReads Project</h1>

<p align="center">
This project was built for the <b><i>Udacity React Nanodegree Program</i></b>. A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that it should be persisted information as user’s interacts with the application.
  </p>
<br>

## Demonstration

![](https://raw.githubusercontent.com/filipenatanael/images-in-readme/master/MyReads/MyReads.gif)

## How to Run
- Run **git clone git@github.com:filipenatanael/reactnd-myreads.git**
- Run **npm install** to install the project dependencies.
- Run the app using **npm start**.

## Architecture
![](https://github.com/filipenatanael/images-in-readme/blob/master/MyReads/diagram.PNG)

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── tests
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
    │   └── utils
    │   │   ├── Constants.js
    │   │   └── Loading.js
    │   ├── Book.js
    │   ├── BookShelves.js
    │   ├── Categories.js
    │   ├── ChangeCategory.js
    │   └── Search.js
    ├── features
    │    ├── pt-br
    │    └── en-us
    ├── services
    │    └── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.


```

## Backend API

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
