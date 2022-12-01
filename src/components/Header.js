import React from 'react'
import { Link } from 'react-router-dom'
import {Grid,Button} from "@mui/material"
import './Header.css'

function Header() {
  return (
    <Grid container spacing={3}>
    <Grid item xs={3}><Button varient="outlined" sx={{backgroundColor:"green",border:0,borderRadius:"8px"}}><Link className='link' to="/">Numbers</Link></Button></Grid>
    <Grid item xs={3}><Button varient="contained" sx={{backgroundColor:"green",border:0,borderRadius:"8px"}}><Link className='link' to="/Table">Table</Link></Button></Grid>
    <Grid item xs={3}><Button varient="contained" sx={{backgroundColor:"green",border:0,borderRadius:"8px"}}><Link className='link' to="/Square">Square</Link></Button></Grid>
    </Grid>
  )
}

export default Header
