import React from 'react'
import { PacmanLoader } from 'react-spinners'
import './Loading.css'
function Loading() {
  return (
    <div className = "flex h-screen justify-center items-center text-[150px]">
        <div class="loader">
            <div class="loaderBar"></div>
        </div>
    </div>
  )
}

export default Loading