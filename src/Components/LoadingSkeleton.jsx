import React from 'react'
import {Skeleton} from '@mui/material'

function LoadingSkeleton() {
  return (
   <>
   <Skeleton 
   animation='wave'
   variant='rectangular'
   width='100%'
   height={60}
   
   />
   </>
  )
}

export default LoadingSkeleton
