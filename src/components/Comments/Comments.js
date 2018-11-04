import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyCommentObject = {
    comment: '',
}

class Comments extends Component {

    state = emptyCommentObject;

    //sends user info into emptyCommentObject and pushes to submission page
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding comments');
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state})
        this.props.history.push('/4')
        this.clearInputs();
    }

    //takes answer from input and set in state
    handleChange = (event) => {
        this.setState({
            comment: event.target.value,
        })      
    }

    //clear inputs
    clearInputs = () => {
        this.setState(emptyCommentObject);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>Any comments you want to leave?</h2>
            <input onChange={this.handleChange} placeholder="Add Comments" value={this.state.comment} name="comment" />
            <input type="submit" value="Next" />
        </form>
        );
    }
}

export default connect()( Comments );