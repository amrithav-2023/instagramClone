import React, { useState } from 'react'
import './TimeLines.css'
import Suggestions from './Suggestions'
import Post from './posts/Post'

function TimeLines() {
  const [posts,setPosts] = useState([
    {
      user:'harrystyles',
      postImage:'https://media.gq-magazine.co.uk/photos/62c574bc36925302aa12a9b5/16:9/w_2560%2Cc_limit/DSC09622%2520(1).jpg',
      likes:1254624,
      timeStamp:'2h'
    },
    {
      user:'imsrk',
      postImage:'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/04/16/813403-shah-rukh-khan1.jpg',
      likes:35687,
      timeStamp:'2d'
    },
    {
      user:'suria_offi',
      postImage:'https://i.cdn.newsbytesapp.com/images/l212_31521612761473.jpg',
      likes:12367,
      timeStamp:'12h'
    },
    {
      user:'taylor_swift',
      postImage:'https://www.billboard.com/wp-content/uploads/2023/03/05-Taylor-Swift-The-Eras-Tour-opening-night-billboard-1548.jpg',
      likes:12345,
      timeStamp:'1h'
    },
    {
      user:'deepika_padukone',
      postImage:'https://filmfare.wwmindia.com/content/2020/jul/deepika-padukone-1595404131.jpg',
      likes:254624,
      timeStamp:'6h'
    },
    {
      user:'ranveer_singh',
      postImage:'https://filmfare.wwmindia.com/content/2021/aug/ranveersingh21629778451.jpg',
      likes:12523,
      timeStamp:'10h'
    }
  ]);

  return (
    <div className='timeLine'>
        <div className="timeLine_Left">
            <div className="timeline_posts">
              {
                posts.map((item)=>(
                  <Post user={item.user} postImage={item.postImage} likes={item.likes} timeStamp={item.timeStamp} />
                ))
              }
            </div>
        </div>
        <div className="timeLine_Right">
          <Suggestions/>
        </div>

    </div>
  )
}

export default TimeLines