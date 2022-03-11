import React from 'react';
import { NavLink } from 'react-router-dom';

export const daleDiscussion3Link = () => { return makeBreakoutLink(breakoutSlides.daleDiscussion3) }
export const daleDiscussion4Link = () => { return makeBreakoutLink(breakoutSlides.daleDiscussion4) }
export const daleDiscussion13Link = () => { return makeBreakoutLink(breakoutSlides.daleDiscussion13) }

const BASE_BREAKOUT_ROUTE = '/breakout/'
const makeBreakoutLink = (breakout) => { return (<NavLink to={BASE_BREAKOUT_ROUTE+breakout.route}>{breakout.title}</NavLink>) }
const breakoutSlides = {
	'artificialIntelligence': {
		'route':'artificial-intelligence',
		'title':'Artificial Intelligence',
		'topics': [
			'Thinking Machines',
			'Knowledge Representation and Data Quality',
			'Expert Systems',
			'Neural Networks',
			'Natural Language Processing',
			'Robotics'
		]
	},
	'daleDiscussion3': {
		'route':'dale-discussion-3',
		'title':'Data Representation',
		'topics': [
			'Analog and Digital Data',
			'Binary Representation of Numeric Data',
			'Unicode including UTF-8 and UTF-16 Representations',
			'Photo and Audio Representation Priorities',
			'Video Representation priorities'
		]
	},
	'daleDiscussion4': {
		'route':'dale-discussion-4',
		'title':'Gates and Circuits',
		'topics': [
			'Define Gates',
			'Define Circuits and how they relate to Gates',
			'Briefly describe NOT and AND gates',
			'Briefly describe OR, XOR, NAND, and NOR gates and share which one is consistent with English language "or"',
			'Describe Integrated Circuits, CPU Chips, and how do they relate'
		]
	},
	'daleDiscussion13': {
		'route':'dale-discussion-13',
		'title':'Artificial Intelligence',
		'topics': [
			'Artificial Intelligence and its relationship to Data Science',
			'Thinking Machines',
			'Knowledge Representation and Data Quality',
			'Expert Systems',
			'Neural Networks',
			'Natural Language Processing',
			'Robotics'
		]
	}
}

export class Breakout extends React.Component {
	getBreakoutData = (route) => {
		let breakoutData = null
		Object.entries(breakoutSlides).forEach(([key, value]) => {
			if (value.route === route) {
				breakoutData = value
			}
		});
		return breakoutData
	}

	render() { 
		const processItem = (item) => { return (<li key={item} style={subListItem}>{item}</li>) }
		const processItemList = (itemList) => {
			return (<div>{itemList.map(processItem)}</div>)
		}

		const defaultText = { fontSize:24 }
		const title = { fontSize:36 }
		const listItem = { fontSize:24 }
		const subListItem = { fontSize:20 }
		const subList = { listStyleType:'lower-alpha' }
		const breakoutData = this.getBreakoutData(this.props.match.params.reference)

		return ( <div>
			<h1 style={title}>{breakoutData.title}</h1>
			<p style={defaultText}>In this breakout session your team will:</p>
			<ol>
				<li style={listItem}>Identify a presenter</li>
				<li style={listItem}>Discuss the following topics while the presenter summarizes the conversation:</li>
				<ol style={subList}>
					{processItemList(breakoutData.topics)}
				</ol>
				<li style={listItem}>Sit back, relax, and acknowledge the bravery and dedication of the presenter</li>
			</ol>
		</div> ) }
}