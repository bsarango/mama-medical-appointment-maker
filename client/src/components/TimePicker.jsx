import React,{useState} from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';

export default function TimeFieldValue({setTime}) {
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeField
          label="Controlled field"
          value={value}
          onChange={(newValue) => {setValue(newValue), setTime(newValue.split('T')[1])}}
        />
    </LocalizationProvider>
  );
}