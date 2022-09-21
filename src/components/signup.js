import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h2>Sign Up</h2>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={this.comingSoon}>
            Sign Up
          </button>
        </div>
        <p className="signup text-right">
          Already registered <Link className="signup" to={'/signin'}> sign in?
        </Link>
        </p>
      </form>
    )
  }

  comingSoon = (e) => {
    e.preventDefault();
    alert('Feature Coming Soon');
  };
}