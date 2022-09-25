import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Profile from './components/profile'
import EditProfile from './components/editProfile'

function App() {
	return (
		<Router>
			<div className="App">
				<div className="auth-wrapper">
					<div className="auth-inner">
						<Routes>
							<Route exact path="/" element={<Login />} />
							<Route path="/signin" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/edit-profile" element={<EditProfile />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	)
}
export default App
