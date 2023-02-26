'use client'
import React, { Suspense, useState } from "react";
import Link from "next/link";
import signUp from "../../util/firebase/auth/signUp";
import { useRouter } from 'next/navigation'
import './signUp.css'
import * as Tabs from '@radix-ui/react-tabs';
import Loading from "@/components/Loading";
import Image from "next/image";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/util/firebase/config";

function Page() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [school, setSchool] = useState("")
    const router = useRouter()

    const usersCollectionRef = collection(db, "users")
    
    const createNewUser = async() => {
        await addDoc(usersCollectionRef, {name: name, school: school, email: email});
    }

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        createNewUser();
        return router.push("/home")
    }



    return (
        <Suspense fallback = {<Loading/>}>
            <Link href = "/">
                <div className="w-screen flex justify-center items-center align-middle py-6">
                    <a className="btn btn-ghost btn-lg text-[50px]">SPARK <Image className = "bg-transparent" src = {"/sparklogo.svg"} alt = {"sparklogo"} height = {50} width = {50}></Image></a>
                </div>
            </Link>
            <div className="hero min-h-[85vh]">
                    <div className="hero-content flex-col lg:w-[50vw]">
                        <div className="card flex-shrink-0 w-full max-w-lg shadow-md h-[45em] flex-col justify-center">
                            <div className="text-left ml-8">
                                <h1 className="text-4xl font-bold">Create Account</h1>  
                            </div>
                            <div className="divider px-7"></div> 
                            <form onSubmit={handleForm} className="form -mt-6">
                            <div className="card-body gap-6">
                                <div>
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="label-text text-xl">Name</span>
                                        </label>
                                        <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="name" className="input input-bordered bg-[#fff]" />
                                    </div>
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="label-text text-xl">School</span>
                                        </label>
                                        <select className="select select-bordered w-full max-w-full label-text" onChange = {(e) => setSchool(e.target.value)} value= {school}>
                                            <option disabled selected>Select your university</option>
                                            <option>California State University, Long Beach</option>
                                            <option>California State University, Fullerton</option>
                                            <option>California State University, Los Angeles</option>
                                            <option>California State University, San Bernadino</option>
                                        </select>
                                    </div>
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







