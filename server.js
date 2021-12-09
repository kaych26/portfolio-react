const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const contactEmail = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'kaych26@gmail.com',
		passs: 'sKylar2015!'
	}
});

contactEmail.verify((error)=> {
	if (error) {
		console.log(error);
	}
	else {
		console.log('Ready to Send');
	}
});