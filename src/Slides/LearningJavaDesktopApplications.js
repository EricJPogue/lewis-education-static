
import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeSlideInternalURL } from './SlideRouter';

const NAME = 'Learning Java - Desktop Applications'
export const LEARNING_JAVA_DESKTOP_APPLICATIONS_ROUTE = 'learning-java-desktop-applications'
export const learningJavaDesktopApplicationsLink = () => {return (<NavLink to={makeSlideInternalURL(LEARNING_JAVA_DESKTOP_APPLICATIONS_ROUTE)}>{NAME}</NavLink>)}
export const learningJavaDesktopApplications = () => {
	const defaultText = { fontSize:24 }
	const title = { fontSize:36	}
	const listItem = { fontSize:24 }
	const subListItem = { fontSize:20 }
	const subList = { listStyleType:'lower-alpha' }

	return ( <div>
		<h1 style={title}>{NAME}</h1>
		<p style={defaultText}>In this breakout session your team will:</p>
		<ol>
			<li style={listItem}>Identify a presenter</li>
			<li style={listItem}>Discuss the following topics while the presenter summarizes the conversation:</li>
			<ol style={subList}>
				<li style={subListItem}>Buttons and Sliders and Text Fields</li>
				<li style={subListItem}>Containers and Layouts</li>
				<li style={subListItem}>Events</li>
				<li style={subListItem}>Models and Pop Ups</li>
				<li style={subListItem}>Threading Considerations</li>
				<li style={subListItem}>Combining Command Line and Graphical Interfaces</li>
			</ol>
			<li style={listItem}>Sit back, relax, and acknowledge the bravery and dedication of the presenter</li>
		</ol>
	</div> )
}
