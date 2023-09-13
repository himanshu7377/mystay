import React, { useState } from 'react'
import {Box,FormControl,InputLabel,MenuItem,Modal,Select,Typography} from '@mui/material'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

 export function BookingModal({data,open,handleClose}) {
     const[selectCount,setSelectedCount]=useState(2)

     const [dates,setdates]=useState([{
        startDate: Date.now(),
        endDate:Date.now(),
        key:'selection',
     }])

    const getGuests=()=>{
        return Number(data?.rooms[0].content.split(' ')[0])
    }

    
  return (
    <Modal open={open} onClose={handleClose}>
        <Box
        sx={{
            width:'22%',
             top:'50%',
             left:'50%',
             bgcolor:'white',
             margin:'auto',
             boxShadow:'0 0 10px 0 rgba(0,0,0,0.2)',
             borderRadius:'5px',
             p:3,
            
            }}
        >
            <Typography variant='h6' fontWeight={'bold'}>${data?.pricePerNight}/ Night</Typography>
            <FormControl fullWidth sx={{ margin:'10px 0'}}>
                <InputLabel>Number of Guests</InputLabel>
                <Select label="Number of Guests" value={selectCount} onChange={(e)=>setSelectedCount(e.target.value)}> 
                {
                    [...Array(getGuests())].map((guest,index)=>(
                        <MenuItem  value={index + 1}>{index +1}</MenuItem>
                    ))
                }
                
                </Select>
            </FormControl>
            <Typography variant='h6' fontWeight={'bold'}>Select Dates</Typography>
            <DateRange  
            onChange={({selection})=>setdates([selection])} 
            ranges={dates}
            minDate={new Date()}/>
        </Box>
    </Modal>
  )
}


