import React from 'react'
import { NavLink } from 'react-router-dom'
import photo from './InfoEricPoguePhoto.png'

export const InfoEricPogue = () => {
	return (

<div>
<h4>Your Instructor</h4><br />
<img src={photo} alt='Eric Pogue' height='200' /><br /><br />
<h5>Eric Pogue</h5>
Assistant Professor<br /><br />
Email: <a href='mailto:webmaster@example.com'>epogue@lewisu.edu</a><br />
Personal Zoom Meeting <a href='https://us02web.zoom.us/j/6068812502?pwd=ODI5anpCa2RYNHV1Qlp3a3MyT01pUT09' target='_blank' rel='noopener noreferrer'>[link]</a><br /><br />
Desk Phone: <a href='tel: +18158365015'>(815) 836-5015</a><br />
Personal Mobile Phone: <a href='tel: +15632097280'>(563) 209-7280</a><br />
Personal Discord “Lewis” Server Invite (preview) <a href='https://discord.gg/5GEgy5nEce' target='_blank' rel='noopener noreferrer'>[link]</a><br /><br />

Short Bio: Professional software developer and software development manager turned college instructor.<br /><br />

<p>How to Contact Me?</p>
<p>Email is the best way to contact me for nearly all questions that can not be asked during class. You can expect a 
maximum response time of 24 hours weekdays. If your question requires an immediate response, please call me.</p>
<br />
<p>Need help with University Resources including the Office of Technology, Tutoring, or the Library? Check out 
the <NavLink to='/getting-help'>University Resources</NavLink> page</p>
</div>

	)
}