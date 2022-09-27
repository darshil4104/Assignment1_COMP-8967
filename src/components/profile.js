import React, { useState } from 'react'
import './profile.css'
import { Link, useNavigate } from 'react-router-dom'

function Profile() {
	let navigate = useNavigate()

	const name = 'Hetvi Patel'
	const phone = '12345679'
	const email = 'patel3m4@uwindsor.ca'
	const profileImg = 'http://gravatar.com/avatar/288ce55a011c709f4e17aef7e3c86c64?s=200'
	const bio = 'Uwindsor Student'

	const logout = () => {
		localStorage.removeItem('AuthToken')
		localStorage.removeItem('email')
		localStorage.removeItem('isSocialLogin')
		navigate(`/signin`)
	}

	return (
		<>
			<div className="content-profile-page">
				<div>
					<div className="img-user-profile">
						<img className="avatar" src={profileImg} alt="profile" />
					</div>
					<div className="user-profile-data">
						<h1>{name}</h1>
						<p>Phone: {phone}</p>
						<p>Email: {email}</p>
					</div>
					<div className="description-profile">Bio: {bio}</div>
					<br></br>
					<br></br>
					<div className="d-grid">
						<a
							href="/edit-profile"
							className="d-grid"
							style={{
								color: 'black',
								textDecoration: 'none',
							}}
						>
							<button className="btn btn-primary">Edit</button>
						</a>
						<button className="btn btn-primary mt-2" onClick={logout}>
							Logout
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
export default Profile
