import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

export default function Login() {
	let navigate = useNavigate()
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const token = localStorage.getItem('AuthToken')
		if (token) {
			navigate('/home')
		}
	}, [navigate])

	const login = async (e) => {
		try {
			e.preventDefault()
			setIsLoading(true)
			const response = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

			if (response?.user?.accessToken) {
				console.log({ response })
				localStorage.setItem('AuthToken', `${response?.user?.accessToken}`)
				localStorage.setItem('email', `${response?.user?.email}`)
				localStorage.setItem('isSocialLogin', false)
				navigate(`/home`)
			}
		} catch (error) {
			setIsLoading(false)
			console.log(error)
			setError(error.toString())
		}
	}

	const responseGoogle = (response) => {
		if (!response.error) {
			localStorage.setItem('AuthToken', `${response?.accessToken}`)
			localStorage.setItem('email', `${response?.profileObj?.email}`)
			localStorage.setItem('name', `${response?.profileObj?.name}`)
			localStorage.setItem('id', `${response?.googleId}`)
			localStorage.setItem('isSocialLogin', true)
			localStorage.setItem('socialProvider', 'google')
			navigate('/home')
		}
	}
	const responseFacebook = (response) => {
		if (!response.error) {
			localStorage.setItem('AuthToken', `${response?.accessToken}`)
			localStorage.setItem('email', `${response?.email}`)
			localStorage.setItem('name', `${response?.name}`)
			localStorage.setItem('id', `${response?.id}`)
			localStorage.setItem('isSocialLogin', true)
			localStorage.setItem('socialProvider', 'facebook')
			navigate('/home')
		}
	}
	const comingSoon = (e) => {
		e.preventDefault()
		alert('Feature Coming Soon')
	}
	return (
		<form onSubmit={login}>
			<h2>Sign In</h2>
			<div className="mb-3">
				<label>Email</label>
				<input
					onChange={(e) => {
						setLoginEmail(e.target.value)
					}}
					type="email"
					name="email"
					required
					className="form-control"
					placeholder="Enter email"
				/>
			</div>
			<div className="mb-3">
				<label>Password</label>
				<input
					type="password"
					name="password"
					minLength={6}
					required
					className="form-control"
					placeholder="Enter password"
					onChange={(e) => {
						setLoginPassword(e.target.value)
					}}
				/>
			</div>
			{error && <p style={{ fontSize: '8px', color: 'red' }}>{error}</p>}
			<div className="d-grid">
				<button type="submit" className="btn btn-primary" disabled={isLoading}>
					{isLoading ? 'Please Wait' : 'Sign In'}
				</button>
			</div>
			<div className="d-grid">
				<GoogleLogin
					className="mb-3 mt-3"
					clientId="496772446537-2d212dp18ghjsdsq76t8g131i964100o.apps.googleusercontent.com"
					buttonText="Login with Google"
					onClick={responseGoogle}
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
				<FacebookLogin
					className="m-3"
					icon={
						<img
							src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png"
							width={40}
							style={{ paddingRight: 16 }}
						/>
					}
					buttonStyle={{
						padding: '8px',
						borderRadius: '4px',
						width: '100%',
						textAlign: 'left',
						fontSize: '14px',
						textTransform: 'none',
					}}
					containerStyle={{
						width: '100%',
						'text-align': 'center',
					}}
					textButton="Login with Facebook"
					appId="507165660756438"
					autoLoad={false}
					fields="name,email,picture"
					onClick={() => {
						console.log('clicked')
					}}
					callback={responseFacebook}
				/>
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
