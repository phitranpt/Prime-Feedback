import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyFeelingObject = {
    feeling: '',
}

class Feeling extends Component {

    state = emptyFeelingObject;

    //sends user info into emptyFeelingObject and pushes to understand page
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding feeling rating');
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state})
        this.props.history.push('/1')
        this.clearInputs();
    }

    //takes answer from input and set in state
    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
        })      
    }

    //clear inputs
    clearInputs = () => {
        this.setState(emptyFeelingObject);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>How are you feeling today?</h2>
            <input onChange={this.handleChange} placeholder="Rate from 1-5" value={this.state.feeling} name="feeling" />
            <input type="submit" value="Next" />
        </form>
        );
    }
}

export default connect()( Feeling );