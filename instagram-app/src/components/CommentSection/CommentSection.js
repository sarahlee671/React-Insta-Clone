import React from 'react';


const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.comments.map(comment =>
                <li>{comment.username} {comment.text}</li>

            )}
        </div>
    )
}

export default CommentSection;