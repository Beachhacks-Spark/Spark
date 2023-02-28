'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getAuth } from "firebase/auth"
import firebase_app from '@/util/firebase/config'
import { useRouter } from 'next/navigation'
import signUserOut from '@/util/firebase/auth/signOut'
import { useAuthContext } from "../util/context/AuthContext";
function NavBar() {
    // const [user, setUser] = useState('');
    const { user } = useAuthContext();
    const auth = getAuth(firebase_app)
    const router = useRouter();
    async function handleSignOut() {
        try {
            router.push("/")
            await signUserOut(auth);
            console.log("User signed out successfully");
        } catch (error) {
            console.log(error.message);
        }
    }
    console.log(user.uid);
    return (
        <div className="navbar h-24 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 bg-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-6 shadow rounded-box w-64">
                        <Link href = "/home">
                            <li>
                                <a className = "text-2xl">Home</a>
                            </li>
                        </Link>
                        <Link href = "/home/sparks">
                            <li>
                                <a className = "text-2xl">Find Sparks</a>
                            </li>
                        </Link>
                        <Link href = "/home/my-sparks">
                            <li>
                                <a className = "text-2xl">My Sparks</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <Link href = "/home">
                <div className="navbar-center mr-12">
                    <a className="btn btn-ghost btn-lg text-[50px]">SPARK <Image className = "bg-transparent" src = {"/sparklogo.svg"} alt = {"sparklogo"} height = {50} width = {50}></Image></a>
                </div>
            </Link>

            <div className="navbar-end gap-4">
                <Link href = "/home/create-spark">
                    <button className = "btn btn-warning">Create Spark &#9889;</button>
                </Link>
                <button className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 bg-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 bg-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
                </button>

                <div className="dropdown dropdown-end">
                    <div tabIndex = {0} className="avatar online placeholder">
                        <div className="bg-yellow-500 rounded-full w-16 cursor-pointer">
                            <span className="text-xl bg-yellow-500 text-[#18181c]">{user.email.slice(0,2)}</span>
                        </div>
                    </div> 
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li onClick = {handleSignOut}><a>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default NavBar