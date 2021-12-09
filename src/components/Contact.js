import React, {useRef} from 'react';
import './Contact.scss';

export default function Contact() {
	const firstNameRef = useRef(null)
	const lastNameRef = useRef(null)
	const emailRef = useRef(null)
	const messageRef = useRef(null)

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = {
			firstName: firstNameRef.current.value,
			lastName: lastNameRef.current.value,
			email: emailRef.current.value,
			message: messageRef.current.value
		}
		alert('Yes! \n' + JSON.stringify(data) + 'Your data')
	}

	return (
		<section id='contact' className='contact-wrap'>
			<h2>Contact</h2>

			<form className='contact-form'>
				<div className='contact-name'>

					<label for='firstName'>First name</label>
					<input
						type='text'
						name='firstName'
						className='firstName'
						tabIndex='1'
						/>
					<label for='lasttName'>Last name</label>
					<input
						type='text'
						name='lastName'
						className='lastName'
						tabIndex='2'
						/>
				</div>
				</form>

				<label for='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					className='email'
					placeholder='example@gmail.com'
					tabIndex='3'
					/>

				<label for='message'>Message</label>

				<textarea
					placeholder='Send me a message ...'
					className='message'
					name='message'
				/>

				<button type='submit' className='contact-send'></button>

			
		</section>
	)
}

