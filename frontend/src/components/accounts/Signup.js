import React from "react";

// css
import "../../style/accounts/login.css";

// modules
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<div className="Signup">
			<div className="inputfields">
				<div className="header">
					<b>Welcome To RosterBuddy</b>
					<p>Sign up to continue</p>
				</div>
				<form>
					<div className="name">
						<div className="first nameInner">
							<h2>First name</h2>
							<input type="text" name="firstname" id="firstname" />
						</div>
						<div className="last nameInner">
							<h2>Last name</h2>
							<input type="text" name="lastname" id="lastname" />
						</div>
					</div>

					<div className="email">
						<h2>Email</h2>
						<input type="text" name="Email" id="email" />
					</div>
					<div className="password">
						<h2>Password</h2>
						<input type="password" name="password" id="password" />
					</div>
					<input type="submit" value="Submit" />
					<h2 className="existingAccount">
						<Link to="/login">Don't have an account?</Link>
					</h2>
				</form>
			</div>
			<div className="background"></div>
		</div>
	);
};

export default Signup;
