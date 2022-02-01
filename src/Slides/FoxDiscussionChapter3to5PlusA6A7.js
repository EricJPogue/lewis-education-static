
import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeSlideInternalURL } from './SlideRouter';

const NAME = 'Breakout Session: Fox Chapters 3-5 and plus A.6 and A.7'
export const FOX_DISCUSSION_3TO5A6A7_ROUTE = 'fox-discussion-3to5A6A7'
export const foxDiscussion3to5A6A7Link = () => {return (<NavLink to={makeSlideInternalURL(FOX_DISCUSSION_3TO5A6A7_ROUTE)}>{NAME}</NavLink>)}
export const foxDiscussion3to5A6A7 = () => {
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
				<li style={subListItem}>Chapter 3 Introduction to Ruby... plus how do we create non-objects in Ruby?</li>
				<li style={subListItem}>Chapter 4 Introduction to Rails... plus how do we create non-model-view-controller in Rails?</li>
				<li style={subListItem}>Chapter 5 Advanced Rails... plus opinionated authentication </li>
				<li style={subListItem}>A.6 Git and Version Control and A.7 GitHub</li>
				<li style={subListItem}>ORM (Object-Relational-Mapper) and NoSQL Databases</li>
			</ol>
			<li style={listItem}>Team sits back, relaxes, and acknowledges the bravery and dedication of the presenter</li>
		</ol>
	</div> )
}
