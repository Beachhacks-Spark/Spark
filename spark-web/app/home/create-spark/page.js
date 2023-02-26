'use client'
import React from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function SparkForm() {
  const [value, setValue] = React.useState(dayjs('2022-04-07'));
  const [title, setTitle] = React.useState('');
  const [maxStudents, setMaxStudents] = React.useState(0);
  const [description, setDescription] = React.useState('');
  const [interests, setInterests] = React.useState(0);

  return (
    
    <div className = "flex h-[90VH] justify-center items-center align-middle gap-8">
        <div className = "flex">
            <h1 className = "text-6xl">EVENT FORM</h1>
        </div>
        <div className = "grid place-items-center gap-6 w-[50rem]">
            <input onChange= {(e) => setTitle(e.target.value)} required type="text" placeholder="Enter Title" className="input input-bordered w-full max-w-md text-md" />
            <textarea onChange = {(e) => setDescription(e.target.value)} required className="textarea textarea-bordered w-full max-w-md text-md h-[10rem]" placeholder="Enter a Description"></textarea>
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