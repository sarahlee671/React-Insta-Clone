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
            const newComment = {username: localStorage.getItem('username'), text: inputValue}
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
                            <p><span className='username'>{comment.username}</span> {comment.text}</p>
                        </div>
                    )
                }
                {
                    this.state.comments.map(comment =>
                        <div>
                            <p><span className='username'>{comment.username}</span> {comment.text}</p>
                        </div>
                    )
                }

                < CommentForm addComment={this.addComment}/>

            </div>
        )
    }
}

export default CommentSection;