# MyReads Project

This project was built for the **Udacity React Nanodegree Program**. A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that it should be persisted information as user’s interacts with the application.

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
