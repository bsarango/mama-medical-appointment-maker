import React,{useState} from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function Calender({setDate}){

    const date = new Date();
    const todayString = date.toLocaleDateString('en-US').split('T')[0].replace(/-/g, ' ');

    const [value, setValue] = useState(dayjs(todayString));

    function getSimpleDate(dateValue){
        const date = new Date(dateValue)
        const finalDate = date.getFullYear() + '-' +  (date.getMonth() + 1)  + '-' +  date.getDate()
        setDate(finalDate)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className = "formContainer">    
            <DateCalendar value={value} onChange={(newValue) => {setValue(newValue),getSimpleDate(newValue)}} />
            </div>
        </LocalizationProvider>
    );
}

  export default Calender