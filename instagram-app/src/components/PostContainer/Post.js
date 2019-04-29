import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


function Post(props) {
    console.log(props);
    return (
        <div key={props.post.username} className="post-container">
            <div className='container-header'>
                <img src={props.post.thumbnailUrl} />
                <h3>{props.post.username}</h3>
            </div>
            <img src={props.post.imageUrl} alt={props.post.username} />
            <CommentSection comments={props.post.comments} />
        </div>


    )
}

export default Post;