import React from "react";

import "../../style/accounts/signin.css";

const Signin = () => {
	return (
		<div className="Signin">
			<div className="inputfields">
				<div className="header">
					<b>Welcome To RosterBuddy</b>
					<p>Sign in to continue</p>
				</div>
				<form action="localhost:5000/accounts/login" method="post">
					<div className="email">
						<h2>Email</h2>
						<input type="text" name="Email" id="email" />
					</div>
					<div className="password">
						<h2>Password</h2>
						<input type="password" name="password" id="password" />
					</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
			<div className="background"></div>
		</div>
	);
};

export default Signin;
