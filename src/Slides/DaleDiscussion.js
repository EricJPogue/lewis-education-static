
import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeSlideInternalURL } from './SlideRouter';

const NAME = 'Dale Chapter 3 Data Representation'
export const DALE_DISCUSSION_3_ROUTE = 'dale-discussion-3'
export const daleDiscussion3Link = () => {return (<NavLink to={makeSlideInternalURL(DALE_DISCUSSION_3_ROUTE)}>{NAME}</NavLink>)}
export const daleDiscussion3 = () => {
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
				<li style={subListItem}>Analog and Digital Data</li>
				<li style={subListItem}>Binary Representation of Numeric Data</li>
				<li style={subListItem}>Unicode including UTF-8 and UTF-16 Representations</li>
				<li style={subListItem}>Photo and Audio Representation Priorities</li>
				<li style={subListItem}>Video Representation priorities</li>
			</ol>
			<li style={listItem}>Sit back, relax, and acknowledge the bravery and dedication of the presenter</li>
		</ol>
	</div> )
}
