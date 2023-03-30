"use strict";


const firebase = require("firebase/app");

const config = {
  firebase: {
    apiKey: "AIzaSyAKPqlzZDnZszbdySKHlM3-Fgw76MMvF-o",
    authDomain: "ion-amigao.firebaseapp.com",
    projectId: "ion-amigao",
    storageBucket: "ion-amigao.appspot.com",
    messagingSenderId: "247045122799",
    appId: "1:247045122799:web:f348b0fa0c34720247891a",
    measurementId: "G-CHDXVMWZFR"
  },
};
firebase.initializeApp(config);
/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  firebase.initializeApp(config);
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  return config;
};
