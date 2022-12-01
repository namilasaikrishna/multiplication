import { Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import './Table.css'

const numbers = [1,2,3,4,5,6,7,8,9,10]

function Table() {

  const[num3,setNum3] = useState(0)

  return (
    <Box className="box">
    <Typography variant='h1' sx={{fontSize:"30px",padding:"20px"}}>Tables</Typography>
    <TextField value={num3} sx={{padding:"20px"}} placeholder="enter number" onChange={(e)=>setNum3(e.target.value)}/>
    {numbers.map((item,index)=>{
      return(
        <Card key={index} sx={{margin:"20px"}}>
        <CardContent>
        <Typography variant='p'>{num3} x {item} = {parseInt(num3*item)}</Typography>
        </CardContent>
        </Card>
      )
    })}
    </Box>
  )
}

export default Table
