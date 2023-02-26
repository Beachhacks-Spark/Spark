
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className = "h-24 w-screen relative flex justify-between p-8">
        <h1 className = "text-5xl">
          SPARK
        </h1>
        <div className = "flex justify-evenly align-middle gap-4">
          <Link href = "/signup">
            <button className="btn btn-warning">Sign Up</button>
          </Link>
          <Link href = "/signin">
            <button className="btn btn-ghost">Log In</button>
          </Link>
        </div>
      </div>
      <div className = "flex justify-center h-[75vh] mx-[50] p-12 items-center gap-8">
        <Image className = "" src={"/homepage1.svg"} alt={"homepage1"} height = {700} width = {700}></Image>
        <div>
          <h1 className = "sm:text-4xl lg:text-6xl text-left mb-6">
            <span className = "text-[#fbbd23]">Spark</span> New Connections
          </h1>
          <h1 className = "sm:text-4xl lg:text-6xl text-left mb-6">
            Break the <span className = "text-blue-300">Ice</span>
          </h1>
          <h1 className = "sm:text-4xl lg:text-6xl text-left mb-6">
            Find <span className = "text-green-300">Study</span> Groups
          </h1>
          <h1 className = "sm:text-4xl lg:text-6xl text-left mb-6">
            <span className = "text-red-300">Meet</span> New People
          </h1>

          <Link href = "/signup">
            <button className="btn btn-outline btn-warning h-14 w-36">Get Started</button>
          </Link>
        </div>
      </div>

      <div>

      </div>

      <svg className = "fixed opacity-30 z-3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F1C21B" d="M46.7,-66.2C58.2,-55.9,63.5,-39.2,69.8,-22.1C76.1,-5.1,83.4,12.2,78.1,24.5C72.9,36.8,55.1,44.1,40,49.7C24.9,55.3,12.5,59.1,-3,63.3C-18.6,67.5,-37.1,72.1,-49.1,65.5C-61.1,58.9,-66.4,41.1,-68.8,24.5C-71.2,8,-70.5,-7.4,-64.4,-19.3C-58.2,-31.1,-46.5,-39.6,-34.9,-49.8C-23.2,-60,-11.6,-72.1,3,-76.2C17.6,-80.3,35.2,-76.5,46.7,-66.2Z" transform="translate(100 100)" />
      </svg>

      <div className = "">

      </div>
    </main>
  )
}

// <div className = "flex gap-6 justify-center">
//   <Link href = "/signup">
//     <button className="btn">Get Started</button>
//   </Link>
//   <Link href = "/signin">
//   <button className = "btn btn-ghost">Already Have an Account?</button>
//   </Link>
// </div>
{/* <Marquee  
  pauseOnHover = {true}
  speed = {200}
  className = "bg-transparent"
  gradientColor={'transparent'}
  gradient = {false}
>
  <h1 className = "text-[250px] font-bold">SPARK &#9889; SPARK &#9889; SPARK &#9889;</h1>
</Marquee> */}