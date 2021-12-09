import React from 'react';
import './Intro.scss';
// import githubIcon from '../img/github.png';
// import linkedinIcon from '../img/linkedin.png';

export default function Intro(props) {
	let portfolioData = props.portfolioData;
	return (
		<section id='home' className='intro-wrap'>
			<h1 className='intro-h1'><span className='intro-hi'>Hi</span><span className='intro-name'> {portfolioData.name}</span></h1>
			<h3 className='intro-role'> {
				portfolioData.role.map(line => {
					return (
						<p>	{line} </p>
					)
				})
			}
				</h3>
			{/* <hr/> */}
			<ul className='intro-social'> {
				portfolioData.socialLinks && portfolioData.socialLinks.map(item => {
					return(
						<li key={item.name}>
							<a href={item.url} target=''><img src={item.icon} alt={item.name} width='35' /></a>
						</li>
					)
				})
			}
			</ul>
			<hr className='intro-divider'/>
		</section>
	)
}

