import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core';
import MoreIcon from '../../images/More.png';
import Favorite from '../../images/favorite.png';
import Comment from '../../images/Comment.png';
import Send from '../../images/Send.png';
import Bookmark from '../../images/Bookmark.png';

function Post({user, postImage, likes, timestamps}) {
  return (
    <div className='post'>
        <div className='post_header'>
          <div className='post_headerAuthor'>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            {user} <span>{timestamps}</span>
          </div>
          <img src={MoreIcon}/>
        </div>
        <div className='post_image'>
          <img src='https://images.unsplash.com/photo-1517232115160-ff93364542dd?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>
        <div className='post_footer'>
          <div className='post_footerIcons'>
            <div className='post_iconsMain'>
              <img src={Favorite} className='postIcon'/>
              <img src={Comment} className='postIcon'/>
              <img src={Send} className='postIcon'/>
            </div>
            <div className='post_iconsSave'>
              <img src={Bookmark} className='postIcon2'/>
            </div>
          </div>
          3.700.500 Likes
        </div>
    </div>
  )
}

export default Post