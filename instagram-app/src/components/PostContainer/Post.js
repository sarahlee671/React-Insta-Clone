import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import '../PostContainer/PostContainer.css'
import '../CommentSection/CommentSection.css'
import Likes from './Likes';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    };
    render() { 
        return(
            <div key = { this.props.post.username } className = "post-container" >
                <div className='container-header'>
                    <img className="thumbnail" src={this.props.post.thumbnailUrl} alt="thumbnail" />
                    <p>{this.props.post.username}</p>
                </div>
                <div className="post-image">
                    <img src={this.props.post.imageUrl} alt={this.props.post.username} />
                </div>
                <div>
                    <Likes incrementLike={this.incrementLike} likes={this.state.likes}/>
                </div>
                <div className="comment-section">
                    <CommentSection comments={this.props.post.comments} />
                    <p className="date">{this.props.post.timestamp}</p>


                </div>
            </div>
        )
    }
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