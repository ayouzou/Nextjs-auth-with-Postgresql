import React from 'react'
import RegisterForm from '../components/RegisterForm'
import AuthButtons from '../components/AuthButtons'

const page = () => {
    return (
        <main className="flex flex-col justify-center items-center my-auto ">
            <RegisterForm />
            <AuthButtons/>
        </main>
    )
}

export default page