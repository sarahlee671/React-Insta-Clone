import React from 'react';
import dummyData from '../../dummy-data';
import Post from './Post';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            filteredPosts: []
        };
    }

    logOut = e => {
        e.preventDefault()
        localStorage.removeItem('username')
        window.location.reload();
    }
    componentDidMount() {
        this.setState({
          posts: dummyData,
          filteredPosts: dummyData
        });
      }
    
      searchPostsHandler = e => {
        const posts = this.state.posts.filter(p => {
          console.log(e.target.value.length)
          if (e.target.value.length === 0) {
            return true;
          } else if (p.username.includes(e.target.value)) {
            return p;
          } else {
            return null;
          }
        });
        this.setState({ filteredPosts: posts });
      };

    render() {
        const posts = this.state.filteredPosts.map(post=>{
            return <Post post={post} />
          })
        return(
            <div className="App">
                <SearchBar logOut={this.logOut} searchTerm={this.state.searchTerm} searchPosts={this.searchPostsHandler} />
                {posts}
            </div>

        )
    }
}

export default PostsPage;