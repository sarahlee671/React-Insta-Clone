import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../PostContainer/PostContainer.css'
import '../CommentSection/CommentSection.css'
import Likes from './Likes';

const PostContainer= styled.div`
    width: 400px;
    border: 1px solid gray;
    margin: auto;
`;

const ContainerHeader = styled.div`
    display: flex;
    width: 400px;
    height: 50px;
    flex-wrap: wrap;
    align-items: center;
`;

const ContainerHeaderP = styled.div`
    font-weight: bold;
`;

const ThumbnailImg = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 15px;
`;


const PostImage = styled.img`
    width: 400px;
`;



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
            <PostContainer key = { this.props.post.username } className = "post-container" >
                <ContainerHeader className='container-header'>
                    <ThumbnailImg className="thumbnail" src={this.props.post.thumbnailUrl} alt="thumbnail" />
                    <ContainerHeaderP>{this.props.post.username}</ContainerHeaderP>
                </ContainerHeader>
                <div className="post-image">
                    <PostImage src={this.props.post.imageUrl} alt={this.props.post.username} />
                </div>
                <div>
                    <Likes incrementLike={this.incrementLike} likes={this.state.likes}/>
                </div>
                
                <div className="comment-section">
                    <CommentSection comments={this.props.post.comments} />
                    <p className="date">{this.props.post.timestamp}</p>


                </div>
            </PostContainer>
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