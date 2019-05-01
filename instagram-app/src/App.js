import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    console.log('App: CDM running');
    this.setState({
      posts: dummyData,
      filteredPosts: dummyData
    });
  }

  searchPostsHandler = e => {
    this.setState({
      searchTerm: e.target.value

    })
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
    const postsPage = <PostsPage posts={posts}/>
    
    return (
      <div className="App">
        <SearchBar searchTerm={this.state.searchTerm} searchPosts={this.searchPostsHandler}/>
        <ComponentFromWithAuthenticate posts={posts} />
      </div>
    )
  }


}
export default App;
