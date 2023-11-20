import React from 'react'
import './SideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';

function SideNavbar() {
  return (
    <div className='sideNav'>
        <img className='sidenavLogo' src="https://tse3.mm.bing.net/th?id=OIP.WOGID8FL8MiaeWfCeSvOzgHaCH&pid=Api&P=0&h=180" alt="instagram" />
        <div className="sidenavButtons">
            <button className="side_Button">
                <HomeIcon/>
                <span>Home</span>
            </button>

            <button className="side_Button">
                <SearchIcon/>
                <span>Search</span>
            </button>

            <button className="side_Button">
                <ExploreIcon/>
                <span>Explore</span>
            </button>

            <button className="side_Button">
                <SlideshowIcon/>
                <span>Reels</span>
            </button>

            <button className="side_Button">
                <ChatIcon/>
                <span>Messages</span>
            </button>

            <button className="side_Button">
                <FavoriteBorderIcon/>
                <span>Notifications</span>
            </button>

            <button className="side_Button">
                <AddCircleOutlineIcon/>
                <span>Create</span>
            </button>

        </div>

        <div className="sidenav_more">
            <button className='side_Button'>
                <MenuIcon/>
                <span>More</span>
            </button>
        </div>

    </div>
  )
}

export default SideNavbar