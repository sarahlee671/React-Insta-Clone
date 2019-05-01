import React from 'react';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                {this.props.posts}
            </div>

        )
    }
}

export default PostsPage;