'use client'
import useFetchSparks from '@/hooks/fetchSparks'
import React, { useState, useEffect } from 'react'
import { firebase_app, db } from "../../util/firebase/config"
import { collection, addDoc, getDocs, doc } from "firebase/firestore"
import EventCard from '@/components/EventCard'

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
    <div className = "w-screen flex items-center justify-center align-middle p-12">
      <div className = "flex-col justify-center align-middle text-center gap-4">
        {sparks.map((spark) => {
          return  (
          <div>
            <EventCard 
              title = {spark.title}
              description = {spark.description}
              date = {spark.date}
              author = {spark.author}
              
            />
          </div>
          )})}
          </div>
    </div>
  )
}

export default Home