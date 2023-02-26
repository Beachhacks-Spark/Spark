'use client'
import React from "react";
import signIn from "../../util/firebase/auth/signIn";
import { useRouter } from 'next/navigation'
import './signIn.css'
import Link from "next/link";
import Image from "next/image"

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isInvalid, setIsInvalid] = React.useState(false)

    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()
        
        const { result, error } = await signIn(email, password);
        
        if (error) {
            setIsInvalid(true);
            return console.log(error)
        }
        
        // else successful
        console.log(result)
        return router.push("/home")
    }

    return (
        <>
            <Link href = "/">
                <div className="w-screen flex justify-center items-center align-middle py-6">
                    <a className="btn btn-ghost btn-lg text-[50px]">SPARK <Image className = "bg-transparent" src = {"/sparklogo.svg"} alt = {"sparklogo"} height = {50} width = {50}></Image></a>
                </div>
            </Link>
            <div className="hero min-h-[85vh]">
                <div className="hero-content flex-col lg:w-[50vw]">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-md h-[33em] flex-col justify-center">
                        <div className="text-left ml-8">
                            <h1 className="text-4xl font-bold">Login</h1>  
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
                                    <label className = "label mt-2">
                                        <span className = "label-text text-md">{isInvalid ? <p className = "text-red-700">Email and/or Password Invalid</p> : <p></p>}</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <button type = "submit" className="btn btn-warning">Login</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;