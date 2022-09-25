import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
	let navigate = useNavigate()
	const [email, setEmail] = useState('')

	useEffect(() => {
		const data = localStorage.getItem('email')
		const token = localStorage.getItem('AuthToken')
		if (data && token) {
			setEmail(data)
		} else {
			navigate('/signin')
		}
	}, [navigate])

	const signout = () => {
		localStorage.removeItem('AuthToken')
		localStorage.removeItem('email')
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
