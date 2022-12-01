import React,{useState} from 'react';
import {Grid,Typography,TextField} from "@mui/material";

function Number() {

  const[num,setNum] = useState(0)
  const[num2,setNum2] = useState(0)

  return (
   <Grid container spacing={3} sx={{backgroundColor:"blue",marginTop:"3px",padding:"20px"}}>
   <Grid item xs={12}><Typography variant='h1' sx={{fontSize:"30px",fontWeight:700,padding:"20px",color:"white"}}>Numbers</Typography></Grid>
   <Grid sx={{display:"flex",justifyContent:"space-between",backgroundColor:"white"}}>
   <Grid container sx={{padding:"20px",margin:"10px",display:"flex",flexDirection:"column"}}>
   <Grid item>
   <Typography variant='p' sx={{fontSize:"30px"}}>Number</Typography>
   </Grid>
   <Grid item><TextField value={num} placeholder='Enter Number' onChange={(e)=>setNum(e.target.value)}/></Grid>
   </Grid>
   <Grid container sx={{padding:"20px",margin:"20px",display:"flex",flexDirection:"column"}}>
   <Grid item><Typography variant='p' sx={{fontSize:"30px"}}>Next Number</Typography></Grid>
   <Grid item><Typography varient="p" sx={{fontSize:"30px"}}>{parseInt(num) + 1}</Typography></Grid>
   </Grid>
   </Grid>

   <Grid sx={{display:"flex",justifyContent:"space-between",backgroundColor:"white"}}>
   <Grid container sx={{padding:"20px",margin:"10px",display:"flex",flexDirection:"column"}}>
   <Grid item>
   <Typography variant='p' sx={{fontSize:"30px"}}>Number</Typography>
   </Grid>
   <Grid item><TextField value={num2} placeholder='Enter Number' onChange={(e)=>setNum2(e.target.value)}/></Grid>
   </Grid>
   <Grid container sx={{padding:"20px",margin:"20px",display:"flex",flexDirection:"column"}}>
   <Grid item><Typography variant='p' sx={{fontSize:"30px"}}>Next Number</Typography></Grid>
   <Grid item><Typography varient="p" sx={{fontSize:"30px"}}>{parseInt(num2) - 1}</Typography></Grid>
   </Grid>
   </Grid>
   
   </Grid> 
  )
}

export default Number
