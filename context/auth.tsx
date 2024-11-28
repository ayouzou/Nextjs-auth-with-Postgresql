'use client'
import { createContext, useEffect, useMemo, useState } from "react";

import isEqual from 'lodash/isEqual';
import { Session, SessionProviderProps } from "@/types/auth";
import { decodeJWT, getCookie } from "@/app/utils/auth";

export const SessionContext = createContext<Session>({
    isAuthenticated: false,
    user: null
});

export function SessionProvider(props: SessionProviderProps) {
    const [decodedToken, setDecodedToken] = useState(decodeJWT())
    

    const token = getCookie('token')
    const { children } = props
    const value: Session = useMemo(() => (
        decodedToken ? {
            isAuthenticated: true,
            user: {
                id: decodedToken.id,
                email: decodedToken.email,
                username: decodedToken.username,
                token,
            }
        } : {
            isAuthenticated: false,
            user: null
        }
    ), [decodedToken, token])
   
    const checkCookieChanges = () => {
        const newDecodedToken = decodeJWT();
        // eslint-disable-next-line
        if (!isEqual(newDecodedToken, decodedToken)) {
            setDecodedToken(newDecodedToken);
        }
    };


    useEffect(() => {
        const interval = setInterval(checkCookieChanges, 1000);

        return () => {
            clearInterval(interval);
        };
    });


    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    );
}
