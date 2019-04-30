import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import '../PostContainer/PostContainer.css'
import '../CommentSection/CommentSection.css'



function Post(props) {
    console.log(props);
    return (
        <div key={props.post.username} className="post-container">
            <div className='container-header'>
                <img className="thumbnail" src={props.post.thumbnailUrl} alt="thumbnail"/>
                <p>{props.post.username}</p>
            </div>
            <div className="post-image">
                <img src={props.post.imageUrl} alt={props.post.username} />
            </div>
            <div className="comment-section">
                <CommentSection comments={props.post.comments} />
                <p className="date">{props.post.timestamp}</p>
                
        
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            
         })
    )
};

export default Post;