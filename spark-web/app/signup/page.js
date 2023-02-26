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
            <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:w-[50vw]">
                        <div className="card flex-shrink-0 w-full max-w-lg shadow-md h-[33em] flex-col justify-center">
                            <div className="text-left ml-8">
                                <h1 className="text-4xl font-bold">Create Account</h1>  
                            </div>
                            <div className="divider px-7"></div> 
                            <form onSubmit={handleForm} className="form -mt-6">
                            <div className="card-body gap-6">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl">Email</span>
                                        </label>
                                        <input onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="email" className="input input-bordered bg-[#fff]" />
                                    </div>
                                    <div className="form-control mt-3">
                                        <label className="label">
                                            <span className="label-text text-xl">Password</span>
                                        </label>
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered bg-[#fff]" />
                                    </div>
                                </div>
                                <div className="form-control mt-4">
                                    <button type = "submit"className="btn btn-warning">Sign Up</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
        </Suspense>
    );
}

export default Page;    







