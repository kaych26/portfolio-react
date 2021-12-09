import React, { Component } from 'react';
import './Header.scss';
import kLogo from '../img/KIcon.png';

export default class Header extends Component {
	render() {
		return (
			<header>

				<nav className='nav-wrap'>
					<img className='header-logo' src={kLogo} alt='Kay' width='50' />
					<ul id='nav' className='header-menu'>
						<li className='current'> <a href='#home'>Home</a></li>
						<li><a href='#about'>About</a></li>
						<li><a href='#resume'>Resume</a></li>
						<li><a href='#contact'>Contact</a></li>
					</ul>
				</nav>

				
			</header>
		)
	}
}