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
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state})
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
            <label id="label1">Nobody is helping me.</label>
            <input onChange={this.handleChange} value="1" name="support" type="radio" className="rating"/>
            <input onChange={this.handleChange} value="2" name="support" type="radio" className="rating"/>
            <input onChange={this.handleChange} value="3" name="support" type="radio" className="rating"/>
            <input onChange={this.handleChange} value="4" name="support" type="radio" className="rating"/>
            <input onChange={this.handleChange} value="5" name="support" type="radio" className="rating"/>
            <label id="label2">I love Prime Staff</label><br></br>
            <input type="submit" value="Next" className="next btn btn-secondary"/>
        </form>
        );
    }
}

export default connect()( Support );