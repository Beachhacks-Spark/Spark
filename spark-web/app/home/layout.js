import React from 'react'
import NavBar from '@/components/NavBar'
import { useAuthContext } from "../../util/context/AuthContext";
import { useRouter } from "next/navigation";

function HomeLayout({children}) {
    // const { user } = useAuthContext()
    // const router = useRouter()

    // React.useEffect(() => {
    //     if (user == null) router.push("/signup")
    // }, [user])


  return (
    <section>
        <NavBar/>
        {children}
    </section>
  )
}

export default HomeLayout