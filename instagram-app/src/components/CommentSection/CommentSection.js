import React from 'react';
import CommentForm from '../CommentSection/CommentForm';
import styled from 'styled-components';

const CommentDiv = styled.div`
    width: 400px;
    margin: auto;
`;

const CommentP = styled.p`
    margin-left: 10px;
    font-size: 12px;
`;




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
            <CommentDiv className="comment-section" >
                {
                    this.props.comments.map(comment =>
                        <div>
                            <CommentP><span className='username'>{comment.username}</span> {comment.text}</CommentP>
                        </div>
                    )
                }
                {
                    this.state.comments.map(comment =>
                        <div>
                            <CommentP><span className='username'>{comment.username}</span> {comment.text}</CommentP>
                        </div>
                    )
                }

                < CommentForm addComment={this.addComment}/>

            </CommentDiv>
        )
    }
}

export default CommentSection;