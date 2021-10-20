import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

  // create new user:
  const handleSignUp = (name, email, password) => {
    updateProfile(auth?.currentUser, {
      displayName: name,
    }).then((result) => {});
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email & password:
  const handleSignIn = (email, password) => {
    updateProfile(auth.currentUser, {
      email: email,
    }).then((result) => {});
    return signInWithEmailAndPassword(auth, email, password);
  };



  // google sign in:
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // log out:
  const handleLogOut = () => {
    return signOut(auth);
  };

  // observer:
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return {
    user,
    error,
    setUser,
    setError,
    handleGoogleSignIn,
    handleSignIn,
    handleSignUp,
    handleLogOut,
  };
};

export default useFirebase;
