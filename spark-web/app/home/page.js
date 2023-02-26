'use client'
import useFetchSparks from '@/hooks/fetchSparks'
import React, { useState, useEffect } from 'react'
import { firebase_app, db } from "../../util/firebase/config"
import { collection, addDoc, getDocs, doc } from "firebase/firestore"

function Home() {
  const [sparks, setSparks] = useState([])
  const sparksCollectionRef = collection(db, "sparks");
  useEffect(() => {
    const getSparks = async () => {
      const data = await getDocs(sparksCollectionRef);
      setSparks(data.docs.map((doc) => ({
        ...doc.data(), id: doc.id, 
      })))
    }
    getSparks();
  }, [])
  return (
    <div className = "w-screen flex-col items-center justify-center">
        {sparks.map((spark) => {
          return <div>{spark.id}</div>
          })}
    </div>
  )
}

export default Home