import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDigKmyC0kTJc4UwQcsQGQo4Vk4fXec82g",
  authDomain: "deliverymenugenerator.firebaseapp.com",
  projectId: "deliverymenugenerator",
  storageBucket: "deliverymenugenerator.appspot.com",
  messagingSenderId: "844498571769",
  appId: "1:844498571769:web:bf104bca80db671f5b2d28",
  measurementId: "G-CYXYE65D8N"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

