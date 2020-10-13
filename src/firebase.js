import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyARPuPITvep3ggnaz8uATmBc_kLhXXwFNU",
  authDomain: "kiel-vue-test.firebaseapp.com",
  databaseURL: "https://kiel-vue-test.firebaseio.com",
  projectId: "kiel-vue-test",
  storageBucket: "kiel-vue-test.appspot.com",
  messagingSenderId: "437363523902",
  appId: "1:437363523902:web:e160965fac28403eb62c6f"
};

firebase.initializeApp(config);
