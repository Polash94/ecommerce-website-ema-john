import React, { useState } from 'react';
import { initializeApp } from "firebase/app"
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from '../FireBase/firebaseConfig';

//initialize firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Authentication = () => {

    //google sign in user state

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })

    //Handling google sign in button function

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                }
                setUser(signedInUser);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    //Handling google Sign Out function

    const handleSignOut = () => {
        signOut(auth)
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                }
                setUser(signedOutUser);
            })
    }

    //HAndling Email sign in functions

    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        let isFormValid = true;

        if (e.target.name === 'email') {
            isFormValid = /^\S+@\S+\.\S+$/.test(e.target.value)

        }

        if (e.target.name === 'password') {
            isFormValid = e.target.value.length > 8
        }

        if (isFormValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }

    const handleSubmit = () => {

    }


    return (
        <div>

            {/* Sing in with google */}


            {
                user.isSignedIn ?
                    <button onClick={handleSignOut} class=''>Sign Out</button> :
                    <button onClick={handleSignIn}>Sign in</button>
            }

            {
                user.isSignedIn &&
                <div>
                    welcome {user.name}
                </div>
            }
            <br />


            {/* Sign in with email and password */}

            <form class='mt-10'>
                <p>email:{user.email}</p>
                <p>pass: {user.password}</p>

                <input type="text" name="email" placeholder='Enter your e mail' onBlur={handleBlur} required />

                <br />

                <input type="password" name="password" placeholder='Enter your password here' onBlur={handleBlur} required />

                <br />

                <input type="submit" value="submit" onSubmit={handleSubmit} />

            </form>

        </div>
    );
};

export default Authentication;