'use client'
import React from 'react'
import Input from './form-element/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { storeCookie } from '../utils/auth'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { ApiResponse, Inputs } from '@/types/auth'

const LoginForm = () => {
    const router = useRouter()
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (Data) => {
        const { email, password } = Data
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const data = await response.json() as ApiResponse
            if (Data) {
                storeCookie('token', data.token as string)
                toast.success('Login success', {
                    duration: 2000
                });
            }
        } catch (error) {
            console.log("something wrong", error)
            toast.error('something wrong', {
                duration: 2000
            });
        }
    }
    const { auth } = useAuth()
    auth?.isAuthenticated ? router.back() : ''
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
        >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                LO-GIN
            </h2>
            <div className="mb-4">
                <Input
                    label='Email'
                    name='email'
                    id='email'
                    register={register}
                    placeholder='email'
                    errors={errors}
                    validation={
                        {
                            required: true
                        }
                    }
                />
            </div>
            <div className="mb-4">
                <Input
                    type='password'
                    label='Password'
                    name='password'
                    id='password'
                    register={register}
                    placeholder='password'
                    errors={errors}
                    validation={
                        {
                            required: true
                        }
                    }
                />
            </div>
            <button type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200" >
                Login
            </button>

        </form>
    )
}

export default LoginForm