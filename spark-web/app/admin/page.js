'use client'
import React from "react";
import { useAuthContext } from "../../util/context/AuthContext";
import { useRouter } from "next/navigation";
import './admin.css'
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/signup")
    }, [user])

    return (
        <div className = "flex justify-center items-center h-screen">
            { user !== null ? <h1 className = "text-[150px]">YOU ARE LOGGED IN</h1> : <h1 className = "text-[150px]">NOT LOGGED IN</h1>}
        </div>
    );
}

export default Page; 