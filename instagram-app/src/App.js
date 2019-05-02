import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate'
import Login from './components/Login/Login';



class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

export default App;
