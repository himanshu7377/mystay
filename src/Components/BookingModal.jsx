import React, { useState ,useEffect} from 'react'
import {Alert,Box,Button,FormControl,InputLabel,MenuItem,Modal,Select,Typography} from '@mui/material'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

 export function BookingModal({data,open,handleClose}) {
     const[selectCount,setSelectedCount]=useState(2)

     const [showAlert, setShowAlert] = useState(false);

     const [dates,setdates]=useState([{
        startDate: Date.now(),
        endDate:Date.now(),
        key:'selection',
     }])



    const getGuests=()=>{
        return Number(data?.rooms[0].content.split(' ')[0])
    }

    const totalNight=()=>{
        const {startDate,endDate}=dates[0];
        const start=new Date(startDate)
        const end=new Date(endDate)
        const diffTime=Math.abs(end-start)
        const diffDays=Math.ceil(diffTime/(1000*60*60*24))
        return diffDays
    }

    const handlereserve=()=>{
        setShowAlert(true);
    }

    useEffect(() => {
        if (!open) {
          setShowAlert(false);
        }
      }, [open]);

    
  return (
    <Modal open={open} onClose={handleClose}>
        <Box
        sx={{
            width:'360px',
             top:'500%',
             left:'50%',
             bgcolor:'white',
             margin:'20px auto',
             boxShadow:'0 0 10px 0 rgba(0,0,0,0.2)',
             borderRadius:'5px',
             p:3,
            
            }}
        >
            {showAlert && (
                <Alert variant="filled" severity="success">
                    Hotel booked successfully!
                </Alert>
            )}
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
            <Box   sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                
                }}>
                <Typography fontWeight={'bold'}>${data?.pricePerNight}/nights</Typography>
                <Typography fontWeight={'bold'}>${data?.pricePerNight * totalNight()}</Typography>

            </Box>
            <Typography fontWeight={'bold'}>SubTotal: ${data?.pricePerNight * totalNight()}</Typography>

            <Button 
                variant='outlined'
                sx={{width:'100%',marginTop:'10px'}}
                onClick={handlereserve}
                
                >
                    Reserve
            </Button>
        </Box>
    </Modal>
  )
}


