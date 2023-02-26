
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className = "h-24 w-screen relative flex justify-between p-10">
        <div className = "flex gap-4 items-center align-middle p-4">
          <h1 className = "text-5xl">SPARK</h1>
          <Image src = {"/sparklogo.svg"} alt = {"sparklogo"} height = {50} width = {50} className= ""/>
        </div>
        <div className = "flex justify-evenly align-middle gap-4">
          <Link href = "/signup">
            <button className="btn btn-warning">Sign Up</button>
          </Link>
          <Link href = "/signin">
            <button className="btn btn-ghost">Log In</button>
          </Link>
        </div>
      </div>
      <div className = "flex justify-center h-[70vh] mx-[50]   items-center gap-8">
        <Image className = "z-1 relative" src={"/homepage1.svg"} alt={"homepage1"} height = {700} width = {700}/>

        <div>
          <h1 className = "sm:text-4xl lg:text-6xl text-left mb-6">
            <span className = "text-[#fbbd23]">Spark</span> New Connections
          </h1>
          <h1 className = "sm:text-4xl lg:text-6xl text-left mb-6">
            Break the <span className = "text-[#a2d9ff]">Ice</span>
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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#a2d9ff" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,106.7C640,85,800,75,960,96C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>

      <div className = "flex-col h-[80vh] p-12 bg-[#a2d9ff] justify-center items-center align-middle text-center">
        <h1 className = "bg-[#a2d9ff] text-6xl">How Does Spark Work?</h1>
        <div className = "flex justify-center align-middle bg-[#a2d9ff]" >
          <div classname = "bg-[#a2d9ff] flex-col">
            <Image className = "bg-[#a2d9ff]" src = "/baghappy.svg" alt = "baghappy" height = {400} width = {400}/>
            <h1 className = "text-4xl bg-[#a2d9ff] ">Search for Sparks</h1>
          </div>
          <div className = "bg-[#a2d9ff] flex-col">
            <Image className = "bg-[#a2d9ff]" src = "/backwarditem.svg" alt = "backwarditem" height = {400} width = {400}/>
            <h1 className = "text-4xl bg-[#a2d9ff] ">Ignite a Spark</h1>
          </div>
          <div className = "bg-[#a2d9ff] flex-col">
            <Image className = "bg-[#a2d9ff]" src = "/ticket.svg" altl = "vector.svg" height = {400} width = {400}/>
            <h1 className = "text-4xl bg-[#a2d9ff]">Fuel a Spark</h1>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#a2d9ff" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,106.7C640,85,800,75,960,96C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      
      {/* <svg className = "fixed opacity-30 z-3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F1C21B" d="M46.7,-66.2C58.2,-55.9,63.5,-39.2,69.8,-22.1C76.1,-5.1,83.4,12.2,78.1,24.5C72.9,36.8,55.1,44.1,40,49.7C24.9,55.3,12.5,59.1,-3,63.3C-18.6,67.5,-37.1,72.1,-49.1,65.5C-61.1,58.9,-66.4,41.1,-68.8,24.5C-71.2,8,-70.5,-7.4,-64.4,-19.3C-58.2,-31.1,-46.5,-39.6,-34.9,-49.8C-23.2,-60,-11.6,-72.1,3,-76.2C17.6,-80.3,35.2,-76.5,46.7,-66.2Z" transform="translate(100 100)" />
      </svg> */}

      <div className = "flex justify-center items-center bg-[#18181c] text-[#fff] w-screen h-24">
          Copyright &copy; - All Rights Reserved by SPARK
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