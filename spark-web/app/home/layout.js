'use client'

import React from 'react'
import NavBar from '@/components/NavBar'
import { useAuthContext } from "../../util/context/AuthContext";
import { useRouter } from "next/navigation";
import AccessDenied from '@/components/AccessDenied';
function HomeLayout({children}) {
    const { user } = useAuthContext()
    const router = useRouter()

  return (
    
    <section>
        {user !== null ? 
        <div className = "bg-transparent">
            <NavBar/>
            {children}
        </div> : <AccessDenied/>}
    </section>
  )
}

export default HomeLayout