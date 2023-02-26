'use client'
import React, {useEffect, useState}from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { addDoc, collection, getDoc, doc } from "firebase/firestore";
import { db } from "@/util/firebase/config";
import DatePicker from "react-datepicker";
import { useAuthContext } from "../../../util/context/AuthContext"
import Image from 'next/image';

export default function SparkForm() {
    const [datePosted, setDatePosted] = useState(null);
    const [author, setAuthor] = useState('')
  const [value, setValue] = useState(dayjs('2022-04-07'));
  const [title, setTitle] = useState('');
  const [maxStudents, setMaxStudents] = useState(0);
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
//   const [interests, setInterests] = React.useState(0);
    const { user } = useAuthContext()

    const userCollectionRef = collection(db, "users")

  const sparksCollectionRef = collection(db, "sparks")
    
  const createNewSpark = async() => {
      await addDoc(sparksCollectionRef, {title: title, description: description, students: maxStudents, date: startDate, author: user.email});
  }

//   const getUserSnap = async() => {
//     const docRef = doc(db, "users", user.email);
//     const docSnapshot = await getDoc(docRef);
//     console.log(docSnapshot.data());
//     }
//   }
  // Retrieving the document snapshot

//   console.log(user.email);
//   useEffect(() => {
//     getUserSnap();
//   })

  const handleForm = async (event) => {
    event.preventDefault()
    
    try {
        createNewSpark();
    } catch (error) {
        console.log(error);
    }
    
    setTitle("")
    setMaxStudents("");
    setDescription("");
    setStartDate(new Date());
    
    // else successful

}

  return (
    
    <div className = "flex h-[90VH] justify-center items-center align-middle gap-8 relative">
        <div className = "flex-col gap-8 relative -mt-16">
            <h1 className = "text-6xl text-center mb-8" ></h1>
            <Image src = {"/community-hero.jpg"} alt = {"community-hero"} height = {500} width = {800}/>
        </div>
        <div className = "grid place-items-center gap-8 w-[50rem] z-10">
            <form onSubmit = {handleForm} className = "flex-col gap-6 w-[30em]">
                <label className="label mb-2">
                    <span className="label-text">Event Title</span>
                </label>
                <input onChange= {(e) => setTitle(e.target.value)}value = {title} required type="text" placeholder="Enter Title" className="input input-bordered w-full max-w-md text-md mb-4" />
                <div className="form-control w-max">
                    <label className="label">
                        <span className="label-text">Max People</span>
                    </label>
                    <label className="input-group w-max">
                        <span>#</span>
                        <input onChange = {(e) => {setMaxStudents(e.target.value)}}value = {maxStudents} type="text" placeholder="of people" className="input input-bordered w-max" />
                    </label>
                </div>
                <label className="label mb-1">
                    <span className="label-text">Date</span>
                </label>
                <div className = "w-[28em] border-black mb-4">
                    <DatePicker
                        className = "h-12 text-center w-full bg-orange-200 rounded-lg"
                        showIcon
                        value = {startDate}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}/>
                        
                </div>
                <textarea onChange = {(e) => setDescription(e.target.value)}value = {description} required className="textarea textarea-bordered w-full max-w-md text-md h-[10rem]" placeholder="Enter a Description"></textarea>
                <button className = "btn btn-warning w-[33em] mt-4" type = "submit">CREATE SPARK!</button>
            </form>
        </div>
        
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            onChange={(e) => {
            setValue(e.target.value);
            }}
        />
        </LocalizationProvider> */}
    </div>
  );
}