import React, {Component} from 'react';
import './Intro.scss';
// import githubIcon from '../img/github.png';
// import linkedinIcon from '../img/linkedin.png';

export default function Intro(props) {
	let resumeData = props.resumeData;
	return (
		<section className='intro-wrap'>
			{/* <h1 className='intro-name'><span id='intro-hi'>Hi</span></h1> */}
			<h1 className='intro-h1'><span className='intro-hi'>Hi</span><span className='intro-name'> I am {resumeData.name}.</span></h1>
			<h3 className='intro-role'>I am a {resumeData.role}.</h3>
			<hr/>
			<ul className='intro-social'> {
				resumeData.socialLinks && resumeData.socialLinks.map(item => {
					return(
						<li key={item.name}>
							<a href={item.url} target=''><img src={item.icon} alt={item.name} width='35' /></a>
						</li>
					)
				})
			}
			</ul>
		</section>
	)
}

