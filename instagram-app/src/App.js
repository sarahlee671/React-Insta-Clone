import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      post: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <Post post={this.state.post} />
      </div>
    )
  }


}
export default App;
