import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

export default function SignUp() {
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
	const [registerEmail, setRegisterEmail] = useState('')
	const [registerPassword, setRegisterPassword] = useState('')
	const [error, setError] = useState(null)
	//const { REACT_APP_FACEBOOK_ID, REACT_APP_GOOGLE_CLIENT_ID } = process.env

	useEffect(() => {
		const token = localStorage.getItem('AuthToken')
		console.log({ token })
		if (token) {
			navigate('/home')
		}
	}, [navigate])

	// const responseGoogle = (response) => {
	// 	console.log(response)
	// 	if (!response.error) {
	// 		localStorage.setItem('AuthToken', `${response?.accessToken}`)
	// 		localStorage.setItem('email', `${response?.profileObj?.email}`)
	// 		localStorage.setItem('name', `${response?.profileObj?.name}`)
	// 		localStorage.setItem('id', `${response?.googleId}`)
	// 		localStorage.setItem('isSocialLogin', true)
	// 		localStorage.setItem('socialProvider', 'google')
	// 		navigate('/home')
	// 	}
	// }
	// const responseFacebook = (response) => {
	// 	if (!response.error) {
	// 		localStorage.setItem('AuthToken', `${response?.accessToken}`)
	// 		localStorage.setItem('email', `${response?.email}`)
	// 		localStorage.setItem('name', `${response?.name}`)
	// 		localStorage.setItem('id', `${response?.id}`)
	// 		localStorage.setItem('isSocialLogin', true)
	// 		localStorage.setItem('socialProvider', 'facebook')
	// 		navigate('/home')
	// 	}
	// }
	const register = async (e) => {
		e.preventDefault()
		setError(null)
		setIsLoading(true)
		try {
			const response = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
			if (response) {
				navigate('/profile')
			}
		} catch (error) {
			setIsLoading(false)
			setError(error.toString())
		}
	}

	return (
		<form onSubmit={register}>
			<h2>Sign Up</h2>
			<div className="mb-3">
				<label>First name</label>
				<input type="text" required className="form-control" placeholder="First name" />
			</div>
			<div className="mb-3">
				<label>Last name</label>
				<input type="text" className="form-control" required placeholder="Last name" />
			</div>
			<div className="mb-3">
				<label>Email address</label>
				<input
					type="email"
					name="email"
					required
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
					name="password"
					pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
					title="Please enter atleast 8 characters, including 1 uppercase and special character"
					required
					className="form-control"
					placeholder="Enter password"
					onChange={(e) => {
						setRegisterPassword(e.target.value)
					}}
				/>
				<span style={{ fontSize: 11, color: '#999', fontWeight: 'normal' }}>
					Should be atleast 8 characters, including uppercase & special characters
				</span>
			</div>
			{error && (
				<p className="errorText" style={{ fontSize: '10px', color: 'red' }}>
					{error}
				</p>
			)}
			<div className="d-grid">
				<button type="submit" className="btn btn-primary" disabled={isLoading}>
					{isLoading ? 'Please Wait' : 'Sign up'}
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
