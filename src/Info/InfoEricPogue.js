import React from 'react'
import { internalLink, externalLink } from '../data/Links'
import photo from './InfoEricPoguePhoto.png'

export const InfoEricPogue = () => {
	const personalGitHub = () => { return externalLink('https://github.com/EricJPogue', 'https://github.com/EricJPogue') }
	const personalZoomRoom = () => { return externalLink('Personal Zoom link', 'https://us02web.zoom.us/j/6068812502?pwd=ODI5anpCa2RYNHV1Qlp3a3MyT01pUT09') }
	const universityResources = () => { return internalLink('University Resources', '/getting-help')}
	return ( <div>
		<h4>Your Instructor</h4><br />
		<img src={photo} alt='Eric Pogue' height='200' /><br /><br />
		<h5>Eric Pogue</h5>
		Assistant Professor<br /><br />

		Email: <a href='mailto:webmaster@example.com'>epogue@lewisu.edu</a><br />
		Zoom: {personalZoomRoom()}<br />
		GitHub: {personalGitHub()}<br /><br />

		Lewis Office Location: AS-124-A<br />
		Office Hours: TTR 2:30 to 4 PM CT by appointment<br /><br />

		Desk Phone: <a href='tel: +18158365015'>(815) 836-5015</a><br />
		Personal Mobile Phone: <a href='tel: +15632097280'>(563) 209-7280</a><br />
		Personal <a href='https://discord.gg/5GEgy5nEce' target='_blank' rel='noopener noreferrer'>Discord “Lewis” Server Invite (preview)</a><br /><br />

		Short Bio: Professional software developer and software development manager turned college instructor.<br /><br />

		<p>How to Contact Me? Email is the best way to contact me for nearly all questions that can not be asked during class. You can expect a 
		maximum response time of 24 hours weekdays.</p>
		<br />
		<p>Need help with University Resources including the Office of Technology, Tutoring, or the Library? Check out 
		the {universityResources()} page</p>
	</div> )
}