import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

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
