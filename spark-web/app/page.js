'use client'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function Home() {
  return (
    <main>
      <div className = "flex items-center justify-center h-screen">
        <Marquee
          pauseOnHover = {true}
          speed = {100}
          className = "bg-transparent"
          gradientColor={'transparent'}
          gradient = {false}
        >
         <h1 className = "text-[250px] font-bold">SPARK &#9889; SPARK &#9889; SPARK &#9889;</h1>

        </Marquee>
      </div>
    </main>
  )
}
