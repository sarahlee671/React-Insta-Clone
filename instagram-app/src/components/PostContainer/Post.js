import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


function Post(props) {
    console.log(props);
    return (
        <div key={props.post.username} className="post-container">
            <div className='container-header'>
                <img src={props.post.thumbnailUrl} alt="thumbnail"/>
                <h3>{props.post.username}</h3>
            </div>
            <img src={props.post.imageUrl} alt={props.post.username} />
            <CommentSection comments={props.post.comments} />
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