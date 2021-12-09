import React from 'react';
import './Resume.scss';
import resumePdf from '../data/Kay-Resume-Web.pdf'

export default function Resume () {
	return (
		<section id='resume' className='resume-wrap'>
			<h2 className='resume-title'>Kay's Resume</h2>
			<iframe className = 'resume-pdf' src={`${resumePdf}#view=fitH`} title='resumePdf'/>
		</section>
	)
}