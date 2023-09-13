import React,{useState} from "react";
import { useQuery } from "react-query";
import LoadingSkeleton from "../Components/LoadingSkeleton";
import Navbar from "../Components/Navbar";
import HotelCard from "../Components/HotelCard";
import {Container,Grid,Pagination } from '@mui/material'


import { getHotels } from "../api/request";

function Home() {
  const [hotel,setHotel]=useState([])
  const [filterHotels,setFilterHotels]=useState([])
  const [pages,setPages]=useState(1)

  const hotelLimitPerPages=9;
  const totalHotels=filterHotels.length;
  const startIndex=(pages-1)* hotelLimitPerPages;
  const endIndex=pages*hotelLimitPerPages-1
  const totalpages=Math.ceil(totalHotels/hotelLimitPerPages)
  const PaginationHotels=filterHotels.slice(startIndex,endIndex+1)



  const fectchHotels = async () => {
    const {data} = await getHotels();
    setHotel(data)
    setFilterHotels(data)

    return data;
  };

  

  const {  isLoading } = useQuery("hotels", fectchHotels);
  return isLoading ? (
    <LoadingSkeleton />
      ) : (
    <>
      <Navbar hotel={filterHotels} setHotel={setFilterHotels} originalHotel={hotel}/>
      <Container maxWidth='lg'>
      <Grid container spacing={2} sx={{padding:2}}>
      {
        PaginationHotels.length > 0 ? (
        <>
          {PaginationHotels.map((hotels)=>(
          <Grid item xs={12} sm={6} md={4} lg={4}>
          <HotelCard key={hotels.id} hotels={hotels}/>
          </Grid>
          ))}
        </>
        ):(<h1>No Hotels Found</h1>)
      }
      </Grid>
      <Pagination
        count={totalpages}
        page={pages}
        onChange={(event,value)=>setPages(value)}
        sx={{display:"flex", justifyContent:'flex-end'}}
      />
      </Container>
    </>
    
    );
}

export default Home;
