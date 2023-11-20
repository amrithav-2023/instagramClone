import React from 'react'
import './Suggestions.css'
import { Avatar } from '@mui/material'

function Suggestions() {
  return (
    <div className='suggestions'>
      <div className="suggestions_title">Suggestions for you</div>      
      <div className="suggestions_usernames">

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username_info">
              <span className='usename'>amru_</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>G</Avatar>
            </span>
            <div className="username_info">
              <span className='usename'>gouri_khan</span>
              <span className="relation">Followed by imsrk</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>J</Avatar>
            </span>
            <div className="username_info">
              <span className='usename'>jyothika_offi</span>
              <span className="relation">Followed by suria_offi</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>K</Avatar>
            </span>
            <div className="username_info">
              <span className='usename'>krishnapriya_k</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>N</Avatar>
            </span>
            <div className="username_info">
              <span className='usename'>nayana_vs</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
  
      </div>
    </div>
  )
}

export default Suggestions