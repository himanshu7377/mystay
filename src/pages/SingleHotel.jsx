import React,{useState} from 'react'
import {Box,Button,Container,ListItem,Typography} from '@mui/material'
import { useQuery } from "react-query";
import {useParams} from 'react-router-dom';
import {getSingleHotel} from '../api/request'
import Navbar from '../Components/Navbar'
import LoadingSkeleton from '../Components/LoadingSkeleton'
import {Gallery} from '../Components/Gallery'
import { BookingModal } from '../Components/BookingModal';

function SingleHotel() {
  const [open,setOpen]=useState(false)
  const {slug}=useParams()

  const fetchHoteldata= async ()=>{
    const {data} = await getSingleHotel(slug)
    return data;
  }

  const handleOpen=()=>setOpen(true)
  const handleClose=()=>setOpen(false)

    const {isLoading,data}=useQuery('hotel-slug',fetchHoteldata)
  return (
    <div>
      <Navbar/>
      {isLoading? (<LoadingSkeleton/>)
      :(
      <Container maxWidth='lg'>
        <Typography variant='h6' fontWeight='bold' sx={{margin: '4px 0'}}>{data?.name}</Typography>
        <Gallery images={data?.images}/>
        <Box sx={{margin:'3px 0',display:'flex'}}>
        {data?.rooms.map((room)=>(
          <Typography variant='h6' fontWeight={'bold'} key={room.id} sx={{margin:"3px 20px 5px 0", color:'gray'}}>{room.content}</Typography>
        ))}
        </Box>

          <Typography variant='p'  sx={{ margin: '3px 0',lineHeight:'2'}}>

          {data?.aboutThePlace}
          </Typography>

          <Typography
            variant='h4'
            fontWeight={'bold'}
            sx={{margin:'25px 0',lineHeight:'1.25rem'}}
          >
            What this place offers!!
          </Typography>
          <Box 
          sx={{margin:'3px 0', display:'flex', justifyContent:"space-between", alignItems:'center'}}
          >
            <Box sx={{maxWidth:'70%'}}>
              {data?.features.map((feature)=>(
                <ListItem key={feature.id}>{feature.text}</ListItem>
              ))}
            </Box>
            <Button variant='outlined' onClick={handleOpen}>RESERVE</Button>

          </Box>
          <BookingModal data={data} open={open} handleClose={handleClose}/>

      </Container>
      )}
    </div>
  )
}

export default SingleHotel
