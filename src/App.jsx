import React, { useEffect, useState } from 'react';
import useAuthStore from './store/authStore';
import app from '../firebase';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const App = () => {
  const { setToLS } = useAuthStore()

  useEffect(() => {
    getRedirectResult(auth).then((result)=>{
      console.log(result)
    })
  }, [])
  

  const handleGoogleLogin = async () => {
    signInWithRedirect(auth,googleProvider)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <button
          onClick={handleGoogleLogin}
          className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 flex items-center justify-center"
        >
          <svg className="w-2 h-2 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.63 0 6.64 1.24 8.89 3.28L37.5 9.5c-2.78-2.57-6.34-4.13-10.2-4.13-8.14 0-14.96 5.43-17.43 12.75L7 16.9c3.23-6.9 10.34-11.4 17-11.4z"
            />
            <path
              fill="#4285F4"
              d="M23.99 46c5.7 0 10.38-1.87 13.85-5.09l-6.15-5.13c-1.76 1.19-4.08 2.06-7.7 2.06-6.08 0-11.24-4.12-13.07-9.74H7v6.09C9.56 41.4 16.45 46 23.99 46z"
            />
            <path
              fill="#FBBC05"
              d="M10.93 28.11c-.44-1.31-.68-2.7-.68-4.11s.24-2.8.68-4.11V13.8H7c-1.38 2.5-2.17 5.39-2.17 8.21s.79 5.71 2.17 8.21l3.93-3.21z"
            />
            <path
              fill="#34A853"
              d="M23.99 19c3.66 0 6.1 1.5 7.51 2.75l5.5-5.5c-2.83-2.47-6.26-4.25-10.01-4.25-6.41 0-11.84 4.23-13.92 10.02l3.93 3.21C14.01 22.62 18.06 19 23.99 19z"
            />
          </svg>
          <div>Sign in with Google</div>
        </button>
      </div>
    </div>
  );
};

export default App;
