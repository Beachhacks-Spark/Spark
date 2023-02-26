'use client'
import React from "react";
import signIn from "../../util/firebase/auth/signIn";
import { useRouter } from 'next/navigation'
import './signIn.css'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isEmail, setIsEmail] = React.useState(false)
    const [isPassword, setIsPassword] = React.useState(true)

    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()
        
        const { result, error } = await signIn(email, password);

        if (error) {
            setIsPassword(false);
            return console.log(error)
        }
        
        // else successful
        console.log(result)
        return router.push("/home")
    }

    return (
                <div className="hero min-h-screen bg-base-100">
                    <div className="hero-content flex-col lg:w-[50vw]">
                        <div className="card flex-shrink-0 w-full max-w-lg shadow-md bg-base-100 h-[33em] flex-col justify-center gap-3">
                            <div className="text-left ml-8">
                                <h1 className="text-4xl font-bold">Login</h1>  
                            </div>
                            <form onSubmit={handleForm} className="form">
                            <div className="card-body gap-6">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl">Email</span>
                                        </label>
                                        <input onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="email" className="input input-bordered" />
                                        <label className="label">
                                            {/* {!isEmail ? <span className="label-text text-red-700">Please Enter a valid Email</span> : <></>} */}
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl">Password</span>
                                        </label>
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />
                                        {/* <label className="label">
                                            {isPassword ? <></> : <span className="label-text text-red-700">Email and/or Password is Invalids</span>}
                                        </label> */}
                                    </div>
                                </div>
                                <div className="form-control mt-4">
                                    <button type = "submit"className="btn btn-warning">Login</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
    );
}

export default Page;