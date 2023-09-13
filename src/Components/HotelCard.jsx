import React from 'react'

import {Card,CardMedia,CardContent,Typography} from '@mui/material'

import { useNavigate} from 'react-router-dom'

function HotelCard({hotels}) {
  const navigate=useNavigate()
  return (
    <div>
     <Card sx={{cursor:"pointer"}} onClick={()=>navigate(`/hotel/${hotels.slug}`)}>
        <CardMedia 
        component='img'
        height="240"
        image={hotels.thumbnail}
        alt='hotel' />

        <CardContent>
            <Typography variant='h6'>{hotels.address}</Typography>
            <Typography variant='h6'>${hotels.pricePerNight}/Night</Typography>

        </CardContent>

      
     </Card>
    </div>
  )
}

export default HotelCard
