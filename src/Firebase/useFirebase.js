import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import initializeAuthentication from "./Initialization";

initializeAuthentication();

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

function useFirebase() {
  function registerWithEmail(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleLogin() {
    return signInWithPopup(auth, googleProvider);
  }

  function logOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return {
    registerWithEmail,
    loginWithEmail,
    googleLogin,
    logOut,
  };
}

export default useFirebase;
