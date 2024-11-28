import React from 'react'
import LoginForm from '../components/LoginForm'
import AuthButtons from '../components/AuthButtons'

const page = () => {
    return (
        <main className="flex flex-col justify-center items-center my-auto ">
            <LoginForm />
            <AuthButtons/>
        </main>
    )
}

export default page