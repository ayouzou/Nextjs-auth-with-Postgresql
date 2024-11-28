'use client'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutButton = () => {
    const { auth, logout } = useAuth()
    const router = useRouter()
    return (
        <>
            {
                auth.isAuthenticated ? <button className='px-4 py-2 bg-black text-white rounded-md' onClick={() => logout()}>
                    LOG OUT
                </button> :
                    <button className='px-4 py-2 bg-black text-white rounded-md' onClick={()=>router.push('/login')}>
                        LOG IN
                    </button>
            }


        </>

    )
}

export default LogoutButton