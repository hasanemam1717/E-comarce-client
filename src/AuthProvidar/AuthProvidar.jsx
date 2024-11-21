/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../Firebase/Firebase.config.js'

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvidar = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google
  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign up
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    () => {
      return unsbscribe();
    };
  }, []);

  const authInformation = {
    createUser,
    logIn,
    logOut,
    googleLogIn,
    loading,
    setLoading,
    user
  };
  return <AuthContext.Provider value={authInformation}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvidar;
