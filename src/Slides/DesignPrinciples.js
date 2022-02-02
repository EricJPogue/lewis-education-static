
import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeSlideInternalURL } from './SlideRouter';

const NAME = 'Design Principles'
export const DESIGN_PRINCIPLES_ROUTE = 'design-principles'
export const designPrinciplesLink = () => {return (<NavLink to={makeSlideInternalURL(DESIGN_PRINCIPLES_ROUTE)}>{NAME}</NavLink>)}
export const designPrinciples = () => {
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
				<li style={subListItem}>“Object-Oriented Programming Principles” vs. “Design Principles”</li>
				<li style={subListItem}>“Architecture” vs. “Agile Software Development” Principles</li>
				<li style={subListItem}>Rigidity, fragility, and immobility</li>
				<li style={subListItem}>SOLID</li>
				<li style={subListItem}>Single-Responsibility Principle</li>
				<li style={subListItem}>Open-Closed Principle</li>
				<li style={subListItem}>Lisko’s Substitution Principle</li>
				<li style={subListItem}>Dependency-Inversion Principle</li>
				<li style={subListItem}>Interface-Segregation Principle</li>
			</ol>
			<li style={listItem}>Sit back, relax, and acknowledge the bravery and dedication of the presenter</li>
		</ol>
	</div> )
}
