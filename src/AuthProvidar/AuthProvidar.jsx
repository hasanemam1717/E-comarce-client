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
import useAxiosPublic from "../Hooks/useAxiosPublic.jsx";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvidar = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()
  // google
  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  // sign in
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign up
  const logOut = () => {
    return signOut(auth).then((res)=>{
      console.log(res.data);
    })
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
          // get token and store client
          const userInfo = { email: currentUser.email };
          axiosPublic.post('/jwt', userInfo)
              .then(res => {
                  if (res.data.token) {
                      localStorage.setItem('access-token', res.data.token);
                  }
              })
      }
      else {
          // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
          localStorage.removeItem('access-token');
      }
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
