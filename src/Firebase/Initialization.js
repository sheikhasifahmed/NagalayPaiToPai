import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfigure";

const initializeAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default initializeAuthentication;
