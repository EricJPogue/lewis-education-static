import React from 'react'
import { NavLink } from 'react-router-dom'
import photo from './InfoEricPoguePhoto.png'

export const InfoEricPogue = () => {
	return (

<div>
<h4>Your Instructor</h4><br />
<img src={photo} alt='Eric Pogue' height='200' /><br /><br />
<h5>Eric Pogue</h5>
Email: <a href='mailto:webmaster@example.com'>epogue@lewisu.edu</a><br />
Mobile Phone: <a href='tel: +15632097280'>(563)209-7280</a><br />
Personal Zoom Meeting <a href='https://us02web.zoom.us/j/6068812502?pwd=ODI5anpCa2RYNHV1Qlp3a3MyT01pUT09' target='_blank' rel='noopener noreferrer'>[link]</a><br />
Personal Discord “Lewis” Server Invite (preview) <a href='https://discord.gg/5GEgy5nEce' target='_blank' rel='noopener noreferrer'>[link]</a><br /><br />
Short Bio: Professional software developer and software development manager turned college 
instructor.<br /><br />

<p>How to Contact Me?</p>
<p>For most questions please utilize our <em>“Class Forum” Discussion Board</em>. History suggests that posts to our 
Class Forum get the quickest and highest quality responses. However, if your question is of personal nature, email is 
your best alternative. In either case, you can expect a maximum response time of 24 hours weekdays.</p>

<p>For weekend questions that need quick responses the “Class Forum” is definitely your best bet. </p>

<p>If you need immediate response, call my mobile phone.</p>
<br />
<p>Need help with University Resources including the Office of Technology, Tutoring, or the Library? Here is a good 
place to start <NavLink to='/getting-help'>[link]</NavLink></p>
</div>

	)
}