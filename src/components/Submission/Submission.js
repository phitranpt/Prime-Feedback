import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Submission extends Component {

    //send user back to beginning and POST feedback to db
    handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {}
        })
        .then((response) => {
            console.log('sending data to db', response);
            this.props.dispatch({ type: 'SUBMISSION'})
            this.props.history.push('/');
        })
        .catch((error) => {
            alert('error is posting to database', error)
        })
    }

    render() {
        return (
        <section>
            <h2>Thank You!</h2>
            <button onClick={this.handleSubmit}>Leave New Feedback</button>
        </section>       
        );
    }
}

export default connect()( Submission );