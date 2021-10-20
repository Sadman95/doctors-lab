import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider ,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();


  // create new user:
  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email & password:
  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //reset password:
  const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email)
  }

  // google sign in:
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  //facebook sign in:
  const handleFacebookSignIn = () =>{
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  }

  // log out:
  const handleLogOut = () => {
    return signOut(auth);
  };

  // observer:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    error,
    setUser,
    setError,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleSignIn,
    handleSignUp,
    handleLogOut,
    resetPassword,
  };
};

export default useFirebase;
