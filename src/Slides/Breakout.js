// Depreciated: Move content to SLSprint00.js

import React from 'react'
import { NavLink } from 'react-router-dom'

export const breakoutMaintenanceAndSupport = () => {
	return renderBreakout({
		'title':'Maintenance & Support',
		'topics': [
			'Maintenance',
			'Support',
			'Maintenance in Waterfall and Iterative',
			'Maintenance in Agile',
			'Describe the daily activities of a support team and the impact of user base',
			'Describe the daily activities of a maintenance team and how it differs from a development team' ]
	})
}

export const breakoutIntroducingPython6Through9 = () => {
	return renderBreakout({
		'title':'Loops, Tuples, Lists, Dictionaries, Sets, and Functions',
		'topics': [
			'Loops',
			'Tuples and Immutable',
			'Lists, Arrays, and Mutable',
			'Dictionaries and Sets',
			'Functions' ]
	})
}

export const renderBreakout = (breakoutData) => { 
	const processItem = (item) => { return (<li key={item} style={subListItem}>{item}</li>) }
	const processItemList = (itemList) => {
		return (<div>{itemList.map(processItem)}</div>)
	}

	const defaultText = { fontSize:20 }
	const title = { fontSize:36 }
	const listItem = { fontSize:20 }
	const subListItem = { fontSize:20 }
	const subList = { listStyleType:'lower-alpha' }
	
	return ( <div>
		<h1 style={title}>{breakoutData.title}</h1>
		<p style={defaultText}>In this breakout session your team will:</p>
		<ol>
			<li style={listItem}>Identify a presenter</li><br />
			<li style={listItem}>Discuss the following topics while the presenter summarizes the conversation:</li>
			<ol style={subList}>
				{processItemList(breakoutData.topics)}
			</ol><br />
			<li style={listItem}>Sit back, relax, and thank your presenter for their bravery and dedication</li>
		</ol>
	</div> ) 
}

export const daleDiscussion3Link = () => { return makeBreakoutLink(breakoutSlides.daleDiscussion3) }
export const daleDiscussion4Link = () => { return makeBreakoutLink(breakoutSlides.daleDiscussion4) }
export const daleDiscussion13Link = () => { return makeBreakoutLink(breakoutSlides.daleDiscussion13) }
export const daleDiscussion15Link = () => { return makeBreakoutLink(breakoutSlides.daleDiscussion15) }
export const designPrinciplesLink = () => { return makeBreakoutLink(breakoutSlides.designPrinciples) }

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
	},
	'daleDiscussion15': {
		'route':'dale-discussion-15',
		'title':'Networks',
		'topics': [
			'Network Types, Internet Connections, and Packet Switching',
			'Open Systems, Network Protocols, TCP/IP, and High-Level Protocols',
			'The Web, HTTP, HTTPs, Encryption, and Domain Name System (DNS)',
			'Cloud Computing and Web servers',
			'Blockchain, Bitcoin, and Hashing'
		]
	},
	'guisJava': {
		'route':'guis-java',
		'title':'Graphical User Interfaces (GUIs) - Java',
		'topics': [
			'Graphical User Interfaces and Java GUI development',
			'Heavyweight and Lightweight components',
			'Layout Managers',
			'Paint and paintComponent methods',
			'Class extension, interface implementation, and action listeners'
		]
	},
	'softwareTesting': {
		'route':'software-testing',
		'title':'Software Testing',
		'topics': [
			'Software development processes and how they impact testing',
			'Verification and validation and the criticality of finding/fixing defects early',
			'Types of testing including unit, integration, and user acceptance',
			'Types of testing including performance, manual, and automated',
			'Purpose and syntax of JUnit and JavaDoc',
			'Software development process, associated testing priorities, and how they impact software development'
		]
	},
	'desktopJava': {
		'route':'learning-java-desktop-applications',
		'title':'Learning Java - Desktop Applications',
		'topics': [
			'Buttons and Sliders and Text Fields',
			'Containers and Layouts',
			'Events',
			'Models and Pop Ups',
			'Threading Considerations',
			'Combining Command Line and Graphical Interfaces'
		]
	},
	'designPrinciples': {
		'route':'design-principles',
		'title':'Design Principles',
		'topics': [
			'“Object-Oriented Programming Principles” vs. “Design Principles”',
			'“Architecture” vs. “Agile Software Development” Principles',
			'Rigidity, fragility, and immobility',
			'SOLID',
			'*S*ingle-Responsibility Principle',
			'*O*pen-Closed Principle',
			'*L*iskov’s Substitution Principle',
			'*I*nterface-Segregation Principle',
			'*D*ependency-Inversion Principle'
		]
	},
	'foxChapter3to5plusA6andA7': {
		'route':'fox-discussion-3to5A6A7',
		'title':'Fox Chapters 3-5 and plus A.6 and A.7',
		'topics': [
			'Chapter 3 Introduction to Ruby plus creating non-objects in Ruby',
			'Chapter 4 Introduction to Rails plus creating non-model-view-controller in Rails',
			'Chapter 5 Advanced Rails plus opinionated authentication',
			'A.6 Git and Version Control and A.7 GitHub',
			'ORM (Object-Relational-Mapper) and NoSQL Databases',
		]
	},
	'foxChapter7': {
		'route':'fox-discussion-7',
		'title':'Requirements (Fox chapter 7)',
		'topics': [
			'Behavior-Driven Design, Gemba (or Genba), Requirements, Use Cases, and User Stories',
			'Points, velocity, SMART, and MVP',
			'Story Points, Use Case Points, Function Points, and measuring productivity across teams',
			'User Experience / User Interface Design, Interface Sketches, and Storyboards',
			'Requirements Gathering Waterfall (Requirements) vs. Iterative (Use Cases) vs. Agile (Stories)',
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
			<h1 style={title}>{breakoutData.title} Breakout</h1>
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