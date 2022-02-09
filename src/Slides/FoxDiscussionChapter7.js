
import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeSlideInternalURL } from './SlideRouter';

const NAME = 'Breakout Session: Requirements (Fox chapter 7)'
export const FOX_DISCUSSION_7_ROUTE = 'fox-discussion-7'
export const foxDiscussion7Link = () => {return (<NavLink to={makeSlideInternalURL(FOX_DISCUSSION_7_ROUTE)}>{NAME}</NavLink>)}
export const foxDiscussion7 = () => {
	const title = { fontSize:36	}
	const listItem = { fontSize:24 }
	const subListItem = { fontSize:20 }
	const subList = { listStyleType:'decimal' }

	return ( <div>
		<h1 style={title}>{NAME}</h1>
		<ol>
			<li style={listItem}>Assign presenter</li>
			<li style={listItem}>Team discusses the topics below while the presenter summarizes topic(s) below:</li>
			<ol style={subList}>
				<li style={subListItem}>Behavior-Driven Design, Gemba (or Genba), Requirements, Use Cases, and User Stories</li>
				<li style={subListItem}>Points, velocity, SMART, and MVP</li>
				<li style={subListItem}>Story Points, Use Case Points, Function Points, and measuring productivity across teams</li>
				<li style={subListItem}>User Experience / User Interface Design, Interface Sketches, and Storyboards</li>
				<li style={subListItem}>Requirements Gathering Waterfall (Requirements) vs. Iterative (Use Cases) vs. Agile (Stories)</li>
			</ol>
			<li style={listItem}>Team sits back, relaxes, and acknowledges the bravery and dedication of the presenter</li>
		</ol>
	</div> )
}
