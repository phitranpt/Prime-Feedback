import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

  state = {
    feedback: [],
  }

  //GET request from database
  getFeedback = () => {
    axios.get('/feedback')
    .then((response) => {
      console.log('feedback from GET request', response.data);
      const feedback = response.data;
      this.setState({feedback});
    })
    .catch((error) => {
      alert('Unable to GET all feedback', error)
    })
  }

  componentDidMount() {
    this.getFeedback();
  }

  render() {
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {this.state.feedback.map(feedback => (
                <tr key={feedback.id}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><button>Delete</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Admin;
