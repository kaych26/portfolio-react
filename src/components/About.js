import React, { Fragment } from 'react';
import './About.scss';

export default function About(props) {
	let portfolioData = props.portfolioData;
	console.log (portfolioData.aboutMe);
	return (
		<section id='about' className='about-wrap'>
			<h2 className='about-title'>My Story</h2>
			<div className='about-body'>
				{portfolioData.about && portfolioData.about.map((item, index) => {
					<div>
						<h3 key={index}>{item}</h3>
						<br/>
					</div>
				})}
			</div>
			<hr align='center' className='about-divider'/>
		</section>
	)
}