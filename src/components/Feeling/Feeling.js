import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../src/feedback.css';
import '../../../src/bootstrap.min.css';

const emptyFeelingObject = {
    feeling: '',
}

class Feeling extends Component {

    state = emptyFeelingObject;

    //sends user info into emptyFeelingObject and pushes to understand page
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding feeling rating');
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state})
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
            <label id="label1">Totally Stressed...</label>
            <input onChange={this.handleChange} value="1" name="feeling" type="radio" className="rating"/>
            <input onChange={this.handleChange} value="2" name="feeling" type="radio" className="rating"/>
            <input onChange={this.handleChange} value="3" name="feeling" type="radio" className="rating"/>
            <input onChange={this.handleChange} value="4" name="feeling" type="radio" className="rating"/>
            <input onChange={this.handleChange} value="5" name="feeling" type="radio" className="rating"/>
            <label id="label2">Feeling Awesome!</label><br></br>
            <input type="submit" value="Next" className="next btn btn-secondary"/>
        </form>
        );
    }
}

export default connect()( Feeling );