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
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);

const Auth = getAuth(app);

const AuthProvidar = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google
  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = () => {
    return signInWithPopup(Auth, googleProvider);
  };
  // Email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  // sign in
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  // sign up
  const logOut = () => {
    return signOut(Auth);
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(Auth, (currentUser) => {
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
