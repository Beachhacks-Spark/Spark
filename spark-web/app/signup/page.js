'use client'
import React from "react";
import signUp from "../../util/firebase/signUp";
import { useRouter } from 'next/navigation'
import './signUp.css'
import * as Tabs from '@radix-ui/react-tabs';

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/admin")
    }
    return (
        <div className = "flex items-center justify-center h-screen">
            <div className="max-w-xlg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10">
                <div className = "flex-col align-middle">
                    <h1 className="text-3xl text-center mb-4">Sign up</h1>
                    <form onSubmit={handleForm} className = "flex-col items-center">
                        <div className = "">
                            <label htmlFor="email">
                                <p>Email</p>
                                <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                            </label>
                            <label htmlFor="password">
                                <p>Password</p>
                                <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                            </label>
                        </div>
                        <button className ="btn w-max relative">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;