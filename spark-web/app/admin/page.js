'use client'
import React from "react";
import { useAuthContext } from "../../util/context/AuthContext";
import { useRouter } from "next/navigation";
import './admin.css'
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    // React.useEffect(() => {
    //     if (user == null) router.push("/signup")
    // }, [user])

    return (
        <h1 className = "flex justify-center items-center h-screen text-[100px]">MUST BE LOGGED IN TO VIEW</h1>
    );
}

export default Page; 