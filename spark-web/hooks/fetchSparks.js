'use client'
import React, { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useAuthContext } from '@/util/context/AuthContext';
import { db } from '../util/firestore/addData';

function useFetchSparks() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sparks, setSparks] = useState(null);
    
    const { user } = useAuthContext();
    useEffect(() => {
        async function fetchData() {
            try{
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                if(docSnap.exists()) {
                    console.log(docSnap.data())
                }
            } 
            catch (e) {
                setError('failed to load sparks')
                console.log(e);
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    })

  return {loading, error, sparks}
}

export default useFetchSparks