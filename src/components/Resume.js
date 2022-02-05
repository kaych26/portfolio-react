import React from 'react';
import { Document, Page } from 'react-pdf';
import './Resume.scss';
import resumePdf from '../data/Kay-Resume-Web.pdf'
import resume from '../data/Kay-Chan-Resume.png'

// npm i react-pdf, copy node_modules/pdfjs-dist/build/pdf.worker.js to ./public folder
export default function Resume () {
	// return (

	// 	<Document file={ resumePdf }  options={{ workerSrc: "/pdf.worker.js"}}>
	// 		<Page pageNumber={1} />
	// 	</Document>
	// )
	return (
		<>
		<div className='resume-image'>
			{/* This is my */}
			{/* <img src={resume} alt='Kay Resume'/> */}
			<img src={resume} alt='Kay Resume' width='900px'/>

		</div>
		{/* <section id='resume' className='resume-wrap'>
			<h2 className='resume-title'>Kay's Resume</h2>
			<iframe className = 'resume-pdf' src={`${resumePdf}#view=fitH&toolbar=0`} height='100%' width='100%' border='0'/>
		</section> */}

	  {/* <section>
			<h2 className='resume-image'>
				This is a test image
				<embed src={`${resumePdf}#view=fitH&toolbar=0&navpanes=0&zoom=200,250,100`} type='application/pdf' width='100%' height='700px'/>
			</h2>
		</section> */}
		</>
	)
}
// <iframe className = 'resume-pdf' src={`${resumePdf}#view=fitH&toolbar=0`} height='100%' width='100%' border='0'/>
			// <iframe className = 'resume-pdf' src={`${resumePdf}#view=fitH`} title='resumePdf' height='100%' width='100%' /> 