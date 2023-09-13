import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppBar, Avatar,Box,IconButton ,TextField,Toolbar,Typography} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment'


function Navbar({hotel=[],setHotel,originalHotel=[]}) {
    const navigate=useNavigate()
    const [searchValue,setSearchValue]=useState('')
   
    

    const handleSearch=()=>{
        

        const filterHotels=hotel.filter((hotels)=>
        hotels.address.toLowerCase().includes(searchValue.toLowerCase()) ||
        hotels.name.toLowerCase().includes(searchValue.toLowerCase())
        ) 
       setHotel (filterHotels)
        
    }
  return (
    <div>
       <AppBar position='static' color='inherit'>
        
        <Toolbar 
            sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',


            }}>
            <Typography 
            sx={{
                cursor:'pointer'
            }}
            onClick={()=>navigate('/')} 
            variant='h5' 
            color='black'
             fontWeight='bold'>
                BookStay
            </Typography>


            <Box sx={{display:'flex',gap:'20px',alignItems:'center'}}>
                {originalHotel.length > 0 && (
                    <>
                    <TextField 
                    variant='outlined'
                     label='search'
                      size='small'
                      value={searchValue}
                      onChange={(e)=>{setSearchValue(e.target.value)
                        if(e.target.value === ''){
                            setHotel(originalHotel)
                        }}}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton disabled={!searchValue} onClick={handleSearch}>
                              <SearchOutlinedIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}

                     />
                    </>
                )}
            <Typography 
            sx={{
                cursor:'pointer'
            }}
            onClick={()=>navigate('/')} 
            variant='h6' 
            color='black'
            fontSize='16px'
             fontWeight='bold'
             >
                Home
            </Typography>

            <IconButton>
            <Avatar sx={{width: 32,height:32}}>H</Avatar>
            </IconButton>
            </Box>
        </Toolbar>
       
       </AppBar>
      
    </div>
  )
}

export default Navbar
