import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    // google sign in:
    const handleGoogleSignIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }


    // log out:
    const handleLogOut = () =>{
        return signOut(auth);
    }


    // observer:
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } 
            else {
                setUser({});
            }
          });
    }, [])



    return {
        user,
        error,
        setUser,
        setError,
        handleGoogleSignIn,
        handleLogOut
    }

}

export default useFirebase;