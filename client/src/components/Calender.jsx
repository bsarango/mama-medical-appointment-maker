import React,{useState} from 'react'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function Calender({date}){

    const date = new Date();
    const todayString = date.toLocaleDateString('en-US').split('T')[0].replace(/-/g, ' ');

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className = "formContainer">    
                <DateCalendar defaultValue={dayjs(todayString)} />
            </div>
        </LocalizationProvider>
    );
}

  export default Calender