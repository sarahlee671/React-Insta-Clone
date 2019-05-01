import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log('App: CDM running');
    this.setState({
      posts: dummyData
    });
  }

  render() {
    const posts = this.state.posts.map(post=>{
      return <Post post={post} />
    })
    return (
      <div className="App">
        <SearchBar />
        {posts}
      </div>
    )
  }


}
export default App;
