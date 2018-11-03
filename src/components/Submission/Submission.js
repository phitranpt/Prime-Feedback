import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Submission extends Component {

    handleSubmit = () => {
        console.log(this.props.reduxState.feedbackReducer);
        
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.feedbackReducer
        })
        .then((response) => {
            console.log('feedback being sent to db', response);
            this.props.history.push('/');
        })
        .catch((error) => {
            alert('error in POST to db', error)
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

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect( mapReduxStateToProps )( Submission );