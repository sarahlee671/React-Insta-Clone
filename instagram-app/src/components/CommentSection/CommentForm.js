import React from "react";
import styled from 'styled-components';

const Input = styled.input`
    width: 370px;
    height: 50px;
    border: none;
    border-top: 1px solid gray;
    margin: 10px;
`;



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
                <Input className="input" placeholder="Add a comment" type="text" value={this.state.inputValue} onChange={this.handleChanges} />
                
  
            </form >
        );
    }
}

 export default CommentForm;
