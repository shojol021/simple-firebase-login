import React, { useState } from 'react';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)

    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
            .then(res => {
                const userInfo = res.user;
                console.log('user info: ', userInfo);
                setUser(userInfo)
            })
            .catch(err => {
                console.log('error:', err.message)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(res => {
                console.log('signout successfully')
                console.log(res)
                setUser(null)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
                {
                    user?
                    <button onClick={handleSignOut}>Sign Out</button> : 
                    <button onClick={handleGoogleLogin}>Google Login</button>
                }
          
            {user &&
                <>
                    <h2>User Name: {user.displayName}</h2>
                    <img src={user.photoURL} alt="" />
                    <h3>email address: {user.email}</h3>
                </>
            }
        </div>
    );
};

export default Login;