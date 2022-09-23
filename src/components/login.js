import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
	console.log('Blah blah')
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
					type="email"
					className="form-control"
					placeholder="Enter email"
					//   value={this.email}
					// onChange={this.onUpdateField}
				/>
			</div>
			<div className="mb-3">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
					//   value={this.password}
					// onChange={this.onUpdateField}
				/>
			</div>
			<div className="d-grid">
				<button type="submit" className="btn btn-primary" onClick={comingSoon}>
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
