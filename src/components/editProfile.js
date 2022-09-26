import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './profile.css'

function Profile() {
	const navigate = useNavigate()
	const name = 'Hetvi Patel'
	const phone = '12345679'
	const email = 'txt@mail.com'
	const profileImg = 'http:gravatar.com/avatar/288ce55a011c709f4e17aef7e3c86c64?s=200'
	const bio = 'ljasdjkaskd'
	const saveProfile = () => {
		navigate('/profile')
	}
	const cancel = () => {
		navigate('/profile')
	}
	return (
		<>
			<div className="content-profile-page">
				<h2>Edit Details</h2>
				<div className="mb-3">
					<label>Full Name</label>
					<input type="text" className="form-control" placeholder={name} />
				</div>
				<div className="mb-3">
					<label>Phone Number</label>
					<input type="text" className="form-control" placeholder={phone} />
				</div>
				<div className="mb-3">
					<label>Email address</label>
					<input type="email" className="form-control" placeholder={email} />
				</div>
				<div className="mb-3">
					<label>Bio</label>
					<input type="text" className="form-control" placeholder={bio} />
				</div>
				<div className="mb-3">
					<label>Photo</label>
					<input type="file" name="" value="" className="form-control" />
					<button className="btn btn-primary">Upload</button>
				</div>
				<div className="d-grid">
					<button className="btn btn-primary" onClick={cancel}>
						Cancel
					</button>
				</div>
				<br></br>
				<div className="d-grid">
					<button className="btn btn-primary" onClick={saveProfile}>
						Save
					</button>
				</div>
			</div>
		</>
	)
}
export default Profile
