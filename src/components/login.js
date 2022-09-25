import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signOut, signInWithEmailAndPassword } from 'firebase/auth'
import Home from './home'

import { auth } from '../firebase-config'

export default function Login() {
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')

	const login = async () => {
		const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword)
	}
	/*const logout = async () => {
		await signOut(auth)
	}*/

	const comingSoon = (e) => {
		e.preventDefault()
		alert('Feature Coming Soon')
	}
	return (
		<form>
			<h2>Sign In</h2>
			<div className="mb-3">
				<label>Email</label>
				<input
					onChange={(e) => {
						setLoginEmail(e.target.value)
					}}
					type="email"
					className="form-control"
					placeholder="Enter email"
				/>
			</div>
			<div className="mb-3">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
					onChange={(e) => {
						setLoginPassword(e.target.value)
					}}
				/>
			</div>
			<div className="d-grid">
				<button type="submit" className="btn btn-primary" onClick={login}>
					Sign In
				</button>
			</div>
			<p className="signup text-right">
				Don't have an account yet{' '}
				<Link className="signup" to={'/signup'}>
					{' '}
					sign up?
				</Link>
			</p>
		</form>
	)

	//  LoginForm = props => {
	//   const [form, setForm] = useState({
	//     email: "",
	//     password: ""
	//   });

	//   const onUpdateField = e => {
	//     const nextFormState = {
	//       ...form,
	//       [e.target.name]: e.target.value,
	//     };
	//     setForm(nextFormState);
	//   };

	//   const onSubmitForm = e => {
	//     e.preventDefault();
	//     alert(JSON.stringify(form, null, 2));
	//   };
}
