import React, { useState } from "react";
import axios from "axios";

import "../../style/accounts/login.css";
// modules
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/account/login", { email, password });
			console.log("posted data");
			// Redirect to another page after successful login
			navigate("/dashboard");
		} catch (error) {
			console.error("Error logging in:", error);
		}
	};

	return (
		<div className="Login">
			<div className="inputfields">
				<div className="header">
					<b>Welcome To RosterBuddy</b>
					<p>Sign in to continue</p>
				</div>
				<form id="login-form" onSubmit={handleSubmit}>
					<div className="email">
						<h2>Email</h2>
						<input type="text" name="Email" onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="password">
						<h2>Password</h2>
						<input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
					</div>
					<input type="submit" value="Submit" />
					<h2 className="existingAccount">
						<Link to="/signup">Don't have an account?</Link>
					</h2>
				</form>
			</div>
			<div className="background"></div>
		</div>
	);
};

export default Login;
