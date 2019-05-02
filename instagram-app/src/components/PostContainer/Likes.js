import React from 'react';
import Heart from '../../assets/image/heart.png';
import Comment from '../../assets/image/comment.png';
import './PostContainer.css';
const Likes = props => {
  return [
    <div className="likes" key="likes-icons" onClick={props.incrementLike}>
      <div className="like-container">
        <img src={Heart} alt="heart-icon" />
      </div>
      <div className="like-container">
        <img className="comment-icon" src={Comment} alt="comment-icon" />
      </div>
    </div>,
    <div className="likes" key="likes-container">
      <div className="like-section-wrapper">{props.likes} likes</div>
    </div>
  ];
};

export default Likes;