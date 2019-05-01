import React from 'react';
import Heart from '../../assets/image/heart.png';
import Comment from '../../assets/image/comment.png';
const Likes = props => {
  return [
    <div className="likes" key="likes-icons" onClick={props.incrementLike}>
      <div className="like-container">
        <img src={Heart} alt="heart-icon" />
      </div>
      <div className="like-container">
        <img src={Comment} alt="comment-icon" />
      </div>
    </div>,
    <div className="likes" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  ];
};

export default Likes;