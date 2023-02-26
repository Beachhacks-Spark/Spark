import React from 'react'
import Marquee from 'react-fast-marquee'
import Link from 'next/link'
function AccessDenied() {
  return (
    <div className = "flex h-screen justify-center items-center align-middle">
        <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="text-[150px] text-[#fbbd23]">YOU ARE LOGGED OUT</h1>
            <Link href = "/">
                <button className="btn btn-warning w-[250px] h-[70px] flex items-center text-xl">Go Back Home</button>
            </Link>
        </div>
    </div>
  )
}

export default AccessDenied