'use client'
import { signIn } from "next-auth/react";
export default function AuthButtons() {
    return (
        <div className="flex flex-col space-y-4 items-start  w-96 ">
            <button
                onClick={() => signIn('google')}
                className="flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:bg-gray-100" >
                <span>Sign in with Google</span>
            </button>
            <button
                onClick={() => signIn('github')}
                className="flex items-center justify-center space-x-2 bg-black text-white rounded-md px-4 py-2 shadow-sm hover:bg-gray-800"
            >
                <span>Sign in with GitHub</span>
            </button>
        </div>
    );
}
