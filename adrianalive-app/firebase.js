import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAdU6n1fDLUmGoqR4yfcF08dkUcnnfYLd4",
  authDomain: "titanium-genre-213714.firebaseapp.com",
  databaseURL: "https://titanium-genre-213714-default-rtdb.firebaseio.com",
  projectId: "titanium-genre-213714",
  storageBucket: "titanium-genre-213714.appspot.com",
  messagingSenderId: "39810311824",
  appId: "1:39810311824:web:098c30bc0d28a214ca5a15",
  measurementId: "G-BEJNT215BK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
