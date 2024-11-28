import React from "react";

export type User = {
    id: string;
    email: string;
    token: string;
    username: string;
} | null;

export type Session = {
    isAuthenticated: boolean;
    user: User;
};

export type SessionProviderProps = {
    children: React.ReactNode;
};

export interface Inputs {
    username?: string
    email: string
    password: string
}
export interface ApiResponse {
    message?: string;
    error?: string;
    token?: string;
}