import React from 'react';

const withAuthenticate = PostsPage =>
  class extends React.Component {
    render() {
        const postsPage = <PostsPage {...this.props} />;
        return postsPage
    }
  };

export default withAuthenticate; 
