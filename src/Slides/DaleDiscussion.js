
import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeSlideInternalURL } from './SlideRouter';

const NAME = 'Data Representation'
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

const NAME4 = 'Gates and Circuits'
export const DALE_DISCUSSION_4_ROUTE = 'dale-discussion-4'
export const daleDiscussion4Link = () => {return (<NavLink to={makeSlideInternalURL(DALE_DISCUSSION_4_ROUTE)}>{NAME4}</NavLink>)}
export const daleDiscussion4 = () => {
	const defaultText = { fontSize:24 }
	const title = { fontSize:36	}
	const listItem = { fontSize:24 }
	const subListItem = { fontSize:20 }
	const subList = { listStyleType:'lower-alpha' }

	return ( <div>
		<h1 style={title}>{NAME4}</h1>
		<p style={defaultText}>In this breakout session your team will:</p>
		<ol>
			<li style={listItem}>Identify a presenter</li>
			<li style={listItem}>Discuss the following topics while the presenter summarizes the conversation:</li>
			<ol style={subList}>
				<li style={subListItem}>Define Gates</li>
				<li style={subListItem}>Define Circuits and how they relate to Gates</li>
				<li style={subListItem}>Briefly describe NOT and AND gates</li>
				<li style={subListItem}>Briefly describe OR, XOR, NAND, and NOR gates? Which one is consistent with English language "or"?</li>
				<li style={subListItem}>Describe Integrated Circuits and CPU Chips? How do they relate?</li>
			</ol>
			<li style={listItem}>Sit back, relax, and acknowledge the bravery and dedication of the presenter</li>
		</ol>
	</div> )
}
