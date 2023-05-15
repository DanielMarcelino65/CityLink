import React, { useEffect } from 'react';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import { auth } from '../config/firebase.config';

export function useAuth() {
    const [user, setUser] = React.useState<User | null>(null);

    useEffect(() => {
        const unsubscribeFromStateChanged = onAuthStateChanged(auth, ( user ) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsubscribeFromStateChanged;
    }, []);

    return {user};
}