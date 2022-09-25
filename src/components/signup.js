import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import Home from './home'

export default function SignUp() {
	const [registerEmail, setRegisterEmail] = useState('')
	const [registerPassword, setRegisterPassword] = useState('')
	const register = async () => {
		const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
		return <redirect to={<Home />} />
	}
	/*const handleGoogleSignIn = async () => {
		try {
			await googleSignIn()
		} catch (error) {
			console.log(error)
		}
	}*/
	/*const comingSoon = (e) => {
		e.preventDefault()
		alert('Feature Coming Soon')
	}*/
	return (
		<form>
			<h2>Sign Up</h2>
			<div className="mb-3">
				<label>First name</label>
				<input type="text" className="form-control" placeholder="First name" />
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
					onChange={(e) => {
						setRegisterEmail(e.target.value)
					}}
				/>
			</div>
			<div className="mb-4">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
					onChange={(e) => {
						setRegisterPassword(e.target.value)
					}}
				/>
			</div>
			<div className="d-grid">
				<button type="submit" className="btn btn-primary" onClick={register}>
					SignUp With Email
				</button>
			</div>
			<p className="signup text-right">
				Already registered{' '}
				<Link className="signup" to={'/signin'}>
					{' '}
					sign in?
				</Link>
			</p>
		</form>
	)
}
