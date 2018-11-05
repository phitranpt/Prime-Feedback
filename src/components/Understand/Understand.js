import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../src/feedback.css';
import '../../../src/bootstrap.min.css';

const emptyUnderstandObject = {
    understand: '',
}

class Understand extends Component {

    state = emptyUnderstandObject;

    //sends user info into emptyFeelingObject and pushes to support page
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding understand rating');
        this.props.dispatch({ type: 'ADD_UNDERSTAND', payload: this.state})
        this.props.history.push('/2')
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
        this.setState(emptyUnderstandObject);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>How well are you understanding the content?</h2>
            <input onChange={this.handleChange} value="1" name="understand" type="radio" className="rating"/>1
            <input onChange={this.handleChange} value="1" name="understand" type="radio" className="rating"/>2
            <input onChange={this.handleChange} value="1" name="understand" type="radio" className="rating"/>3
            <input onChange={this.handleChange} value="1" name="understand" type="radio" className="rating"/>4
            <input onChange={this.handleChange} value="1" name="understand" type="radio" className="rating"/>5
            <input type="submit" value="Next" className="next btn btn-secondary"/>
        </form>
        );
    }
}

export default connect()( Understand );