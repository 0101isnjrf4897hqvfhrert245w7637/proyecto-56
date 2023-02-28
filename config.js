import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCEP0RFx71nZqLrmQUuBKMkabsU-61k7MA",
  authDomain: "travesia-digital-61fdc.firebaseapp.com",
  projectId: "travesia-digital-61fdc",
  storageBucket: "travesia-digital-61fdc.appspot.com",
  messagingSenderId: "987590184833",
  appId: "1:987590184833:web:5b1da647ccf5991456e280"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
