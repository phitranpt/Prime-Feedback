import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import '../../../src/bootstrap.min.css'
import './Admin.css';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';


class Admin extends Component {

  state = {
    feedback: [],
  }

  //DELETE request from db
  deleteFeedback = (id) => {
    axios({
      method: 'DELETE',
      url: `/feedback/${id}`
    })
    .then( (response) => {
      this.getFeedback();
    })
    .catch( (error) => {
      alert('error in delete request', error);
    })
  }

  //GET request from db
  componentDidMount = () => {
    axios.get('/feedback')
    .then((response) => {
      console.log('feedback from GET request', response.data);
      const feedback = response.data;
      this.setState({feedback});
    })
    .catch((error) => {
      alert('Unable to GET all feedback', error);
    })
  }

  // //display confirmation of delete
  // submit = () => {
  //   confirmAlert({
  //     title: 'Confirm to submit',
  //     message: 'Are you sure you want to delete?',
  //     buttons: [
  //       {
  //         label: 'Yes',
  //         onClick: () => this.deleteFeedback(this.props.feedback.id),
  //       },
  //       {
  //         label: 'No',
  //       }
  //     ]
  //   })
  // };

  render() {
    return (
      <div>
        <table className="table table-hover table-bordered">
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
                  <td><Button varient="raised" onClick={() => 
                    {if (window.confirm('Are you sure you want to delete?'))
                    this.deleteFeedback(feedback.id) }}
                    >Delete</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect( mapReduxStateToProps ) (Admin );
