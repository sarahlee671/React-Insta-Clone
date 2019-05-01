import React from 'react';

const withAuthenticate = PostsPage =>
  class extends React.Component {
    render() {
        const postsPage = <PostsPage {...this.props} />;
        const toShow = if(imLoggedIn) {
          return postsPage
        } else {
          return loginPage
        }
        return toShow
    }
  };

export default withAuthenticate; 
