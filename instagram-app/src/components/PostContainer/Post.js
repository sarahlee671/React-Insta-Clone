import React from 'react';


function Post(props) {
    console.log(props);
    return (
        <React.Fragment>
            {props.post.map(post => (
                
                <div key={post.username} className="post-container">
                    <img src={post.thumbnailUrl} />
                    <h3>{post.username}</h3>
                    <img src={post.imageUrl} alt={post.username} />
                </div>
            ))}
        </React.Fragment>
    )
}

export default Post;