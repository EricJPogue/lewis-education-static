import React from 'react'
import { NavLink } from 'react-router-dom'

import { makeSlideInternalURL } from './SlideRouter'
import { INSTRUCTOR_CHECKLIST_ROUTE } from './InstructorChecklist'
import { wireless, blackboard } from '../Links'

import LewisUniversityLogo from './LewisUniversityLogo.png'

const NAME = 'Preflight Checklist'
export const PREFLIGHT_CHECKLIST_ROUTE = 'preflight-checklist'
export const preflightChecklistLink = () => {return (<NavLink to={makeSlideInternalURL(PREFLIGHT_CHECKLIST_ROUTE)}>{NAME}</NavLink>)}
export const preflightChecklist = () => {
	const title = { fontSize:40	}
	const listItem = { fontSize:24 }
	const squareType = { listStyleType:'square' }

	return ( <div>
		<div style={{display: "flex", justifyContent: "right", alignItems: "center"}}>
		<img src={LewisUniversityLogo} alt='Lewis University' width= '256'/>
		</div>

		<h1 style={title} onClick={() => headerClicked(INSTRUCTOR_CHECKLIST_ROUTE)}>{NAME}</h1>
		<br />
		<p style={listItem}>Prior to class please:</p>
		<ul style={squareType}>
			<li style={listItem}>Sign into our {blackboard()} course shell</li>
			<li style={listItem}>Sign into our Zoom session through the Zoom link in our Blackboard course shell</li>
			<li style={listItem}>Make sure that you can hear the conversation, see shared desktops, and view chat topics</li>
			<li style={listItem}>Be prepared to share your computer screen</li>
			<li style={listItem}>Be prepared to utilize a headset with a microphone</li> 
			<li style={listItem}>Optionally leave your camera on to help make our class more interactive</li>
		</ul>

		<br />
		<p style={listItem}>In-person participants also:</p>
		<ul style={squareType}>
			<li style={listItem}>Make sure that your microphone and speakers are muted/off so that we don’t get an echo</li>
			<li style={listItem}>Sit in a good spot near the classroom ceiling microphones if possible</li>
			<li style={listItem}>Check your campus {wireless()} network access as needed</li>
		</ul>
		</div> )
}

const headerClicked = (input) => {
	window.location.assign('#/slide/'+input);	
}
