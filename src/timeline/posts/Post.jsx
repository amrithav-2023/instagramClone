import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, MoreHoriz, Telegram } from '@mui/icons-material'

function Post({user,postImage,likes,timeStamp}) {
  return (
    <div className='post'>
        <div className="post_header">
            <div className="post_headerAuthor">
                <Avatar style={{marginRight:'8px'}}>{user.charAt(0).toUpperCase()}</Avatar>
                {user} •<span>{timeStamp}</span>
            </div>
                <MoreHoriz/>
        </div>
        <div className="post_image">
            <img src={postImage} alt="Post" />
        </div>
        <div className="post_footer">
            <div className="post_footerIcons">
                <div className="post_iconsMain">
                    <FavoriteBorder className='postIcon' />
                    <ChatBubbleOutline className='postIcon' />
                    <Telegram className='postIcon' />
                </div>
                <div className="post_iconsSave">
                    <BookmarkBorder className='postIcon' />
                </div>
            </div>
            Liked by {likes} people
        </div>
    </div>
  )
}

export default Post