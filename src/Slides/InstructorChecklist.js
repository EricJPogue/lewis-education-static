
import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeSlideInternalURL } from './SlideRouter';
import LewisUniversityLogo from './LewisUniversityLogo.png';

const NAME = 'Instructor Checklist'
export const INSTRUCTOR_CHECKLIST_ROUTE = 'instructor-checklist'
export const instructorChecklistLink = () => {return (<NavLink to={makeSlideInternalURL(INSTRUCTOR_CHECKLIST_ROUTE)}>{NAME}</NavLink>)}
export const instructorChecklist = () => {
	const title = { fontSize:40	}
	const listItem = { fontSize:24 }
	const squareType = { listStyleType:'square' }

	return ( <div>
		<div style={{display: "flex", justifyContent: "right", alignItems: "center"}}>
			<img src={LewisUniversityLogo} alt='Lewis University' width= '256'/>
		</div>
		<h1 style={title} onClick={() => headerClicked('sprint/1')}>{NAME}</h1>
		<br />
		<p style={listItem}>In preparation for class:</p>
		<ul style={squareType}>
			<li style={listItem}>Load polls</li>
			<li style={listItem}>Set camera, microphone, and speakers</li>
			<li style={listItem}>Share desktop in Zoom session</li>
			<li style={listItem}>Periodically review that recordings are opportunistic and available our Blackboard shell</li>
			<li style={listItem}>Open the appropriate Activity List, open the Agenda, and <em>Start recording</em></li> 
		</ul>
	</div> )
}

const headerClicked = (input) => {
	// Todo: Consider updating this so that it gets the current sprint instead of sprint 1 (which is passed into the function).
	// Todo: Introduce a feature the pulls up the current sprint Activity list.
	// Todo: Update the Blackboard course shells so they reference "Activity list" instead of "Todo list."
	// Todo: Implement link to current sprint Activity list **appropriately** in Blackboard shells (consider why a 
	//     student might NOT want to be forwarded to the current shell).
	window.location.assign('#/'+input);	
}
