import React, { useState } from "react";
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'

import * as actions from '../../store/actions'

const UserSignup = (props) => {
    const [ user, setUser ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: 'Farmer',
        password: '',
        confirmPassword: ''
    })

    const history = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()        
        props.signup(user)

        history.push('/')
    }
  return (
    <div className="card w-50">
    <h2 className="text-center mt-4">Sign Up</h2>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              required
              onChange={handleChange}
              value={user.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              required
              onChange={handleChange}
              value={user.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              required
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              required
              onChange={handleChange}
              value={user.confirmPassword}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        </form>
      </div>
    </div>
  );
};



const mapDispatchToProps = dispatch => {
    return {
        signup: (newUser) => dispatch(actions.signUp(newUser))
    }
}
export default connect(null, mapDispatchToProps)(UserSignup);
