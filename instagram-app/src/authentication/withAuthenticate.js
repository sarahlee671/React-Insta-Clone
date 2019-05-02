import React from 'react';
import Login from '../components/Login/Login';

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      console.log(localStorage.getItem('username'))
      if(!localStorage.getItem('username')) {
        this.setState({ loggedIn: false});
      } else {
        this.setState({ loggedIn: true});
      }
    }
    render() {
      if (this.state.loggedIn) return <PostsPage />;
      return <Login />;
    }
  };

export default withAuthenticate; 
