import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    const posts = this.state.posts.map(post=>{
      return <Post post={post} />
    })
    return (
      <div className="App">
        {posts}
      </div>
    )
  }


}
export default App;
