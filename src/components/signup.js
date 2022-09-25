import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

export default function SignUp() {
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
	const [registerEmail, setRegisterEmail] = useState('')
	const [registerPassword, setRegisterPassword] = useState('')
	const [error, setError] = useState(null)

	useEffect(() => {
		const token = localStorage.getItem('AuthToken')
		if (token) {
			navigate('/home')
		}
	}, [navigate])

	const register = async (e) => {
		e.preventDefault()
		setError(null)
		setIsLoading(true)
		try {
			createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then((response) => {
				if (response) {
					navigate('/signin')
				}
			})
		} catch (error) {
			setIsLoading(false)
			setError(error)
		}
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
	return isLoading ? (
		<div>Loader</div>
	) : (
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
			{error && <p>{error}</p>}
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
