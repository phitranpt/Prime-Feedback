import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {
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
            <tr>
              <td>4</td>
              <td>4</td>
              <td>5</td>
              <td>Loved the demo!</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Admin;
