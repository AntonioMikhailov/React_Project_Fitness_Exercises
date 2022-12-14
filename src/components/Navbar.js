import React from 'react'
import { Link, NavLink} from 'react-router-dom';
import logo from '../assets/images/Logo.png'
//импортируем MUI
import {Stack} from '@mui/material'
export default function Navbar() {
  return (
  <Stack direction="row" justifyContent='space-around' sx={{gap:{sm: '122px', xs: '40px'}, mt: {sm:'32px', xs: '20px'}, justifyContent: 'none'}} px='20px'>
      <Link to='/'>
      <img className="nav-logo" style={{width:'48px', height: '48px', margin: '0 20px'}} src={logo} alt="logo" /> 
      </Link >
       <Stack direction='row' gap='20px' fontSize='24px' alignItems='flex-end'>
       <NavLink to='/' end className={({isActive})=> isActive ? 'nav-item nav-item__active' : 'nav-item'} style={{textDecoration: 'none', color: '#3a1212' }}>Home</NavLink>
       <NavLink to='/exercises'  className={({isActive})=> isActive ? 'nav-item nav-item__active' : 'nav-item'} style={{textDecoration: 'none', color: '#3a1212'}}>Exercises</NavLink>
       </Stack>
   </Stack>
  )
}
