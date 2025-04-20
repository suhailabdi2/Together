import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import './App.css';
const Header = () => {
  return (
    <div className='Header'>
        <IconButton>
            <PersonIcon className='Header_icon' fontSize='large' />
        </IconButton>
        <img
            className='header_logo'
            src='logo192.png'
            alt='together logo'
        />
        <IconButton>
            <ForumIcon className='Header_icon' fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Header