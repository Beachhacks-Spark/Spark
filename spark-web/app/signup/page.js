'use client'
import React, { Suspense } from "react";
import signUp from "../../util/firebase/auth/signUp";
import { useRouter } from 'next/navigation'
import './signUp.css'
import * as Tabs from '@radix-ui/react-tabs';
import Loading from "@/components/Loading";

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
        return router.push("/home")
    }

    return (
        <Suspense fallback = {<Loading/>}>
            <div className = "flex items-center justify-center h-screen">
                <div className="min-w-[30vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10 flex justify-center">
                    <div className = "flex-col w-[20em] gap-6">
                        <h1 className="text-3xl text-center mb-4">Sign up</h1>
                        <form onSubmit={handleForm} className = "flex-col items-center justify-center gap-8">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} required type="email" id="email" placeholder="example@email.com" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} required type="password" id="password" placeholder="password123" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <button className ="btn btn-wide" type = "submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default Page;







