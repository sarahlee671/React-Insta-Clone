import React from 'react';


const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.comments.map(comment =>
                <div>
                    <p>{comment.username} {comment.text}</p>

                    
                </div>
            )}
                <input className="input" type="text" placeholder="Add a comment" />
        </div>
    )
}

export default CommentSection;