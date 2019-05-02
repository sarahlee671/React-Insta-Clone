import React from "react";


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           inputValue: '', 
        };
    }
    
    handleChanges = e => {
        this.setState({inputValue: e.target.value});
    };
    
    submitComment = e => {
        e.preventDefault();
        this.props.addComment(this.state.inputValue);
        this.setState({ inputValue: ""});
    };

    render() {
        return (
            < form className="form" onSubmit={this.submitComment} >
                <input className="input" placeholder="Add a comment" type="text" value={this.state.inputValue} onChange={this.handleChanges} />
                
  
            </form >
        );
    }
}

 export default CommentForm;
