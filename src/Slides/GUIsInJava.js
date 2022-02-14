
import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeSlideInternalURL } from './SlideRouter';

const NAME = 'Graphical User Interfaces (GUIs) - Java'
export const DESIGN_PRINCIPLES_ROUTE = 'guis-java'
export const graphicalUserInterfacesJavaLink = () => {return (<NavLink to={makeSlideInternalURL(DESIGN_PRINCIPLES_ROUTE)}>{NAME}</NavLink>)}
export const graphicalUserInterfacesJava = () => {
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
				<li style={subListItem}>Summarize Java Graphical User Interface development</li>
				<li style={subListItem}>Position Java GUI development</li>
				<li style={subListItem}>Explain Heavyweight components</li>
				<li style={subListItem}>Explain Lightweight components</li>
				<li style={subListItem}>Explain the paint and paintComponent methods</li>
				<li style={subListItem}>Explain Layout Managers</li>
				<li style={subListItem}>Review Class extension</li>
				<li style={subListItem}>Introduce and Explain Event Handling</li>
				<li style={subListItem}>Explain Java Event Handling</li>
			</ol>
			<li style={listItem}>Sit back, relax, and acknowledge the bravery and dedication of the presenter</li>
		</ol>
	</div> )
}
