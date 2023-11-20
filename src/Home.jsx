import React from 'react'
import './Home.css'
import SideNavbar from './navigation/SideNavbar'
import TimeLines from './timeline/TimeLines'

function Home() {
  return (
    <div className='Homepage'>
        <div className="homeNav">
            <SideNavbar/>
        </div>
        <div className="homeTimeline">
            <TimeLines/>
        </div>
    </div>
  )
}

export default Home