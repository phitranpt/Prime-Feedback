import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../src/feedback.css';
import '../../../src/bootstrap.min.css';

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
            <h2>How well are you being supported?</h2>
            <input onChange={this.handleChange} value="1" name="support" type="radio" className="rating"/>1
            <input onChange={this.handleChange} value="1" name="support" type="radio" className="rating"/>2
            <input onChange={this.handleChange} value="1" name="support" type="radio" className="rating"/>3
            <input onChange={this.handleChange} value="1" name="support" type="radio" className="rating"/>4
            <input onChange={this.handleChange} value="1" name="support" type="radio" className="rating"/>5
            <input type="submit" value="Next" className="next btn btn-secondary"/>
        </form>
        );
    }
}

export default connect()( Support );