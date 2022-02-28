
import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeSlideInternalURL } from './SlideRouter';

const NAME = 'Artificial Intelligence'
export const ARTIFICIAL_INTELLIGENCE_ROUTE = 'artificial-intelligence'
export const artificialIntelligenceLink = () => {return (<NavLink to={makeSlideInternalURL(ARTIFICIAL_INTELLIGENCE_ROUTE)}>{NAME}</NavLink>)}
export const artificialIntelligence = () => {
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
				<li style={subListItem}>Thinking Machines</li>
				<li style={subListItem}>Knowledge Representation and Data Quality</li>
				<li style={subListItem}>Expert Systems</li>
				<li style={subListItem}>Neural Networks</li>
				<li style={subListItem}>Natural Language Processing</li>
				<li style={subListItem}>Robotics</li>
			</ol>
			<li style={listItem}>Sit back, relax, and acknowledge the bravery and dedication of the presenter</li>
		</ol>
	</div> )
}
