import { Box, Grid, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'

function Square() {

  const[sqr1,setSqr1] = useState(0)
  const[sqr2,setSqr2] = useState(0)
  const[sqr3,setSqr3] = useState(0)
  const[sqr4,setSqr4] = useState(0)

  return (
    <Box sx={{backgroundColor:"red"}}>
    <Typography variant='h1' sx={{fontSize:"30px",padding:"20px"}}>Square Numbers</Typography>
    <Grid container spacing={3} sx={{padding:"20px"}}>
    <Grid item xs={3}><TextField placeholder='Enter Number' value={sqr1} onChange={(e)=>setSqr1(e.target.value)}/></Grid>
    <Grid item xs={3}><TextField placeholder='Enter Number' value={sqr2} onChange={(e)=>setSqr2(e.target.value)}/></Grid>
    <Grid item xs={3}><Typography variant='h1' sx={{fontSize:"30px"}}>{sqr1} to the power {sqr2} of  is {Math.pow(sqr1,sqr2)}</Typography></Grid>
    </Grid>
    <Grid container spacing={6} sx={{padding:"20px"}}>
    <Grid item xs={3}><TextField placeholder='Enter Number' value={sqr3} onChange={(e)=>setSqr3(e.target.value)}/></Grid>
    <Grid item xs={6}><Typography variant='h1' sx={{fontSize:"30px"}}>Cube : {Math.pow(sqr3,3)}</Typography></Grid>
    </Grid>
    <Grid container spacing={6} sx={{padding:"20px"}}>
    <Grid item xs={3}><TextField placeholder='Enter Number' value={sqr4} onChange={(e)=>setSqr4(e.target.value)}/></Grid>
    <Grid item xs={6}><Typography variant='h1' sx={{fontSize:"30px"}}>square of {sqr4} is {Math.pow(sqr4,2)}</Typography></Grid>
    </Grid>
    </Box>
  )
}

export default Square
