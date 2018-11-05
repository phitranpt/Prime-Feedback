import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../../src/bootstrap.min.css';

class Submission extends Component {

    //sends user inputs to db, reset state, go back to feeling page
    handleSubmit = () => {
        console.log(this.props.reduxState.feedbackReducer);
        
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.feedbackReducer
        })
        .then((response) => {
            console.log('feedback sent to db', response);
            this.props.history.push('/');
            this.props.dispatch( {type: 'RESET_STATE'} );
        })
        .catch((error) => {
            alert('error in POST to db', error)
        })
    }

    render() {
        return (
        <section>
            <h2>Thank You!</h2><br></br>
            <button className="btn btn-secondary" onClick={this.handleSubmit}>Leave New Feedback</button>
        </section>       
        );
    }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect( mapReduxStateToProps )( Submission );