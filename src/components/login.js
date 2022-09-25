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

	useEffect(() => {
		const token = localStorage.getItem('AuthToken')
		if (token) {
			navigate('/home')
		}
	}, [navigate])

	const login = async (e) => {
		try {
			e.preventDefault()

			signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((response) => {
				if (response?.user?.accessToken) {
					console.log({ response })
					localStorage.setItem('AuthToken', `${response?.user?.accessToken}`)
					localStorage.setItem('email', `${response?.user?.email}`)
					localStorage.setItem('isSocialLogin', false)
					navigate(`/home`)
				}
			})
			// console.log(user);
		} catch (error) {
			console.log(error)
		}
	}
	/*const logout = async () => {
		await signOut(auth)
	}*/
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
			<GoogleLogin
				clientId="496772446537-2d212dp18ghjsdsq76t8g131i964100o.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
			/>
			<FacebookLogin
				appId="507165660756438"
				autoLoad={true}
				fields="name,email,picture"
				onClick={() => {
					console.log('clicked')
				}}
				callback={responseFacebook}
			/>
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
