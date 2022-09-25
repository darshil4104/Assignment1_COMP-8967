import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
	let navigate = useNavigate()
	const [email, setEmail] = useState('')
	const uEmail = localStorage.getItem('email')
	const token = localStorage.getItem('AuthToken')
	const name = localStorage.getItem('name')

	useEffect(() => {
		if (token) {
			setEmail(name || uEmail)
		} else {
			navigate('/signin')
		}
	}, [navigate, token])

	const signout = () => {
		localStorage.removeItem('AuthToken')
		localStorage.removeItem('email')
		localStorage.removeItem('name')
		localStorage.removeItem('id')
		localStorage.removeItem('socialProvider')
		localStorage.removeItem('isSocialLogin')
		navigate('/signin')
	}
	const profile = () => {
		navigate('/profile')
	}

	return (
		<div>
			<h2>Hello {email}!</h2>
			<div className="d-grid">
				<button type="submit" className="btn btn-primary" onClick={signout}>
					Log Out
				</button>
			</div>
			<br></br>
			<div className="d-grid">
				<button type="submit" className="btn btn-primary" onClick={profile}>
					Go To Profile
				</button>
			</div>
		</div>
	)
}
