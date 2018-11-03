import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptySupportObject = {
    support: '',
}

class Support extends Component {

    state = emptySupportObject;

    //sends user info into emptySupportObject and pushes to comment page
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding support rating');
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state})
        this.props.history.push('/3')
        this.clearInputs();
    }

    //takes answer from input and set in state
    handleChange = (event) => {
        this.setState({
            support: event.target.value,
        })      
    }

    //clear inputs
    clearInputs = () => {
        this.setState(emptySupportObject);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>How well are you being suported?</h2>
            <input onChange={this.handleChange} placeholder="Rate from 1-5" value={this.state.support} name="support" />
            <input type="submit" value="Next" />
        </form>
        );
    }
}

export default connect()( Support );