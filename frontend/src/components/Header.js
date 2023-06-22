import React from "react";

// import css
import "../style/header.css";

const Header = () => {
	return (
		<div className="header-main">
			<div className="branding">
				<div className="logo"></div>
				<h1>RosterBuddy</h1>
			</div>
			<div className="navigation">
				<ul>
					<a href="./">
						<li className="Active">Dashboard</li>
					</a>
					<a href="./Calander">
						<li>Calander</li>
					</a>
					<a href="./Groups">
						<li>Groups</li>
					</a>
					<a href="./Settings">
						<li>Settings</li>
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Header;
