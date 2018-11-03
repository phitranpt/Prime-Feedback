import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyFeelingObject = {
    understand: '',
}

class Understand extends Component {

    state = emptyUnderstandObject;

    //sends user info into emptyFeelingObject and pushes to understand page
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding understand rating');
        this.props.dispatch({ type: 'ADD_UNDERSTAND', payload: this.state})
        // this.props.history.push('/Support')
        this.clearInputs();
    }

    //takes answer from input and set in state
    handleChange = (event) => {
        this.setState({
            understand: event.target.value,
        })      
    }

    //clear inputs
    clearInputs = () => {
        this.setState(emptyFeelingObject);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>How well are you understanding the content?</h2>
            <input onChange={this.handleChange} placeholder="Rate from 1-5" value={this.state.understand} name="understand" />
            <input type="submit" value="Next" />
        </form>
        );
    }
}

export default connect()(Understand);