import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const NavBar = (props) => {
	return (
		<nav className="navigation">
			<div className="container mod--alignCenter mod--spaceBetween">
				<Link to="/" className="logo">Sample Logo</Link>
				<ul>
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		</nav>
	);
}

export default withRouter(NavBar);