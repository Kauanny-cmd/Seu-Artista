import { createContext, useState } from 'react';
import firebase from '../services/firebase';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const authStorage = JSON.parse(localStorage.getItem('userData'));

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(authStorage ? authStorage.isUserAuthenticated : false);
    const [userId, setUserId] = useState(null);

    async function signIn(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            const { uid } = response.user;

            setUserId(uid);
            setIsUserAuthenticated(true);
            localStorage.setItem('userId', uid);
        })
        .catch(err => {
            console.warn(err);
        })
    }

    async function signUp(email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
            const { uid } = response.user;

            setUserId(uid);
            setIsUserAuthenticated(true);
            localStorage.setItem('userId', uid);
        })
        .catch(err => {
            console.warn(err);
        })
    }

    return (
        <AuthContext.Provider
            value={{
                isUserAuthenticated,
                userId,
                signIn,
                signUp,
                setUserId
            }}
        
        >
            {children}
        </AuthContext.Provider>
    )
}