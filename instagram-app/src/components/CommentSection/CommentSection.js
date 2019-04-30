import React from 'react';
import CommentForm from '../CommentSection/CommentForm';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []

        }
    }

    addComment = inputValue => {
        this.setState(state => {
            const newComment = {username: "username", text: inputValue}
            const updatedComments = state.comments.concat(newComment)
            console.log(updatedComments)
            return {
                comments: updatedComments
            }

        })
   
    };
    render() {
        return (
            <div className="comment-section" >
                {
                    this.props.comments.map(comment =>
                        <div>
                            <p>{comment.username} {comment.text}</p>
                        </div>
                    )
                }
                {
                    this.state.comments.map(comment =>
                        <div>
                            <p>{comment.username} {comment.text}</p>
                        </div>
                    )
                }

                < CommentForm addComment={this.addComment}/>

            </div>
        )
    }
}

export default CommentSection;